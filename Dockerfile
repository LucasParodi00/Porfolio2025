# Etapa 1: Dependencias
FROM node:22-alpine AS deps
# Instalar libc6-compat necesario para algunas deps en Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json yarn.lock ./

# Instalar dependencias (con frozen-lockfile para asegurar versiones exactas)
RUN yarn install --frozen-lockfile

# Etapa 2: Builder
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Deshabilitar telemetría de Next.js durante el build
ENV NEXT_TELEMETRY_DISABLED 1

# Construir el proyecto
RUN yarn build

# Etapa 3: Runner (Imagen final)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crear usuario y grupo para no correr como root (seguridad)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar la carpeta public (activos estáticos)
COPY --from=builder /app/public ./public

# Copiar el build "standalone" y los archivos estáticos generados
# Next.js pone automáticamente los node_modules necesarios dentro de standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Exponer el puerto
EXPOSE 9001

ENV PORT 9001
# En modo standalone, se ejecuta server.js, no 'yarn start'
CMD ["node", "server.js"]