import React from "react";
import Explorer from "../ui/Explorer";

const Main = () => {
  return (
    <>
      <div className="flex-row justify-center mt-20 ">
        <div className="text-6xl font-bold leading-relaxed	">
          <div className="flex justify-center">РАЗВИВАЙТЕ СВОЙ СТИЛЬ</div>
          <div className="z-50 flex justify-center">
            ИГРЫ С НАШЕЙ ЗАВИЗИРОВАННОЙ{" "}
          </div>
          <div className="flex justify-center relative">
            <div className="z-0 flex w-60 h-23 rounded-full bg-gray mx-3 "></div>
            <div className="z-20 absolute flex w-40 h-40 rounded-full mx-3 bg-no-repeat bg-contain bg-main -translate-y-8 -translate-x-48"></div>
            КОЛЛЕКЦИЕЙ
          </div>
        </div>
        <div className="">
          <Explorer />
        </div>
      </div>
    </>
  );
};

export default Main;
