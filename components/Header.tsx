import React from "react";

const Header = () => {
  return (
    <div className="w-full text-white py-10 flex justify-between items-center border-b-[1px] border-b-blue-600">
      <div>
        <h1 className="text-2xl font-bold uppercase">ZerusTech</h1>
      </div>
      <div>
        <ul className="flex gap-6 text-sm uppercase font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <button className="bg-green-600 py-1 px-6 rounded-xl text-base uppercase font-semibold">
          Email Us
        </button>
      </div>
    </div>
  );
};

export default Header;
