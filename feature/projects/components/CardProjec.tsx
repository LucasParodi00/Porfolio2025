import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechIcons } from "./TechIcons";
import type { TechName } from "../utils/icons";

export interface ICardProject {
  title: string;
  description: string;
  href: string;
  urlImage: string;
  techs: TechName[];
}

export const CardProject = ({
  title,
  description,
  urlImage,
  href,
  techs,
}: ICardProject) => {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-border/50 hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors text-balance">
              {title}
            </CardTitle>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="relative rounded-lg overflow-hidden md:col-span-2 w-full h-56 md:h-64 bg-muted group-hover:ring-2 ring-primary/20 transition-all duration-300">
              <Image
                src={urlImage || "/placeholder.svg"}
                alt={`${title} - Project preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="md:col-span-3 flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
                {description}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Tecnologías
                </p>
                <TechIcons
                  className="flex flex-wrap gap-3"
                  technologies={techs}
                  size={28}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
