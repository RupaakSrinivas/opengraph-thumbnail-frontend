import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OpenGraph</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
