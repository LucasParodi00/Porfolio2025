import { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
};

export const Highlight = ({ children }: HighlightProps) => {
  return <span className="font-medium">{children}</span>;
};
