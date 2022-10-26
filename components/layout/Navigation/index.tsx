import React from "react";
import {
  NavigationStyle,
  NavigationUlStyle,
  NavigationLiStyle,
} from "./navigation-style";
import { Icon } from "../../Icon";
import Link from "next/link";
import { useRouter } from "next/router";
export const Navigation: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <NavigationStyle>
        <Icon
          path={"/images/logo_top.png"}
          width={100}
          height={50}
          alt={"logo"}
          onClick={() => {
            router.replace("/");
          }}
        />
        <NavigationUlStyle>
          <NavigationLiStyle>
            <a>1</a>
          </NavigationLiStyle>
          <NavigationLiStyle>
            <a>2</a>
          </NavigationLiStyle>
          <NavigationLiStyle>
            <a>3</a>
          </NavigationLiStyle>
        </NavigationUlStyle>
      </NavigationStyle>
    </>
  );
};
