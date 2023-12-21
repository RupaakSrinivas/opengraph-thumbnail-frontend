/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { Karantina, Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import styles from "@/styles/index.module.css";
import Image from "next/image";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

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
    if (image === "") {
      previewImage?.setAttribute(
        "src",
        "https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
      );
    }
  }, [image]);

  const baseUrl = "http://localhost:3000/v1";

  const Publish = () => {
    const formattedUrl = `${baseUrl}/opengraph?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(
      description
    )}&image=${encodeURIComponent(image)}`;
    setResult(formattedUrl);
    setPublished(true);
  };

  const Copy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      // window.alert("Text copied to clipboard");
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    if (published) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [published]);

  return (
    <>
      <Navbar />
      <div
        id="createPage"
        className={`bg-[#F4F7F5] flex flex-col px-4 items-center min-h-screen lg:min-h-[100vh]`}
      >
        <img
          src="/Ellipse 1.svg"
          alt="ellipse"
          className="absolute max-h-full top-[-10%] left-0 w-auto h-auto"
        />
        <img
          src="/Ellipse 3.svg"
          alt="ellipse"
          className="absolute max-h-full right-0 w-auto h-auto"
        />
        <div
          className={`w-full h-[100vh] absolute top-0 left-0 opacity-30 ${styles.backGround} `}
        ></div>
        <div className="w-full z-10 flex flex-col justify-center px-4 mt-[64px] items-center text-center break-words md:max-w-[60vw]">
          <p
            className={` ${karantina.className} text-[#000] leading-[100%] p-4 text-[5rem] md:text-[7rem] lg:text-[8rem] `}
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
          className="w-full z-10 h-auto m-8 flex flex-col justify-between  items-center lg:flex-row lg:max-w-[80vw]"
        >
          <div className="flex flex-col w-full m-0 p-0 md:w-[70vw]">
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
          <div className=" aspect-[120/63] flex flex-col justify-center items-center m-auto p-4 h-auto w-auto">
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
          className={`w-[14.25rem] z-10 h-[3.125rem] m-4 mb-12 text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg ${spaceGrotesk.className} md:hover:scale-110`}
          onClick={Publish}
        >
          Publish
        </button>
      </div>
      <div
        className={`${
          published ? "" : "hidden"
        } fixed h-[100vh] z-30 w-full top-0 left-0 bg-opacity-70 bg-black flex justify-center items-center`}
      >
        <div className="min-h-[40vh] w-auto md:h-[60vh] md:aspect-square  bg-[#FFF] rounded-3xl flex flex-col justify-center items-center p-4">
          <div className="w-full flex flex-row justify-between items-center px-4">
            <p
              className={`text-[#000] ${spaceGrotesk.className} text-[1.5rem] font-[700] leading-[140%] md:text-[2rem] `}
            >
              Share this post
            </p>
            <button
              className="rounded-full bg-black text-white px-2 mt-1"
              onClick={() => setPublished(false)}
            >
              X
            </button>
          </div>
          <div
            className=" w-full m-4 h-32 border rounded-xl flex flex-row justify-start items-center"
            id="previewDetails"
          >
            <img
              src={image}
              alt="No Image"
              className="w-auto m-2 max-h-[90%] text-[1rem] aspect-square"
            />
            <div className="w-[70%] p-2 flex flex-col justify-center items-start">
              <p
                className={`text-[#000] ${spaceGrotesk.className} w-full text-[1.25rem] font-[700] leading-[140%] md:text-[1.5rem] text-nowrap text-ellipsis overflow-hidden`}
              >
                {title}
              </p>
              <p
                className={`text-[#929292] ${spaceGrotesk.className} w-[80%] text-[1rem] my-2 font-[700] leading-[140%] md:text-[1.25rem] text-ellipsis overflow-hidden`}
              >
                {url}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p
              className={`text-[#000] ${spaceGrotesk.className} px-4 self-start font-[500] text-[1.5rem]`}
            >
              Share this link via
            </p>
            <div className="w-full flex flex-row justify-evenly items-center">
              <FacebookShareButton url={result}>
                <FacebookIcon size={"3rem"} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={result}>
                <TwitterIcon size={"3rem"} round={true} />
              </TwitterShareButton>
              <LinkedinShareButton url={result}>
                <LinkedinIcon size={"3rem"} round={true} />
              </LinkedinShareButton>
              <TelegramShareButton url={result}>
                <TelegramIcon size={"3rem"} round={true} />
              </TelegramShareButton>
              <WhatsappShareButton url={result}>
                <WhatsappIcon size={"3rem"} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p
              className={`text-[#000] ${spaceGrotesk.className} p-4 self-start font-[500] text-[1.5rem]`}
            >
              Or copy link address
            </p>
            <div className="w-full flex flex-row justify-evenly items-center">
              <button
                className={` w-[8rem] p-2 text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg ${spaceGrotesk.className} md:active:scale-110`}
                onClick={Copy}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
