import React from "react";
function Notes() {
  return (
    <div>
      <div className="m-5 flex justify-center border-2 border-red-400 p-5">
        <h1 className="text-lg text-blue-400">Hello world</h1>
      </div>
      <div className="mt-2 flex flex-col items-center justify-center space-y-6 bg-yellow-200">
        <div className="h-16 w-16 rounded-full bg-blue-300 text-center">
          <p>flex</p>
        </div>
        <div className="h-16 w-16 rounded-full bg-green-300"></div>
        <div className="h-16 w-16 rounded-full bg-red-300"></div>
      </div>
      <div className="mx-2 mt-2 grid grid-cols-3 gap-2">
        <div className="h-16 rounded-full bg-blue-300">
          <p className="text-center">grip</p>
        </div>
        <div className="h-16 rounded-full bg-green-300"></div>
        <div className="h-16 rounded-full bg-red-300"></div>
      </div>
      <div className="bg-white dark:bg-black text-black dark:text-white">
        <p>
          add those in css: @custom-variant dark (&:where(.dark, .dark*)); let
          user toggle dark mode if you have a button
        </p>
      </div>
      <p className="text-myColor bg-[#b2d4a89d] p-[25px]">
        {" "}
        custom for color @theme in css file https://tailwindcss.com/docs/theme
      </p>
      <button> check css @layer button </button>
      <button className="mybtn"> mybtn in css </button>
      <div className="card ">
        <h3>card className in css</h3>
      </div>

      {/* Fluid Texts  */}
      <h3 className="flex-center">flex-center</h3>
      <h3>
        for more prebuild items https://ui.shadcn.com/docs/components/calendar{" "}
      </h3>
      <p className="text-[min(10vw,70px)]">Fluid Texts, changing text size</p>

      {/* Accent */}
      <div className="my-4 flex flex-col text-green-500 ml-2">
        <label>
          <input type="checkbox" />
          browser default
        </label>
        <label>
          <input type="checkbox" className="accent-pink-500" />
          browser default
        </label>
      </div>

      {/* File */}
      <label>
        <input
          type="file"
          className="block w-full text-sm text-slate-500 file:mr-4
                    file:rounded-full file:board-0 file:bg-violet-300 file:px-3 file:p-2
                    file:text-sm file:font-semibold file:text-red-400 hover:file:bg-green-300"
        />
      </label>

      {/* highlight */}
      <div className="selection:bg-green-400 selection:text-white">
        <p>highlight this will change color</p>
      </div>

      {/*less javascript see video 50:10 at https://www.youtube.com/watch?v=6biMWgD6_JY  */}

      {/* Caret  */}
      <textarea
        className="w-full caret-pink-500 p-2 "
        placeholder="type something here and you will see pink caret"
      ></textarea>
    </div>
  );
}
export default Notes;
