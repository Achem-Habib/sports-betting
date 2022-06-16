import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Placebet() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 top-2" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="z-40 transition-all">
            <div className="pt-16">
              <div className="mx-2 bg-white rounded-md">
                <div className="flex justify-between bg-purple-800 rounded-t-md py-2">
                  <span className="my-auto pl-2">
                    <svg
                      className="w-8 h-8 fill-slate-100"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
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
                  <div className="leading-none">
                    <p className="text-md text-slate-100">Pakistan vs India</p>
                    <p className="text-sm font-extralight text-slate-100">
                      ICC Cricket World Cup
                    </p>
                    <p className="text-sm font-extralight text-slate-100">
                      15.08.2022(9:30 pm)
                    </p>
                  </div>
                  <button onClick={closeModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 fill-white hover:fill-slate-200"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-y-2 mx-2 pb-3">
                  <div className="bg-slate-200 px-2 py-1 rounded-md mt-1">
                    <p className="text-sm font-semibold text-slate-900">
                      To win the match?
                    </p>
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold text-slate-900">
                        Pakistan
                      </span>
                      <span className="text-sm font-semibold text-slate-900">
                        2.00
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="amount"
                      className="text-slate-800 text-sm font-semibold"
                    >
                      Enter Amount
                    </label>
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      required
                      className="appearance-none  relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="100"
                    />
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm font-semibold text-slate-900">
                      Quick bets
                    </p>
                    <div className="grid grid-cols-4 gap-x-2 gap-y-2">
                      <button className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md">
                        50
                      </button>
                      <button className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md">
                        100
                      </button>
                      <button className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md">
                        200
                      </button>
                      <button className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md">
                        300
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <p className="text-slate-900 font-semibold text-sm">
                        Total amount
                      </p>
                      <p className="font-bold text-slate-900 text-sm">100</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-slate-900 font-semibold text-sm">
                        Possible Return
                      </p>
                      <p className="font-bold text-slate-900 text-sm">200</p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                    >
                      Place bet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
