/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { Karantina, Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import Head from "next/head";

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
    const delayDebounceFn = setTimeout(() => {
      if (url === "") {
        return;
      }
      const Url = document.getElementById("urlInput") as HTMLInputElement;
      const Title = document.getElementById("titleInput") as HTMLInputElement;
      const Description = document.getElementById(
        "descriptionInput"
      ) as HTMLInputElement;
      const Image = document.getElementById("imageInput") as HTMLInputElement;

      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/metadata?url=${url}`)
        .then((res) => res.json())
        .then((data) => {
          Url.value = data.url;
          Title.value = data.title;
          Description.value = data.description;
          Image.value = data.image;
          setUrl(data.url);
          setTitle(data.title);
          setDescription(data.description);
          setImage(data.image);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

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

    document
      .getElementById("previewTest")
      ?.addEventListener("error", () => {
        previewImage?.setAttribute(
          "src",
          "https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
        );
      });
    if (image === "") {
      previewImage?.setAttribute(
        "src",
        "https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
      );
    }
  }, [image]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const Publish = () => {
    if (url === "") {
      window.alert("Please enter a URL");
      return;
    }
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

  const Clear = (id: string) => {
    const element = document.getElementById(id) as HTMLInputElement;
    element.value = "";
    if (id === "titleInput") {
      setTitle("");
    }
    if (id === "urlInput") {
      setUrl("");
    }
    if (id === "imageInput") {
      setImage("");
    }
    if (id === "descriptionInput") {
      setDescription("");
    }
  };

  return (
    <>
      <Head>
        <title>OpenGraph | Create</title>
        <meta name="title" content="OpenGraph Metadate Editor" />
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
      </Head>
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
          src="/Ellipse 2.svg"
          alt="ellipse"
          className="absolute max-h-full bottom-0 right-0 w-auto h-auto"
        />
        <img
          src="/Ellipse 3.svg"
          alt="ellipse"
          className="absolute max-h-full right-0 w-auto h-auto"
        />
        <div
          className={`w-full fixed h-[100%] top-0 left-0 opacity-30 bg-[url('/noise.svg')] bg-center bg-repeat bg-cover`}
        ></div>
        <div className="w-full z-10 flex flex-col justify-center px-4 mt-[64px] items-center text-center break-words md:max-w-[60vw]">
          <p
            className={` ${karantina.className} text-[#000] leading-[100%] p-4 text-[4rem] md:text-[6rem] `}
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
        <div
          id="input field"
          className="w-full z-10 h-auto m-8 flex flex-col justify-center  items-center lg:flex-row lg:max-w-[80vw]"
        >
          <div className="flex flex-col w-full m-0 p-0 md:w-[70vw]">
            <div className="w-full h-auto my-2 flex flex-row bg-[#FBFBFB] justify-center items-center border-[1px] border-[#92929266] rounded-[0.625rem] overflow-hidden">
              <div className="bg-[#121212] min-w-[6rem] md:w-[15rem] h-[3.5rem] md:h-[4.5rem] flex flex-row justify-evenly items-center">
                <p
                  className={`text-[#EFEFEF] text-center text-[1rem] leading-[120%] p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  URL uploaded
                </p>
              </div>
              <input
                id="urlInput"
                type="text"
                className="w-full m-0 h-full p-4 text-[1.2rem] md:text-[1.5rem] text-black bg-[#FBFBFB] focus:outline-none"
                placeholder="https://dscvit.com"
                onChange={(e) => setUrl(e.currentTarget.value)}
                required
              />
              <button
                className={`w-auto max-h-[70%] p-0 m-2 ${
                  url === "" ? "opacity-0" : "opcaity-100"
                }`}
                onClick={() => Clear("urlInput")}
              >
                <img
                  src="/close.svg"
                  alt="clear"
                  className="w-auto max-h-[100%] m-auto mr-2 p-1"
                />
              </button>
            </div>
            <div className="w-full h-[3.5rem] md:h-[4.5rem] bg-[#FBFBFB] my-2 flex flex-row justify-center items-center border-[1px] border-[#92929266] rounded-[0.625rem] overflow-hidden">
              <div className="bg-[#121212] min-w-[6rem] md:w-[15rem] h-full flex flex-row justify-center items-center">
                <p
                  className={`text-[#EFEFEF] text-[1rem] p-2 md:text-[1.5rem] text-center font-[500] ${spaceGrotesk.className}`}
                >
                  Image URL
                </p>
              </div>
              <input
                id="imageInput"
                type="text"
                className="w-full m-0 h-full p-4 text-[1.2rem] md:text-[1.5rem] text-black bg-[#FBFBFB] focus:outline-none"
                placeholder="https://dscvit.com/logo.png"
                onChange={(e) => setImage(e.currentTarget.value)}
              />
              <button
                className={`w-auto max-h-[70%] p-0 m-2 ${
                  image === "" ? "opacity-0" : "opcaity-100"
                }`}
                onClick={() => Clear("imageInput")}
              >
                <img
                  src="/close.svg"
                  alt="clear"
                  className="w-auto max-h-[100%] m-auto mr-2 p-1"
                />
              </button>
            </div>
            <div className="w-full h-[3.5rem] md:h-[4.5rem] flex bg-[#FBFBFB] my-2 flex-row justify-center items-center border-[1px] border-[#92929266] rounded-[0.625rem] overflow-hidden ">
              <div className="bg-[#121212] min-w-[6rem] md:w-[15rem] h-full flex flex-row justify-center items-center">
                <p
                  className={`text-[#EFEFEF] text-[1rem] text-center p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  Title
                </p>
              </div>
              <input
                id="titleInput"
                type="text"
                className="w-full m-0 h-full p-4 text-[1.2rem] md:text-[1.5rem] text-black bg-[#FBFBFB] focus:outline-none"
                placeholder="GDSC"
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
              <button
                className={`w-auto max-h-[70%] p-0 m-2 ${
                  title === "" ? "opacity-0" : "opcaity-100"
                }`}
                onClick={() => Clear("titleInput")}
              >
                <img
                  src="/close.svg"
                  alt="clear"
                  className="w-auto max-h-[100%] m-auto mr-2 p-1"
                />
              </button>
            </div>
            <div className="w-full h-[3.5rem] md:h-[4.5rem] flex my-2 flex-row justify-center items-center bg-[#FBFBFB] border-[1px] border-[#92929266] rounded-[0.625rem] overflow-hidden">
              <div className="bg-[#121212] min-w-[6rem] md:w-[15rem] h-full flex flex-row justify-center items-center">
                <p
                  className={`text-[#EFEFEF] text-[1rem] text-center p-2 md:text-[1.5rem] font-[500] ${spaceGrotesk.className}`}
                >
                  Description
                </p>
              </div>
              <input
                id="descriptionInput"
                type="text"
                className="w-full m-0 h-full p-4 pr-0 text-[1.2rem] md:text-[1.5rem] text-black bg-[#FBFBFB] focus:outline-none"
                placeholder="Developer Student Clubs"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
              <button
                className={`w-auto max-h-[70%] p-0 m-2 ${
                  description === "" ? "opacity-0" : "opcaity-100"
                }`}
                onClick={() => Clear("descriptionInput")}
              >
                <img
                  src="/close.svg"
                  alt="clear"
                  className="w-auto max-h-[100%] m-auto mr-2 p-1"
                />
              </button>
            </div>
          </div>
          <div className=" aspect-[120/63] flex flex-col justify-center items-center m-auto py-4 pl-4 h-auto w-auto">
            <p
              className={` ${spaceGrotesk.className} text-center text-[1.5rem] text-black p-2`}
            >
              Preview Image
            </p>
            <img
              id="previewImage"
              src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
              alt="preview"
              className="bg-[#F4F7F5] object-contain max-h-[30vh] md:max-h-auto w-[480px] h-[252px] aspect-[120/63] border-[2px] border-black rounded-xl"
            />
            <img src="" id="previewTest" alt="previewTest" className="hidden" />
          </div>
        </div>
        <button
          className={` z-10 p-4 px-6 md:px-16 m-4 mb-12 text-[1rem] md:text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg ${spaceGrotesk.className} active:scale-95`}
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
        <div className="min-h-[40vh] max-w-[90vw] w-auto md:h-[60vh] md:w-[60vh]  bg-[#FFF] rounded-3xl flex flex-col justify-center items-center p-6">
          <div className="w-full flex flex-row justify-between items-center ">
            <p
              className={`text-[#000] ${spaceGrotesk.className} text-[1.5rem] font-[700] leading-[140%] md:text-[2rem] `}
            >
              Share this post
            </p>
            <button
              className="rounded-full max-h-[80%] p-2 active:scale-95"
              onClick={() => setPublished(false)}
            >
              <img
                src="/close.svg"
                alt="close"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </button>
          </div>
          <div
            className=" w-full m-4 mx-8 h-28 border rounded-lg border-[#929292] flex flex-row justify-start items-center"
            id="previewDetails"
          >
            <img
              src={image}
              alt="No Image"
              className="w-auto m-2 max-h-[90%] text-[1rem]"
            />
            <div className="w-[70%] p-2 flex flex-col justify-center items-start">
              {/* <p
                className={`text-[#000] ${spaceGrotesk.className} w-full text-[1.25rem] font-[700] leading-[140%] md:text-[1.5rem] text-nowrap text-ellipsis overflow-hidden`}
              >
                {title}
              </p> */}
              <input
                type="text"
                className={`text-[#000] ${spaceGrotesk.className} w-full text-[1.25rem] font-[700] leading-[140%] md:text-[1.5rem] text-ellipsis overflow-hidden focus:outline-none`}
                value={title}
                readOnly={true}
              />
              {/* <p
                className={`text-[#929292] ${spaceGrotesk.className} w-[80%] text-[1rem] my-2 font-[700] leading-[140%] md:text-[1.25rem] text-ellipsis overflow-hidden`}
              >
                {url}
              </p> */}
              <input
                type="text"
                className={`text-[#929292] ${spaceGrotesk.className} w-[80%] text-[1rem] my-2 font-[700] leading-[140%] md:text-[1.25rem] text-ellipsis overflow-hidden focus:outline-none`}
                value={url}
                readOnly={true}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p
              className={`text-[#000] ${spaceGrotesk.className} self-start font-[500] text-[1.5rem]`}
            >
              Share this link via
            </p>
            <div className="w-[110%] pt-4 flex flex-row justify-evenly items-center">
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
              className={`text-[#000] ${spaceGrotesk.className} py-4 self-start font-[500] text-[1.5rem]`}
            >
              Or copy link address
            </p>
            <div className="w-full flex flex-row justify-between items-center border rounded-lg border-[#929292] ">
              <div className="flex flex-row p-4 h-full w-auto text-[1.25rem] text-[#000] font-[500] leading-[130%] overflow-hidden">
                <img
                  src="/link.svg"
                  alt="link"
                  className="w-auto h-[1.5rem] m-auto mr-2 hidden md:block"
                />
                {/* <p
                  className={`text-[#000] ${spaceGrotesk.className} w-max min-h-[2rem] text-[1rem] font-[500] leading-[130%] md:text-[1.5rem] text-nowrap text-ellipsis overflow-hidden`}
                >
                  {result}
                </p> */}
                <input
                  type="text"
                  className={`w-full h-full text-[1rem] md:text-[1.5rem] text-black  text-ellipsis focus:outline-none ${spaceGrotesk.className}`}
                  value={result}
                  readOnly={true}
                ></input>
              </div>
              <button
                className={` w-auto p-2 md:py-0  mx-2 text-[1rem] md:text-[1.5rem] flex flex-row justify-center items-center text-white bg-[#000] rounded-lg ${spaceGrotesk.className} active:scale-95`}
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
