import Image from "next/image";
import { Karantina, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import styles from "@/styles/index.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";

const karantina = Karantina({
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F4F7F5]">
      <Head>
        <title>OpenGraph | Home</title>
        <meta name="title" content="OpenGraph Metadata Editor" />
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
      </Head>
      <Navbar />
      <div
        id="hero"
        className={` w-full h-screen flex flex-col justify-around items-center overflow-visible shadow-lg`}
      >
        <Image
          src="/Ellipse 1.svg"
          alt="ellipse"
          className="absolute top-[-10%] left-0 w-auto max-h-full"
          width={500}
          height={500}
        />
        <Image
          src="/Ellipse 2.svg"
          alt="ellipse"
          className="absolute bottom-[0px] mb-[-55px] md:mb-0 right-0 w-auto max-h-full"
          width={500}
          height={500}
        />
        <Image
          src="/Ellipse 3.svg"
          alt="ellipse"
          className="absolute top-[-5%] right-0 w-auto max-h-full"
          width={500}
          height={500}
        />
        <div
          className={`w-full h-screen absolute top-0 left-0 opacity-0 ${styles.backGround} `}
        ></div>
        <div className="w-full flex flex-col p-4 z-10 justify-center items-center text-center break-words md:max-w-[60vw]">
          <p
            className={` ${karantina.className} text-[#000] text-[4rem] md:text-[7rem] lg:text-[8rem] `}
          >
            META-DATA EDITOR
          </p>
          <p
            className={`text-[1rem] md:text-[1.5rem] text-[#000] ${spaceGrotesk.className}`}
          >
            Modify and personalize metadata for images and links, creating
            tailored content with our user-friendly customization tools.
          </p>
        </div>
        <div className="w-full h-auto z-10 flex flex-col justify-center items-center">
          <Link href="/create" className="hover:scale-110">
            <p
              className={`text-[#fff] bg-[#000] rounded-[0.375rem] px-10 py-3  text-[1rem] md:text-[1.25rem] ${spaceGrotesk.className}`}
            >
              Get Started
            </p>
          </Link>
          <p
            className={`text-[#000] ${spaceGrotesk.className} text-[1rem] text-center md:text-[1.5rem] mt-4`}
          >
            Upload your thumbnail and link to change the meta-data!
          </p>
        </div>
      </div>
      <div
        className="w-full pt-[64px] h-[100vh] bg-[#F4F7F5] flex flex-col justify-around items-center"
        id="howItWorks"
      >
        <div className="w-full flex flex-col p-4 justify-center items-center text-center break-words md:max-w-[60vw]">
          <p className={` ${karantina.className} text-[#000] text-[4rem] `}>
            HOW IT WORKS!
          </p>
          <p
            className={`text-[1rem] md:text-[1.5rem] text-[#000] ${spaceGrotesk.className}`}
          >
            Use these three simple steps to customize you URLs now!
          </p>
        </div>
        <Image
          src="/howItWorks.svg"
          alt="tutorial"
          className="w-auto hidden md:block max-h-[80%] p-8"
          width={1000}
          height={500}
        ></Image>
        <Image
          src="/howItWorksMobile.svg"
          alt="tutorial"
          className="w-auto md:hidden max-h-[80%] p-8"
          width={500}
          height={1000}
        ></Image>
      </div>
      <Footer />
    </div>
  );
}
