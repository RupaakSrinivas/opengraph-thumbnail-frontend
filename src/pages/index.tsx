/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Karantina, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import styles from "@/styles/index.module.css";

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
      <Navbar />
      <div
        id="hero"
        className={` w-full h-[100vh] flex flex-col justify-center items-center shadow-lg}`}
      >
        <img
          src="/Ellipse 1.svg"
          alt="ellipse"
          className="absolute top-[-10%] left-0 w-auto h-auto"
        />
        <img
          src="/Ellipse 3.svg"
          alt="ellipse"
          className="absolute  right-0 w-auto h-auto"
        />
        <div
          className={`w-full h-[100vh] absolute top-0 left-0 opacity-30 ${styles.backGround} `}
        ></div>
        <div className="w-full flex flex-col p-4 z-10 justify-center items-center text-center break-words md:max-w-[60vw]">
          <p
            className={` ${karantina.className} text-[#000] text-[4rem] md:text-[7rem] lg:text-[8rem] `}
          >
            META-DATA EDITOR
          </p>
          <p className={`text-[1rem] md:text-[1.5rem] text-[#000] ${spaceGrotesk.className}`}>
            Modify and personalize metadata for images and links, creating
            tailored content with our user-friendly customization tools.
          </p>
        </div>
        <div></div>
      </div>
      <div
        className="w-full pt-[64px] h-[100vh] bg-[#F4F7F5] flex flex-col justify-around items-center"
        id="howItWorks"
      >
        <div className="w-full flex flex-col p-4 justify-center items-center text-center break-words md:max-w-[60vw]">
          <p className={` ${karantina.className} text-[#000] text-[4rem] `}>
            HOW IT WORKS!
          </p>
          <p className={`text-[1rem] md:text-[1.5rem] text-[#000] ${spaceGrotesk.className}`}>
            Use these three simple steps to customize you URLs now!
          </p>
        </div>
        <Image
          src="/howItWorks.svg"
          alt="tutorial"
          className="w-auto max-h-[80%] p-8"
          width={1000}
          height={500}
        ></Image>
      </div>
    </div>
  );
}
