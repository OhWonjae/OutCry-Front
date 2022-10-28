import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Header from "components/layout/Header";
import Container from "components/layout/Container";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const init = async () => {
    const { worker } = await import("../mocks/browser");
    worker.start();
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Header />
          <Container>
            <Component {...pageProps} />
          </Container>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
