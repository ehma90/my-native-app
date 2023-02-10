import { RiArrowRightUpLine } from "react-icons/ri";
import eventImg from '../assets/eventImg.svg'

function Group() {
  return (
    <div className="py-[100px]">
      <div className="container mx-auto">
        <div className="flex gap-x-6">
          <div className="w-[644px]">
            <div className="h-4 bg-[#7B61FF]"></div>
            <div className="bg-[#19144E] pt-[67px] px-[32px]">
              <h3>Events</h3>
              <p>
                Bringing developers together in-person and online. Stay in the
                know about upcoming events, catch up on content you missed, and
                connect with Google experts.
              </p>
              <button className="flex items-center border border-white py-3 px-[24px] my-[40px]">
              See all events <RiArrowRightUpLine className="text-2xl" />
              </button>

              <div>
                  <img src={eventImg} alt="event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
