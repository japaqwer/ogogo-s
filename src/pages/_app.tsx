import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      {/* <Header/> */}
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
};

export default MyApp;
