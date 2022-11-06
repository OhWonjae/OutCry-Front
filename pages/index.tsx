import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Select } from "components/select";
import { SearchBar } from "components/searchBar";
import { sortList } from "common/type/Main";
import Stack from "../components/stack";
import { Product } from "components/layout/Product";
import { ProductTypes } from "common/type/Main";
import { getProducts } from "../apis/products/api";
import { Pagination } from "@mui/material";
const Home: NextPage = () => {
  const [sort, setSort] = useState("");
  const handleOnSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };
  const [search, setSearch] = useState("");
  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleOnSearchBarSubmit = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("submit", search);
  };
  const [products, setProducts] = useState<Array<ProductTypes>>();
  const getfunc = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };
  useEffect(() => {
    getfunc();
  }, [sort]);
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
        {products?.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </Stack>
      <Stack justifyContent={"center"}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color={"primary"}
        />
      </Stack>
    </>
  );
};

export default Home;
