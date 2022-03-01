import React from "react";
import mainLogo from "../Components/images/main_logo.png";
import Logo2 from "../Components/images/logo_2.png";

function Navbar() {
  return (
    <div className="flex justify-between p-6">
      <div
        style={{ backgroundImage: `url(${mainLogo})` }}
        className="bg-contain bg-no-repeat bg-center  p-16 py-12"
      ></div>
      <div
        style={{ backgroundImage: `url(${Logo2})` }}
        className="bg-contain bg-no-repeat bg-center  p-32 py-12"
      ></div>
    </div>
  );
}

export default Navbar;
