import React from "react";
import Head from "next/head";
interface HeadTitleTypes {
  title: string;
}

const HeadTitle: React.FC<HeadTitleTypes> = (props) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadTitle;
