import { ReactNode } from "react";
import { LayoutContainer } from "./styles";

interface DefaultLayoutPropsType {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutPropsType) {
  return (
    <LayoutContainer>
      <div>{children}</div>
    </LayoutContainer>
  );
}
