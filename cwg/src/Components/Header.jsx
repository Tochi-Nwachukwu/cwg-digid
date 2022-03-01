import React from "react";
import LeftImage from "../Components/images/left-1.png";

function Header() {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${LeftImage})` }}
        className="bg-cover p-80 py-[12em]"
      ></div>
      <div>
        <div className="text-left text-4xl pl-12 ">
          <h1 className="mb-8">Come join us at:</h1>
          <p className="text-red-600 font-bold mb-6 bg-yellow-300 w-fit  p-4">Digital Customer Experience A profitable Journey</p>

          <div className="text-white bg-red-500 w-fit  p-4 mt-4">Virtual Event</div>

          <div className="flex  p-4 bg-[#0C0932] text-white ">
            <div className="mr-4">17th March, 2022 </div>
            <div>10:00 A.M (GMT)</div>
          </div>

          <button className="p-4 bg-blue-300 mt-12 text-white px-8 my-12">REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
