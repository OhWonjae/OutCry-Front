import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Select } from "components/select";
import { SearchBar } from "components/searchBar";
import { sortList } from "common/type/Main";
import Stack from "../components/stack";
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
  useEffect(() => {
    console.log("sort", sort);
  }, [sort]);
  return (
    <>
      <Stack direction={"row"}>
        <Select items={sortList} value={sort} onChange={handleOnSort} />
        <SearchBar
          onChange={handleOnSearch}
          onSubmit={handleOnSearchBarSubmit}
          value={search}
        />
      </Stack>
    </>
  );
};

export default Home;
