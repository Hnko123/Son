import React from "react";
import { Vortex } from "../../components/ui/vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10"
      >
        <h2 className="text-2xl font-bold text-center text-white md:text-6xl">
          The hell is this?
        </h2>
        <p className="max-w-xl mt-6 text-sm text-center text-white md:text-2xl">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col items-center gap-4 mt-6 sm:flex-row">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2 text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}
