import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface IButtonBody {
  text: string;
  Icono: LucideIcon;
  href: string;
  target?: "_blank" | "_parent";
  style?: string;
}

export const ButtonBody = ({
  text,
  Icono,
  href,
  target = "_blank",
  style,
}: IButtonBody) => {
  const icono = <Icono />;
  return (
    <Link href={href} target={target}>
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
