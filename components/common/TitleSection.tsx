import { LucideIcon } from "lucide-react";

interface ISectionTitle {
  title: string;
  subTitle?: string;
  Icon: LucideIcon;
}

export const SectionTitle = ({ title, subTitle, Icon }: ISectionTitle) => {
  const icono = (
    <Icon
      size={65}
      color="#f54900"
      strokeWidth={3}
      className="h-8 w-8 text-primary"
      aria-hidden="true"
    />
  );
  return (
    <div className="mb-12 space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white dark:bg-primary/10">
          {icono}
        </div>
        <h2
          id="education-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          {title}
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl">{subTitle}</p>
    </div>
  );
};
