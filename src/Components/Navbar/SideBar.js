import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import SideMenuItem from "./SideMenuItem";

function SideBar({ showSidebar, setShowSidebar }) {
  return (
    <Transition.Root show={showSidebar} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowSidebar}>
        <Transition.Child
          as={Fragment}
          enter=" duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-40 flex ">
          <div className="relative  flex w-3/4 max-w-xs flex-col pb-12 overflow-y-auto shadow-xl">
            <Transition.Child
              as={Fragment}
              enter="transform transition  duration-300 sm:duration-300 "
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition  duration-300 sm:duration-300 "
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="bg-slate-700 w-full min-h-full">
                <div className="flex bg-blue-600 justify-between px-4 py-4 border-b border-slate-700">
                  <div className="flex gap-x-2">
                    {/*Account circle*/}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8 fill-white"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </span>
                    <span className="font-semibold text-md text-white mt-1">
                      Hello, Kabul
                    </span>
                  </div>

                  {/*Cancel button*/}
                  <button
                    type="button"
                    onClick={() => setShowSidebar(false)}
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md close-menu"
                  >
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

                <div className=" ">
                  <div className="flex flex-col pt-4 h-full bg-slate-700">
                    <SideMenuItem to="/">Home</SideMenuItem>
                    <SideMenuItem to="/statement">Bet History</SideMenuItem>
                    <SideMenuItem to="/signup">Create account</SideMenuItem>
                    <SideMenuItem to="/signin">Log in</SideMenuItem>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SideBar;
