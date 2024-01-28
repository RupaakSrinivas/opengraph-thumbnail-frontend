import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LinkCraft</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="https://i.imgur.com/9IV8Iwb.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:title" content="LinkCraft: OpenGraph Metadata Editor" />
        <meta
          property="og:description"
          content="Modify and personalize metadata for images and links, creating tailored content with our user-friendly customization tools. A tool to generate OpenGraph metadata for your website."
        />
        <meta
          property="og:url"
          content="https://opengraph-thumbnail-frontend.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LinkCraft" />
        <meta property="og:locale" content="en_IN" />
        

      </Head>
      <Component {...pageProps} />
    </>
  );
}
