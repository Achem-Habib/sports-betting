import { useState } from "react";
import BetOption from "./BetOption";

export default function Match() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="flex w-full justify-between bg-white rounded-t-md  gap-x-6 px-2 py-2 "
      >
        {/*Cricket*/}
        <span className="my-auto">
          <svg
            className="w-8 h-8 fill-red-700"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M15.05,12.81L6.56,4.32c-0.39-0.39-1.02-0.39-1.41,0L2.32,7.15c-0.39,0.39-0.39,1.02,0,1.41l8.49,8.49 c0.39,0.39,1.02,0.39,1.41,0l2.83-2.83C15.44,13.83,15.44,13.2,15.05,12.81z" />
                  <rect
                    height="6"
                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.5264 17.7562)"
                    width="2"
                    x="16.17"
                    y="16.17"
                  />
                </g>
                <circle cx="18.5" cy="5.5" r="3.5" />
              </g>
            </g>
          </svg>
        </span>
        <div className="flex flex-col leading-none">
          <p className="text-slate-700 text-xs font-semibold ">
            T20 International
          </p>
          <p className="text-slate-700 text-xs font-semibold ">
            India <span>VS</span> Pakistan
          </p>
          <p className="text-slate-700 text-xs font-semibold">
            9 Jun 2022 @7:20 pm
          </p>
        </div>

        {/*arrow_down */}
        <span className={`my-auto ${show ? "hidden" : "block"}`}>
          <svg
            className=" w-10 h-10 fill-slate-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </span>

        {/*arrow_up*/}
        <span className={`my-auto ${show ? "block" : "hidden"}`}>
          <svg
            className="w-10 h-10 fill-slate-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
          </svg>
        </span>
      </button>

      <div className="w-full bg-gradient-to-r from-violet-900 to-violet-700 text-white py-1 px-4  font-semibold">
        Score : 1000 run
      </div>
      <div className={`${show ? "block" : "hidden"}`}>
        <BetOption />
        <BetOption />
        <BetOption />
      </div>
    </div>
  );
}
