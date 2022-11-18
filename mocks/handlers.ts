import { rest } from "msw";
import { ProductTypes } from "common/type/Main";
export const handlers = [
  rest.get("/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set("X-Total", "7"),
      ctx.set("X-Total-Page", "2"),
      ctx.json<Array<ProductTypes>>([
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
        {
          id: "1",
          currentPrice: 500000,
          hopePrice: 1000,
          name: "퓨처파이트",
          isFavorite: false,
          startingPrice: 0,
          remainTime: "",
          thumbnail: {
            name: "img",
            url: "/images/img.png",
            id: "",
            size: "",
            extension: "png",
          },
        },
      ])
    );
  }),
];
