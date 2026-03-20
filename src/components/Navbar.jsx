import React from "react";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <div className="h-[10%] px-10 flex items-center justify-between bg-slate-900 border border-amber-400/40 rounded-xl text-white">
      <div className="h-[70%] flex gap-3 items-center justify-center text-md">
        <p className="p-2 cursor-pointer font-semibold text-md">Home</p>
        <p className="p-2 cursor-pointer font-semibold text-md">About</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="px-4 text-md py-1 bg-slate-700 cursor-pointer outline-none rounded-md hover:bg-slate-200 hover:text-slate-950 duration-150"
      >
        {toggle ? "Show Posts" : "+Posts"}
      </button>
    </div>
  );
};

export default Navbar;
