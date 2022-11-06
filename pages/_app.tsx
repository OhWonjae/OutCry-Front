import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RecoilRoot } from "recoil";
import Header from "components/layout/Header";
import Container from "components/layout/Container";
import { MSWProvider } from "components/MSWProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <MSWProvider>
            <Header />
            <Container>
              <Component {...pageProps} />
            </Container>
          </MSWProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
