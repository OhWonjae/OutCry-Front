import React from "react";
import { NavigationUlStyle, NavigationLiStyle } from "./navigation-style";
export const Navigation: React.FC = () => {
  return (
    <>
      <NavigationUlStyle>
        <NavigationLiStyle>
          <a>디지털/가전</a>
        </NavigationLiStyle>
        <NavigationLiStyle>
          <a>아웃도어/스포츠</a>
        </NavigationLiStyle>
        <NavigationLiStyle>
          <a>자동차</a>
        </NavigationLiStyle>
      </NavigationUlStyle>
    </>
  );
};
