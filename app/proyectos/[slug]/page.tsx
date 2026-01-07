"use client";

import type React from "react";

import { notFound, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Database,
  Code2,
  Users,
  Newspaper,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

import { projectsDetail } from "@/feature/projects/utils/projectsDetail";
import Image from "next/image";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsDetail.find((p) => p.slug === slug);
  if (!project) notFound();

  const Icon = project.Icon;

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex justify-between items-center  mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-8 w-8 text-orange-500" />
              </div>
              <h1 className="font-bold text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </div>
            {project.autor && (
              <div>
                <Badge className="bg-orange-600 text-white text-sm cursor-none select-none">
                  {project.autor}
                </Badge>
              </div>
            )}
          </div>

          <p className="text-sm lg:text-[16px] text-muted-foreground max-w-3xl">
            {project.hero.description}
          </p>

          {project.hero.badges && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.hero.badges.map((badge) => (
                <Badge key={badge.label} variant="secondary">
                  <badge.icon className="mr-2 h-4 w-4" />
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= ORIGEN ================= */}
      {project.origin && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="font-bold text-3xl lg:text-4xl mb-6">
            {project.origin.title}
          </h2>
          <div
            className={
              project.origin.image
                ? "grid lg:grid-cols-3 gap-8 items-start"
                : ""
            }
          >
            <div className="space-y-4 text-sm sm:text-lg text-muted-foreground col-span-2">
              {project.origin.paragraphs.map((p, i) => (
                <p key={i} className="lg:text-[16px]">
                  {p}
                </p>
              ))}
            </div>
            {project.origin.image && (
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  fill
                  src={project.origin.image || "/placeholder.svg"}
                  alt={project.origin.title}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= EVOLUCIÓN ================= */}
      {project.evolution && (
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-bold text-3xl lg:text-4xl mb-12 text-center">
              Evolución del Proyecto
            </h2>

            <div className="grid gap-2 md:grid-cols-3">
              {project.evolution.map((step) => (
                <Card key={step.step}>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-2xl font-bold text-orange-500">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PLATAFORMAS ================= */}
      {project.platform && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="font-bold text-3xl lg:text-4xl mb-12 text-center">
            Plataformas
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {project.platform.mobile && (
              <Card>
                <CardContent className="p-8">
                  <Smartphone className="h-8 w-8 text-orange-500 mb-6" />
                  <h3 className="font-bold text-lg mb-4">Aplicación Móvil</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {project.platform.mobile.description}
                  </p>
                  <ul className="space-y-2">
                    {project.platform.mobile.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-muted-foreground text-sm"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {project.platform.web && (
              <Card>
                <CardContent className="p-8">
                  <Globe className="h-8 w-8 text-orange-500 mb-6" />
                  <h3 className="font-bold text-lg mb-4">Plataforma Web</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {project.platform.web.description}
                  </p>
                  <ul className="space-y-2">
                    {project.platform.web.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-muted-foreground text-sm"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* ================= METODOLOGÍA ================= */}
      {project.methodology && (
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-orange-500" />
              <h2 className="font-bold text-3xl lg:text-4xl text-center">
                Metodología
              </h2>
            </div>

            <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-xs lg:text-sm">
              {project.methodology.description}
            </p>

            {project.methodology.roles && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.methodology.roles.map((role) => (
                  <Card key={role.title}>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">
                        {role.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {role.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= ALCANCE ================= */}
      {project.reach && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <TrendingUp className="h-8 w-8 text-orange-500" />
            <h2 className="font-bold text-3xl lg:text-4xl text-center">
              Alcance e Impacto
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {project.reach.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= STACK ================= */}
      {project.stack && (
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-bold text-3xl lg:text-4xl mb-12 text-center">
              Stack Tecnológico
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.stack.backend && (
                <StackCard
                  icon={<Code2 className="text-orange-500" />}
                  title="BackEnd"
                  label={project.stack.backend}
                />
              )}
              {project.stack.database && (
                <StackCard
                  icon={<Database className="text-orange-500" />}
                  title="Base de Datos"
                  label={project.stack.database}
                />
              )}
              {project.stack.frontend && (
                <StackCard
                  icon={<Globe className="text-orange-500" />}
                  title="FrontEnd"
                  label={project.stack.frontend}
                />
              )}
              {project.stack.mobile && (
                <StackCard
                  icon={<Smartphone className="text-orange-500" />}
                  title="Movil"
                  label={project.stack.mobile}
                />
              )}
              {project.stack.infrastructure && (
                <StackCard
                  icon={<Code2 className="text-orange-500" />}
                  title="Infraestructura"
                  label={project.stack.infrastructure}
                />
              )}
              {project.stack.tools && (
                <StackCard
                  title="Herramientas"
                  icon={<Code2 className="text-orange-500" />}
                  label={project.stack.tools}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= MEDIOS Y PRENSA ================= */}
      {project.media && project.media.length > 0 && (
        <section className="mx-auto py-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Newspaper className="h-8 w-8 text-primary" />
            <h2 className="font-bold text-3xl lg:text-4xl text-center">
              Prensa y Medios
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {project.media?.map((item, i) => (
              <Card
                key={i}
                className="group hover:shadow-lg transition-shadow relative"
              >
                <CardContent className="py-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.outlet}
                      </p>
                      <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                    {item.type && (
                      <Badge
                        variant="outline"
                        className="ml-2 absolute right-2 top-5"
                      >
                        {item.type}
                      </Badge>
                    )}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Ver publicación
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= ESTADO ================= */}
      {project.currentStatus && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 text-center">
          <h2 className="font-bold text-3xl lg:text-4xl mb-6">Estado Actual</h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto">
            {project.currentStatus}
          </p>
        </section>
      )}
    </main>
  );
}

const StackCard = ({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-extralight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 flex items-center gap-3 font-extralight text-xs">
        {icon}
        <span>{label}</span>
      </CardContent>
    </Card>
  );
};
