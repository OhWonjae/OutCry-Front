import axios from "axios";
import { SearchOptions } from "../../common/type/Main";
export const getProducts = async ({ sort, page, search }: SearchOptions) => {
  const stringUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const url = new URL(`${stringUrl}/products`);
  const params = url.searchParams;
  params.append("sort", sort);
  params.append("page", page.toString());
  params.append("search", search);
  return axios.get(url.toString()).then(({ data, headers }) => {
    return {
      data,
      totalPage: parseInt(headers["x-total-page"]),
      total: parseInt(headers["x-total"]),
    };
  });
};
