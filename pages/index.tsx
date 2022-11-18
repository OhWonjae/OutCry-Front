import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Select } from "components/select";
import { SearchBar } from "components/searchBar";
import { ProductListTypes, sortList } from "common/type/Main";
import Stack from "../components/stack";
import { Product } from "components/layout/Product";
import { ProductTypes } from "common/type/Main";
import { getProducts } from "../apis/products/api";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
const Home: NextPage = () => {
  const router = useRouter();
  const [sort, setSort] = useState((router.query.sort as string) || "");
  const [page, setPage] = useState(parseInt(router.query.page as string) || 1);
  const [search, setSearch] = useState((router.query.search as string) || "");

  const [productList, setProductList] = useState<ProductListTypes>();
  const handleOnSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const { data, isLoading, refetch } = useQuery<{
    data: Array<ProductTypes>;
    total: number;
    totalPage: number;
  }>(
    ["getProducts", page],
    () => {
      return getProducts({ sort, page, search });
    },
    {
      refetchOnWindowFocus: false,
      enabled: true,
      onSuccess: (data) => {
        router.push({
          pathname: "",
          query: { sort, page, search },
        });
        setProductList(data);
      },
    }
  );
  const handleOnSearchBarSubmit = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("submit", search);
    refetch();
  };
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Select items={sortList} value={sort} onChange={handleOnSort} />
        <SearchBar
          onChange={handleOnSearch}
          onSubmit={handleOnSearchBarSubmit}
          value={search}
        />
      </Stack>
      <Stack wrap={"nowrap"} direction={"row"} justifyContent={"flex-start"}>
        {productList?.data?.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </Stack>
      <Stack justifyContent={"center"}>
        <Pagination
          count={productList?.totalPage}
          page={page}
          onChange={(e, v) => {
            setPage(v);
          }}
          variant="outlined"
          shape="rounded"
          color={"primary"}
        />
      </Stack>
    </>
  );
};

export default Home;
