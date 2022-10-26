import React from "react";
import Image from "next/image";
interface IconTypes {
  path: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  alt: string;
}

export const Icon: React.FC<IconTypes> = (props) => {
  const { path, width, height, alt, onClick } = props;
  return (
    <Image
      src={path}
      alt={alt}
      height={height}
      width={width}
      onClick={onClick}
    />
  );
};
