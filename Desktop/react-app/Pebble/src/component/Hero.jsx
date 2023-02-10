import { RiArrowRightUpLine } from "react-icons/ri";
import heroImg from "../assets/heroImg.svg";
import heroImg2 from "../assets//heroImg2.svg";
import heroImg3 from "../assets/heroImg3.svg";
import heroImg4 from "../assets/heroImg4.svg";
import heroImg5 from "../assets/heroImg5.svg";
import heroImg6 from "../assets/heroImg6.svg";
import heroImg7 from "../assets/heroImg7.svg";
import heroImg8 from "../assets/heroImg8.svg";
import heroImg9 from "../assets/heroImg9.svg";
import "../style/style.css";

export function Hero() {
  return (
    <div className="hero-section">
      <div className="container mx-auto">
        <div className="flex justify-between gap-[47px]">
          <div className="py-[160px]">
            <h1 className="text-[56px] font-[674] text-black">
              Skill-Up <br />{" "}
              <span className="text-[#D64911]">South_South</span>
            </h1>
            <p className="text-black text-xl mt-5">
              Providing Sustainable growth to skill acquisition in akwa-ibom
              state and Africa
            </p>
            <button className="flex items-center text-white bg-[#7B61FF] py-4 px-[45px] mt-[40px]">
              Get a skill <RiArrowRightUpLine className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="grid gap-x-6 grid-cols-3 py-[97px]">
            <div className="flex flex-col gap-y-5">
              <img src={heroImg} alt="heroGrid" />
              <img src={heroImg2} alt="heroGrid" />
              <img src={heroImg3} alt="heroGrid" />
            </div>
            <div className="flex flex-col gap-y-5">
              <img src={heroImg4} alt="heroGrid" />
              <img src={heroImg5} alt="heroGrid" />
              <img src={heroImg6} alt="heroGrid" />
            </div>
            <div className="flex flex-col gap-y-5">
              <img src={heroImg7} alt="heroGrid" />
              <img src={heroImg8} alt="heroGrid" />
              <img src={heroImg9} alt="heroGrid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
