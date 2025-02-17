import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "../components/SidebarWithHeader";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
