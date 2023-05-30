import React from "react";

const Explorer = () => {
  return (
    <div className="mt-20 mx-5 grid grid-cols-3 gap-4">
      <div className="w-full h-96 col-start-1 col-end-4 bg-cover bg-no-repeat bg-explorer rounded-xl text-white flex items-end ">
        <h1 className="pl-10 pb-10">
          Welcome to SilaSport we offer a wide selection
        </h1>
      </div>
      <div className="col-start-1 col-end-3 w-2/3 h-40 rounded-xl">1</div>
      <div className="col-start-3 col-end-4 w-1/3 h-40 bg-cover bg-no-repeat bg-explorer-outfit rounded-xl">
        2
      </div>
    </div>
  );
};

export default Explorer;
