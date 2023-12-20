/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { Karantina, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [published, setPublished] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    const previewTestImage = document.getElementById("previewTest");
    const previewImage = document.getElementById("previewImage");

    if (previewTestImage != null) {
      previewTestImage.setAttribute("src", image);
    }

    previewTestImage?.addEventListener("load", () => {
      if (previewImage != null) {
        previewImage.setAttribute("src", image);
      }
    });

    document.getElementById("previewImage")?.addEventListener("error", () => {
      if (
        previewImage != null &&
        previewImage.getAttribute("src") !=
          "https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
      ) {
        previewImage.setAttribute(
          "src",
          "https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
        );
      }
    });
    if(image === "") {
      previewImage?.setAttribute("src", "https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png")
    }
  }, [image]);

  const Publish = () => {
    console.log("Publish clicked");
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        id="hero"
        className={`w-full h-full bg-[#D9D9D9] flex flex-col px-4 items-center `}
      >
        <div className="w-full max-h-[50vh] h-auto flex flex-col justify-center px-4 mt-[64px] items-center text-center break-words md:max-w-[60vw]">
          <p
            className={` ${karantina.className} text-[#000] text-[5rem] md:text-[8rem] `}
          >
            META-DATA EDITOR
          </p>
          <p className={`text-[1.5rem] text-[#000] ${spaceGrotesk.className}`}>
            Modify and personalize metadata for images and links, creating
            tailored content with our user-friendly customization tools.
          </p>
        </div>
        <div
          id="input field"
          className="w-full h-auto m-8 md:max-w-[83vw] flex flex-col justify-between px-8 items-center md:flex-row"
        >
          <div className="flex flex-col w-full md:w-[50vw]">
            <div className="w-full h-auto my-2 flex flex-row justify-center items-center">
              <div className="bg-[#121212] w-[10rem] md:w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-center text-[1.1rem] p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
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
            <div className="w-full h-auto my-2 flex flex-row justify-center items-center ">
              <div className="bg-[#121212] w-[10rem] md:w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-[1.1rem] p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  Image URL
                </p>
              </div>
              <input
                type="text"
                className="w-full m-0 h-[4.5rem] p-4 text-[1.5rem] text-black bg-[#FBFBFB] border-[1px] border-[#92929266] rounded-r-[0.625rem]"
                placeholder="https://dscvit.com/logo.png"
                onChange={(e) => setImage(e.currentTarget.value)}
              />
            </div>
            <div className="w-full h-auto flex my-2 flex-row justify-center items-center ">
              <div className="bg-[#121212] w-[10rem] md:w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-[1.1rem] p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
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
            <div className="w-full h-auto flex my-2 flex-row justify-center items-center ">
              <div className="bg-[#121212] w-[10rem] md:w-[15rem] h-[4.5rem] flex flex-row justify-center items-center rounded-l-[0.625rem]">
                <p
                  className={`text-[#EFEFEF] text-[1.1rem] p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
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
          <div className=" aspect-[120/63] m-auto ml-8 h-auto w-auto">
            <p
              className={` ${spaceGrotesk.className} text-center text-[1.5rem] text-black p-2`}
            >
              Preview Image
            </p>
            <img
              id="previewImage"
              src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
              alt="preview"
              className=" object-cover w-[480px] h-[252px] aspect-[120/63] border-[2px] border-black rounded-xl"
            />
            <img src="" id="previewTest" alt="previewTest" className="hidden" />
          </div>
        </div>
        <button
          className={`w-[14.25rem] h-[3.125rem] m-4 text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg ${spaceGrotesk.className} hover:scale-110`}
          onClick={Publish}
        >
          Publish
        </button>
      </div>
    </div>
  );
}
