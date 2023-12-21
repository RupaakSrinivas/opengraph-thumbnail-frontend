/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { Karantina, Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";

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
      window.alert("Text copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
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
        className={`bg-[#D9D9D9] flex flex-col px-4 items-center min-h-screen lg:min-h-[100vh]`}
      >
        <div className="w-full flex flex-col justify-center px-4 mt-[64px] items-center text-center break-words md:max-w-[60vw]">
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
          className="w-full h-auto m-8 flex flex-col justify-between  items-center lg:flex-row lg:max-w-[80vw]"
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
          className={`w-[14.25rem] h-[3.125rem] m-4 mb-12 text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg ${spaceGrotesk.className} md:hover:scale-110`}
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
        <div className="h-[40vh] md:h-[60vh] aspect-square  bg-[#FFF] rounded-3xl flex flex-col justify-center items-center">
          <div className="w-full flex flex-row justify-end px-8">
            <button
              className="rounded-full bg-black text-white p-2"
              onClick={() => setPublished(false)}
            >
              X
            </button>
          </div>
          <p>Copy your link below !!!</p>
          <p className="w-[80%] text-center text-[1rem] m-6">{result}</p>
          <button
            className="w-[14.25rem] h-[3.125rem] m-4 mb-12 text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg"
            onClick={Copy}
          >
            COPY
          </button>
        </div>
      </div>
    </>
  );
}
