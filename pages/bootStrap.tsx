import type { NextPage } from "next";
import HeadTitle from "../components/head";
import Header from "../components/layout/Header";
import { getProducts } from "apis/products/api";
import { useEffect } from "react";
export const BootStrap: NextPage = () => {
  const init = async () => {
    const { worker } = await import("../mocks/browser");
    worker.start();
    const data = await getProducts();
    console.log(data);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <HeadTitle title={"경매"} />
      <Header />
    </>
  );
};
