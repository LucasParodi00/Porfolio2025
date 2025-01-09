// types.ts
export type TecnologiasPermitidas = 
  | "react" 
  | "laravel" 
  | "tailwind" 
  | "mysql" 
  | "git" 
  | "github" 
  | "docker" 
  | "php" 
  | "js" 
  | "node" 
  | "css" 
  | "csharp" 
  | "net" 
  | 'codeigniter'
  | "sqlserver";

export interface Proyecto {
  nombre: string;
  descripcion: string;
  referencia: string;
  imagen: string;
  tecnologias: TecnologiasPermitidas[];
}

export type Projects = {
  [K in 'streamtech' | 'pulguitas' | 'vetSales' | 'gimnasio' | 'vegetarian' | 'hell' | 'rockEdm']: Proyecto;
}

export type IconosMap = Record<TecnologiasPermitidas, any>;