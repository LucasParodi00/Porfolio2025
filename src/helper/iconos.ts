import type { IconosMap, TecnologiasPermitidas } from '../pages/proyectos/types';
import CsharpIcon from "../components/iconos/CsharpIcon.astro";
import CssIcon from "../components/iconos/CssIcon.astro";
import DockerIcon from "../components/iconos/DockerIcon.astro";
import GitHubIcono from "../components/iconos/GitHubIcono.astro";
import GitIcon from "../components/iconos/GitIcon.astro";
import JsIcon from "../components/iconos/JsIcon.astro";
import Laravel11 from "../components/iconos/Laravel11.astro";
import MysqlIcon from "../components/iconos/MysqlIcon.astro";
import NetIcon from "../components/iconos/NetIcon.astro";
import NodeIcon from "../components/iconos/NodeIcon.astro";
import PhpIcon from "../components/iconos/PhpIcon.astro";
import ReactIcono from "../components/iconos/ReactIcono.astro";
import SqlServerIcon from "../components/iconos/SqlServerIcon.astro";
import Tailwind from "../components/iconos/Tailwind.astro";
import Codeigniter from '../components/iconos/Codeigniter.astro';
export const iconos: IconosMap = {
  react: ReactIcono,
  laravel: Laravel11,
  tailwind: Tailwind,
  mysql: MysqlIcon,
  git: GitIcon,
  github: GitHubIcono,
  docker: DockerIcon,
  php: PhpIcon,
  js: JsIcon,
  node: NodeIcon,
  css: CssIcon,
  csharp: CsharpIcon,
  net: NetIcon,
  sqlserver: SqlServerIcon,
  codeigniter: Codeigniter
};

export const getIconByTechnology = (technology: TecnologiasPermitidas) => {
  return iconos[technology.toLowerCase() as TecnologiasPermitidas] || null;
};