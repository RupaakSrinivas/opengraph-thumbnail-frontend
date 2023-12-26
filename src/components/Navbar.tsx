import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
});

export default function Navbar() {
  // get the current url
  const router = useRouter();
  const { asPath } = router;
  const isHome = asPath === "/";

  return (
    <div className="fixed z-[9999] w-full h-[64px] px-4 md:px-12 flex flex-row justify-between items-center bg-[#FFF]">
      <Image
        src="/logo.svg"
        alt="opengraph Logo"
        className="w-auto max-h-[60%] md:max-h-[80%]"
        width={100}
        height={36}
      />
      {isHome ? (
        <Link href="/create" className="hover:scale-110">
          <p className={`text-[#fff] bg-[#000] rounded-[0.375rem] px-5 py-3  text-[1rem] md:text-[1.25rem] ${spaceGrotesk.className}`}>Get Started</p>
        </Link>
      ) : (
        <Link href="/" className="hover:scale-110">
          <p className={`text-[#fff] bg-[#000] rounded-[0.375rem] px-5 py-3  text-[1rem] md:text-[1.25rem] ${spaceGrotesk.className}`}>Home</p>
        </Link>
      )}
    </div>
  );
}
