import { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";

import {
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLaravel,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNginx,
} from "react-icons/si";
import { SiTypescript, SiTailwindcss, SiPostman } from "react-icons/si";
import { SiNextdotjs, SiNestjs } from "react-icons/si";
import { SiUbuntu } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export type TechName =
  | "react"
  | "reactnative"
  | "express"
  | "nextjs"
  | "nestjs"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "sqlserver"
  | "typescript"
  | "tailwindcss"
  | "docker"
  | "ubuntu"
  | "git"
  | "github"
  | "postman"
  | "laravel"
  | "dotnet"
  | "csharp"
  | "html"
  | "css"
  | "javascript"
  | "nginx";

export const techIconMap: Record<TechName, IconType> = {
  react: FaReact,
  reactnative: SiReact,
  express: SiExpress,
  nextjs: SiNextdotjs,
  nestjs: SiNestjs,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  sqlserver: DiMsqlServer,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  docker: FaDocker,
  ubuntu: SiUbuntu,
  git: FaGitAlt,
  github: FaGithub,
  postman: SiPostman,
  laravel: FaLaravel,
  dotnet: SiDotnet,
  csharp: TbBrandCSharp,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  nginx: SiNginx,
};
