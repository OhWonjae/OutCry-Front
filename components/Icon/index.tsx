import React from "react";
import Image from "next/image";
import { Interpolation, Theme } from "@emotion/react";
interface IconTypes {
  path: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  alt: string;
  styles?: Interpolation<Theme>;
}

export const Icon: React.FC<IconTypes> = (props) => {
  const { path, width, height, alt, onClick, styles } = props;
  return (
    <span css={styles}>
      <Image
        src={path}
        alt={alt}
        height={height}
        width={width}
        onClick={onClick}
      />
    </span>
  );
};
