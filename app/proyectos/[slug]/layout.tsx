import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const layout = ({ children }: ILayout) => {
  return <div className="py-10">{children}</div>;
};

export default layout;
