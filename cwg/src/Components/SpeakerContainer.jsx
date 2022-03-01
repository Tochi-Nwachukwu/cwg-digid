import React from "react";
import LinkedIn from "../Components/images/LinkedIn.png";

function SpeakerContainer({guest}) {
  return (
    <div className="text-white ">
      <h1 className="text-red-300">{guest?"Guests":""}</h1>
      <p className="my-4">{guest?"Keynote Speaker":"Panelist"}</p>

      <div className="w-[168px] h-[168px] border border-white"></div>

      <div className="flex mt-4 ">
        <div
          style={{ backgroundImage: `url(${LinkedIn})` }}
          className="bg-contain bg-no-repeat p-4 mr-4 "
        ></div>
        <p className="text-sm w-1/2">XYZ Lorem ipsum Lorem ipsum</p>
      </div>
    </div>
  );
}

export default SpeakerContainer;
