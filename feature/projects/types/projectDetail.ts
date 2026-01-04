import { LucideIcon } from "lucide-react";

export interface ProjectBadge {
  label: string;
  icon: LucideIcon;
}

export interface ProjectSection {
  title: string;
  description: string;
}

export interface ProjectEvolution {
  step: number;
  title: string;
  description: string;
}

export interface ProjectPlatform {
  description: string;
  features: string[];
}

export interface ProjectStack {
  database?: string;
  backend?: string;
  frontend?: string;
  mobile?: string;
  infrastructure?: string;
  tools?: string;
}

export interface ProjectRole {
  title: string;
  description: string;
}

export interface Media {
  title: string;
  outlet: string;
  date: string;
  url: string;
  type: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  Icon: LucideIcon;
  autor?: string;

  hero: {
    description: string;
    badges?: ProjectBadge[];
  };

  origin?: {
    title: string;
    paragraphs: string[];
    image?: string;
  };

  evolution?: ProjectEvolution[];

  platform?: {
    web?: ProjectPlatform;
    mobile?: ProjectPlatform;
  };

  stack?: ProjectStack;

  methodology?: {
    description: string;
    roles?: ProjectRole[];
  };

  reach?: ProjectSection[];
  media?: Media[];
  currentStatus?: string;
}
