import React from "react";
import SpeakerContainer from "./SpeakerContainer";

function SecondBanner() {
  return (
    <div className="bg-[#0C0932] px-12 grid grid-cols-2 items-center ">
      <div className="text-white text-2xl p-12">
        <p>
          In the present world, a good experience trumps everything and
          organizations need to get it right! Good Customer Experience has
          become the tool that every marketer needs on their quest for growth.
          CX not only influences a brand’s image but also impacts the bottom
          line as strongly as traditional marketing once did.
        </p>
        <p>
          76% of executives say improving CX is a high or critical priority and
          many companies have established senior positions to oversee it, states
          a Forrester report.{" "}
        </p>
        <p>
          Why is CX such an important driving factor? Please join us at 'Digital
          Customer Experience - A Profitable Journey' to explore more.
        </p>
      </div>
      <div>
        <div className="border-b border-white p-10 flex justify-center mb-6">
          <SpeakerContainer guest={true} />
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div>
            <SpeakerContainer guest={false} />
          </div>
          <div>
            <SpeakerContainer guest={false} />
          </div>
          <div>
            <SpeakerContainer guest={false}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
