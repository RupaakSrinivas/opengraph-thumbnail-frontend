import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed w-full h-[64px] px-4 md:px-12 flex flex-row justify-between items-center bg-[#FFF]">
      <Image src="/logo.svg" alt="opengraph Logo" className="w-auto max-h-[80%] text-[1.8rem]" width={100} height={36} />
      <Link href="/editior" className="hover:scale-110">
        <p className="text-[#000] text-[1.5rem]">Get Started</p>
      </Link>
    </div>
  );
}
