import React, { ReactNode, useEffect, useState } from "react";
import { init } from "mocks";
import { MswStyle } from "./msw-style";
import { processEnv } from "@next/env";

interface MSWProviderTypes {
  children: ReactNode | ReactNode[];
}
export const MSWProvider: React.FC<MSWProviderTypes> = (props) => {
  const { children } = props;
  const [msw, setMsw] = useState(true);
  const [show, setShow] = useState(true);
  const env = process.env.NODE_ENV;
  const syncMsw = async (bool: boolean) => {
    setShow(false);
    await init(bool);
    setMsw(bool);
    setShow(true);
  };
  const handleOnButton = () => {
    syncMsw(!msw);
  };
  useEffect(() => {
    if (env == "development") {
      syncMsw(true);
    }
  }, []);
  return (
    <>
      {env == "development" && (
        <MswStyle onClick={handleOnButton}>
          {`MSW ${msw ? "끄기" : "켜기"}`}
        </MswStyle>
      )}

      {show && children}
    </>
  );
};
