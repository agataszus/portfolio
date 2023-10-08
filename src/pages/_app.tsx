import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Agata Szustkiewicz - Portfolio</title>
      </Head>
      <Layout className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
