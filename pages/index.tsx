import type { NextPage } from "next";
import HeadTitle from "../components/head";
import Header from "../components/layout/Header";
const Home: NextPage = () => {
  return (
    <>
      <HeadTitle title={"경매"} />
      <Header />
    </>
  );
};

export default Home;
