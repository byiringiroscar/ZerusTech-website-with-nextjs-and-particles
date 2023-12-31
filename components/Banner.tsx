import React from 'react'
import bannerRight from '../public/bannerRight.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl text-cyan-400 font-semibold">
          SPREADING WINGS OF TECHNOLOGY
        </h3>
        <h1 className="text-6xl text-gray-300 leading-tight">
          We make you <br />{" "}
          <span className="font-bold text-white">&quot;Go Digital&quot;</span>
        </h1>
        <p className="text-sm text-gray-300 font-semibold">
          Creativity is our Passion & We Transform you Digitally.
        </p>
        <button className="w-44 bg-cyan-400 px-6 py-4 text-xl font-bold uppercase rounded-full">
          Call us
        </button>
      </div>
      <div>
        <Image src={bannerRight} height={400} width={400} alt="banner" />
      </div>
    </div>
  )
}

export default Banner