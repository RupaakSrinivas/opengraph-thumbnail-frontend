
export default function Footer() {
    return (
        <div className="h-[72px] w-full bg-[#F8F8F8] border-t border-[#000] flex flex-row justify-center items-center">
          <div className="flex flex-col m-4 w-auto justify-center items-center">
            <h1 className="text-[1.25rem] text-center text-clip text-[#070707] font-[600] md:text-[2rem]">
              Made with &#10084;&#65039; by GDSC VIT.
            </h1>
            <p className="text-[0.75rem] text-center pb-2 text-[#555] md:text-[1rem]">
              2023 &#169; All Rights Reserved, Google Developer Student Clubs
              VIT.
            </p>
          </div>
        </div>
    );
    }