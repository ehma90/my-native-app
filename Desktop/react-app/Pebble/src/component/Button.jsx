import React from "react";

function Button({ text, variant }) {
  return (
    <button className="flex items-center text-white py-4 px-[45px]">
      {text} <RiArrowRightUpLine className= "w-5 h-5 ml-2" />
    </button>
  );
}

export default Button;
