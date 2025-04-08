import Sec01 from "./sec01";
import t from "/assets/t.png";
import Image from "next/image";
import "./style.css";
import wave from "/assets/wave.gif";
import arrow from "/assets/arrow.png";

const hero = () => {
  return (
    <div className="w-full h-screen flex md:flex-row flex-col text-white">
      <Sec01 />
      <div className="bg-[#BBA070] lg:h-[4.7rem] md:h-[4.5rem] h-[3.5rem] lg:w-[14rem] md:w-[11rem] w-[30%] absolute bottom-0 z-[100] overflow-hidden">
        <a href="">
          <div className="h-full w-full relative flex flex-row justify-center items-center md:gap-[0.5rem] gap-[0.2rem] overflow-hidden">
            <h1 className="font-[Italiana] lg:text-[2.65rem] md:text-[2.6rem] text-[1.7rem] text-black">
              Work
            </h1>
            <Image
              src={arrow}
              alt=""
              className="md:h-[2.5rem] h-[1.8rem] w-[1.8rem] md:w-[2.5rem]"
              draggable={false}
            ></Image>
            <div className="absolute top-[-1.5rem] right-[-1.5rem] transform rotate md:rotate-45 rotate-[40deg] origin-center md:h-[3rem] md:w-[3rem] h-[2.7rem] w-[2.7rem] bg-[#101316]"></div>
          </div>
        </a>
      </div>

      <div className="absolute h-[11rem] w-[11rem] bg-[rgba(200,181,146,0.5)] top-[9rem] left-[30%] translate-x-[-38%] rounded-full transform blur-[0.3rem] z-[0]"></div>

      <div className="sec02 z-[2] md:relative absolute right-0 bottom-0 md:w-[36%] w-[70%] md:h-screen h-[55vh] bg-[#BBA070]">
        <div className="absolute md:top-[4.6rem] md:left-[-5.5rem] left-[-6rem]">
          <h1 className="lg:text-[3.6rem] md:text-[3.5rem] text-[2.8rem] font-[Italiana] z-[10] hidden md:block">
            Tamal Krishna Chhabra
          </h1>
        </div>
        <div className="absolute md:top-[13.9rem] right-[100vw] transform md:translate-0 translate-x-[100%] md:right-[-16rem]">
          <h1 className="lg:text-[4.4rem] md:text-[4.2rem] text-[3.5rem] font-[Italiana] md:leading-[4.1rem] leading-[3rem] hidden md:block">
            Web Designer <span className="font-[Jim]">&</span>
            <br />
            Developer
          </h1>
          <p className="md:font-[Courier] font-[Italiana] md:text-[1.09rem] text-[1.5rem] w-[22ch] mt-[0.5rem] md:pl-0 pl-[1rem]">
            I’m Tamal, a freelance designer and developer based in India.
          </p>
        </div>
        <div className="absolute bottom-[-0.2rem] md:left-[-0.64rem] right-[1rem] h-[82%] md:h-full flex items-end">
          <Image
            src={t}
            alt={"MyImage"}
            style={{ width: "auto" }}
            className="md:h-[80vh] h-full"
            draggable={false}
          ></Image>
        </div>
      </div>

      <div className="sec03 md:w-[34%] md:relative absolute ">
        <div className="z-[-10]">
          <div className="relative md:w-full w-screen md:h-screen h-[50vh]">
            <Image
              src={wave}
              alt={"wavePattern"}
              fill
              draggable={false}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default hero;
