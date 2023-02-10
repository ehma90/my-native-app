
import { RiArrowRightUpLine } from "react-icons/ri";


function Programmes() {
 
  return (
    <div className="bg-[#19144E] py-[100px]">
      <div className="container mx-auto">
        <h2 className="font-semibold text-[40px] text-center">
          Our Programmes
        </h2>
        <div className="flex justify-center gap-x-6 mt-[42px] ">
          <div className=" w-[421px] bg-[#479B7F] pt-[63px] pb-[37px] px-5">
            <h3 className="font-semibold text-[28px]">Start-Up Build</h3>
            <p className="text-xl mt-5">
              A meeting of doers and thinkers who are hungry for development and
              growth. It features startup education, business linkups,
              fundraising, and knowledge sharing.
            </p>
            <button className="flex items-center border border-white py-3 px-[24px] mt-[36px]">
            Enroll Now <RiArrowRightUpLine className="text-2xl"/>
            </button>
          </div>
          <div className=" w-[421px] bg-[#6E57E8] pt-[63px] pb-[37px] px-5">
            <h3 className="font-semibold text-[28px]">Skill Trainings</h3>
            <p className="text-xl mt-5">
              A meeting of doers and thinkers who are hungry for development and
              growth. It features startup education, business linkups,
              fundraising, and knowledge sharing.
            </p>
            <button className="flex items-center border border-white py-3 px-[24px] mt-[36px]">
            Enroll Now <RiArrowRightUpLine className="text-2xl"/>
            </button>
          </div>
          <div className=" w-[421px] bg-[#C5164A] pt-[63px] pb-[37px] px-5">
            <h3 className="font-semibold text-[28px]">Women In Tech</h3>
            <p className="text-xl mt-5">
              A meeting of doers and thinkers who are hungry for development and
              growth. It features startup education, business linkups,
              fundraising, and knowledge sharing.
            </p>
            <button className="flex items-center border border-white py-3 px-[24px] mt-[36px]">
            Enroll Now <RiArrowRightUpLine className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmes;
