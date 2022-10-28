import React, { ReactNode } from "react";
import { ContainerStyle } from "./container-style";
interface ContainerTypes {
  children?: ReactNode | ReactNode[];
}
const Container = (props: ContainerTypes) => {
  const { children } = props;
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
