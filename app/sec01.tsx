import Image from "next/image";
import i from "./assets/i.png";
import l from "./assets/l.png";

const Sec01 = () => {
  return (
    <div className="sec01 md:w-[30%] w-screen md:relative absolute md:h-screen h-[50vh] z-[100] md:overflow-hidden overflow-hidden">
      <div className="md:relative absolute social md:left-[2rem] md:rigCht-auto right-[1rem] md:top-[2rem] top-[1rem] flex flex-col md:items-start items-end">
        <div className="flex flex-row">
          <a href="https://www.instagram.com">
            <div className="rounded-full w-[4rem] h-[4rem] bg-transparent border-white border-[0.15rem] flex justify-center items-center">
              <Image
                src={i}
                alt=""
                width={38}
                height={38}
                draggable={false}
              ></Image>
            </div>
          </a>
          <a href="https://www.linkedin.com">
            <div className="ml-[1.2rem] rounded-full w-[4rem] h-[4rem] bg-transparent border-white border-[0.15rem] flex justify-center items-center">
              <Image
                src={l}
                alt=""
                width={38}
                height={38}
                draggable={false}
              ></Image>
            </div>
          </a>
        </div>
        <a href="">
          <p className="font-[Courier] text-[1.23rem] underline underline-offset-[0.4rem] mt-[0.8rem] decoration-1">
            LET&apos;S TALK
          </p>
        </a>
      </div>

      <div className="m-0 p-0 w-screen pl-[1rem] pt-[0.75rem] pb-[0.75rem] md:pr-0 md:pt-0 md:pb-0 md:pl-0 md:left-[3.2rem] absolute md:top-[50%] top-[27vh] translate-y-[-50%] md:bg-transparent bg-[#BBA070] h-auto">
        <p className="font-[Courier] max-w-[21ch] md:text-[1.09rem] text-[1rem]">
          Creating eye-snapping moments difficult to forget
        </p>
      </div>
    </div>
  );
};
export default Sec01;
