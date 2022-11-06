import { server } from "./server";
export const init = async (bool: boolean) => {
  if (typeof window !== "undefined") {
    const { browser } = await import("./browser");
    bool ? browser.start() : browser.stop();
  } else {
    const { server } = await import("./server");
    bool ? server.listen() : server.close();
  }
};
