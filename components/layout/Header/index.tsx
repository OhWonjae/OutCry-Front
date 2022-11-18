import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation/index";
import { Icon } from "../../Icon";
import { HeadStyle, HeadLine, HeadTitle, HeadButton } from "./head-style";
import { useRouter } from "next/router";
interface HeaderTypes {
  isDetail?: boolean;
}
const Header = (props: HeaderTypes) => {
  const router = useRouter();
  const { isDetail } = props;
  const [scrollOver, setScrollOver] = useState(false);
  const handleOnScroll = () => {
    if (window.scrollY > 80) {
      setScrollOver(true);
    } else if (window.scrollY <= 80) {
      setScrollOver(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleOnScroll();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleOnScroll();
      });
    };
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: scrollOver ? "#21b6c8" : "",
          padding: "0px 100px 0px 100px",
          zIndex: 100,
        }}
      >
        <Icon
          path={"/images/logo_top.png"}
          width={100}
          height={50}
          alt={"logo"}
          onClick={() => {
            router.replace("/");
          }}
          styles={{ alignSelf: "center" }}
        />
        <Navigation />
      </div>
      <HeadStyle>
        {!isDetail && (
          <div style={{ paddingTop: "50px" }}>
            <HeadLine>
              <HeadTitle fontSize={"50px"}>
                경매를 통한 현명한 중고거래
              </HeadTitle>
            </HeadLine>
            <HeadLine>
              <HeadTitle fontSize={"20px"}>
                좋은 가격에 팔고, 좋은 물건은 내가 산다!
              </HeadTitle>
            </HeadLine>
            <HeadLine>
              <HeadButton>로그인하기</HeadButton>
              <HeadButton>회원가입하기</HeadButton>
            </HeadLine>
          </div>
        )}
      </HeadStyle>
    </>
  );
};

export default Header;
