import Navbar from "@/components/Navbar";
import { Karantina, Space_Grotesk } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/index.module.css";

const karantina = Karantina({
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export default function Create() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        id="hero"
        className={`w-full h-[100vh] bg-[#D9D9D9] flex flex-col justify-center items-center shadow-lg ${styles.backGround}`}
      >
        <div className="w-full flex flex-col justify-center items-center text-center break-words md:max-w-[60vw]">
          <p className={` ${karantina.className} text-[#000] text-[8rem] `}>
            META-DATA EDITOR
          </p>
          <p className={`text-[1.5rem] text-[#000] ${spaceGrotesk.className}`}>
            Modify and personalize metadata for images and links, creating
            tailored content with our user-friendly customization tools.
          </p>
        </div>
        <div
          id="input field"
          className="w-full m-8 md:max-w-[70vw] flex flex-col justify-center items-center md:flex-row"
        >
          <div className="flex flex-col w-full gap-6">
            <div className="w-full flex flex-row justify-center items-center gap-0">
              <div className="bg-[#121212] w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  URL uploaded
                </p>
              </div>
              <input
                type="text"
                className="w-full m-0 h-[4.5rem] p-4 text-[1.5rem] text-black bg-[#FBFBFB] border-[1px] border-[#92929266] rounded-r-[0.625rem]"
                placeholder="https://dscvit.com"
                onChange={(e) => setUrl(e.currentTarget.value)}
                required
              />
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-0">
              <div className="bg-[#121212] w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  Title
                </p>
              </div>
              <input
                type="text"
                className="w-full m-0 h-[4.5rem] p-4 text-[1.5rem] text-black bg-[#FBFBFB] border-[1px] border-[#92929266] rounded-r-[0.625rem]"
                placeholder="GDSC"
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-0">
              <div className="bg-[#121212] w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  Description
                </p>
              </div>
              <input
                type="text"
                className="w-full m-0 h-[4.5rem] p-4 text-[1.5rem] text-black bg-[#FBFBFB] border-[1px] border-[#92929266] rounded-r-[0.625rem]"
                placeholder="Developer Student Clubs"
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
        <button className={`w-[14.25rem] h-[3.125rem] text-[1.5rem] flex flex-row justify-center items-center bg-[#000] rounded-lg ${spaceGrotesk.className} hover:scale-110`}>
          Publish
        </button>
      </div>
    </div>
  );
}
