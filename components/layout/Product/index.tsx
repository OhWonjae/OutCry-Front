import React, { ChangeEventHandler } from "react";
import { ProductButton, ProductStyle } from "./product-style";
import { ProductTypes } from "common/type/Main";
import { Icon } from "components/Icon";
import Stack from "../../stack";
import { Box } from "@mui/system";
interface ProductLayoutTypes {
  item: ProductTypes;
  onClick?: () => void;
}

export const Product: React.FC<ProductLayoutTypes> = (props) => {
  const { item, onClick } = props;
  return (
    <ProductStyle>
      <Icon
        alt={"product"}
        path={item.thumbnail?.url || ""}
        width={278}
        height={200}
      />
      <Stack justifyContent={"space-between"} css={{ margin: "10px 0 10px 0" }}>
        <span>{item.name || ""}</span>
        <span>
          <Icon
            alt={"favorite"}
            path={"https://jungoauction.com/img/bt_wishlist_off.png"}
            width={"25px"}
            height={"25px"}
          />
        </span>
      </Stack>
      <Stack justifyContent={"space-between"} css={{ margin: "5px 0 5px 0" }}>
        <span>희망가</span>
        <span>{item.hopePrice.toLocaleString() || "0"}</span>
      </Stack>
      <Stack justifyContent={"space-between"} css={{ margin: "5px 0 5px 0" }}>
        <span>시작가</span>
        <span>{item.startingPrice.toLocaleString() || "0"}</span>
      </Stack>
      <Stack justifyContent={"space-between"} css={{ margin: "5px 0 5px 0" }}>
        <span>현재가</span>
        <span>{item.currentPrice.toLocaleString() || "0"}</span>
      </Stack>
      <Stack justifyContent={"center"} css={{ margin: "10px 0 10px 0" }}>
        {item.remainTime || "0"}
      </Stack>
      <Box
        height={"20%"}
        borderColor={"#eaeaea"}
        borderTop={"solid 0.1px"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <ProductButton>응찰하러 가기</ProductButton>
      </Box>
    </ProductStyle>
  );
};
