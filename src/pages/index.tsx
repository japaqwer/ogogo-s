import Head from "next/head";
import { Inter } from "next/font/google";
import Carusel from "@/components/Carusel/Carusel";
import CardOne from "@/components/Home/CardOne";
import CardTwo from "@/components/Home/Cardtwo";
import CardThree from "@/components/Home/CardThree";
import { Product } from "@/components/Products/Product";
import { Basket } from "@/components/Basket/Basket";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ogogo store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carusel />
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      {/* <Product/> */}
      {/* <Basket/> */}

      
    </>
  );
}
