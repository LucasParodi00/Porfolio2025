import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconType } from "react-icons";

interface IButtonBody {
  text: string;
  Icono: LucideIcon | IconType;
  href: string;
  target?: "_blank" | "_parent";
  style?: string;
  description: string;
}

export const ButtonBody = ({
  text,
  Icono,
  href,
  target = "_blank",
  style,
  description,
}: IButtonBody) => {
  const icono = <Icono />;
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      aria-label={description}
    >
      <Button
        variant={"outline"}
        className={`bg-white px-7 py-5 border border-black/40 flex gap-6 ${style}`}
      >
        <div>{icono}</div>
        <span>{text}</span>
      </Button>
    </Link>
  );
};
