import React from "react";
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
  return (
    <HeadStyle>
      <HeadLine>
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
      </HeadLine>
      {!isDetail && (
        <>
          <HeadLine>
            <HeadTitle fontSize={"50px"}>경매를 통한 현명한 중고거래</HeadTitle>
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
        </>
      )}
    </HeadStyle>
  );
};

export default Header;
