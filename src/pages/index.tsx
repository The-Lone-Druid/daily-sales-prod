import { Constants } from "@/constants/AppConstants";
import Head from "next/head";
import Image from "next/image";
import VercelImage from "../../public/vercel.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Sales</title>
        <meta
          name="description"
          content="Billing, Inventory management and Debt Tracking application."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
