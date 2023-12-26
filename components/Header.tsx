import React from "react";

const Header = () => {
  return (
    <div className="fixed h-36 w-full px-6 py-8 opacity-90 font-serif bg-black z-40 flex flex-col">
      <h1 className="text-4xl pb-2">GRACE H SNYDER</h1>
      <div className="pt-2 flex justify-start">
        <p className="border-r pr-2">(913)433-4340</p>
        <p className="px-2">ants.in.sweaters@gmail.com</p>
      </div>
    </div>
  );
};

export default Header;
