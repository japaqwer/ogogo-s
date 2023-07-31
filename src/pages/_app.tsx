import Footer from "@/components/Footer/Footer";
import Header from "@/pages/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import AdminProduct from "./admin/adminProduct";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
