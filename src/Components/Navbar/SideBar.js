import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import SideMenuItem from "./SideMenuItem";

function SideBar({ showSidebar, setShowSidebar }) {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Transition.Root show={showSidebar} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={setShowSidebar}>
        <Transition.Child
          as={Fragment}
          enter=" duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed  overflow-hidden">
          <div className="absolute  overflow-hidden">
            <div className=" fixed inset-y-0 flex w-full  ">
              <Transition.Child
                as={Fragment}
                enter="transform transition  duration-200 sm:duration-200 "
                enterFrom="-translate-x-full"
                enterTo="-translate-x-0"
                leave="transform transition  duration-200 sm:duration-200 "
                leaveFrom="-translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className=" w-3/4 max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-slate-900 shadow-xl">
                    <div className="flex relative bg-blue-800 justify-between px-4 py-4 border-b border-slate-700">
                      <div className="flex gap-x-2">
                        {/*Account circle*/}
                        <span className="my-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-8 fill-white"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          </svg>
                        </span>
                        <div className="flex flex-col my-auto">
                          <span className="font-semibold text-md text-white ">
                            Hello, {user ? user.username : ""}
                          </span>
                        </div>
                      </div>

                      {/*Cancel button*/}
                      <button
                        type="button"
                        onClick={() => setShowSidebar(false)}
                        className="absolute right-0 top-0 text-gray-400 rounded-md close-menu"
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
                      <div className="flex flex-col pt-4 h-full ">
                        <SideMenuItem to="/" setShowSidebar={setShowSidebar}>
                          Home
                        </SideMenuItem>
                        {user && !user.club_holder ? (
                          <SideMenuItem
                            to="/bet-history"
                            setShowSidebar={setShowSidebar}
                          >
                            Bet history
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user && user.club_holder ? (
                          <SideMenuItem
                            to="/club-member"
                            setShowSidebar={setShowSidebar}
                          >
                            Club Member
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user && user.club_holder ? (
                          <SideMenuItem
                            to="/club-history"
                            setShowSidebar={setShowSidebar}
                          >
                            Club history
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user && !user.club_holder ? (
                          <SideMenuItem
                            to="/deposit-history"
                            setShowSidebar={setShowSidebar}
                          >
                            Deposit history
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user ? (
                          <SideMenuItem
                            to="/withdraw-history"
                            setShowSidebar={setShowSidebar}
                          >
                            Withdraw history
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user && !user.club_holder ? (
                          <SideMenuItem
                            to="/deposit"
                            setShowSidebar={setShowSidebar}
                          >
                            Deposit
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user ? (
                          <SideMenuItem
                            to="/withdraw"
                            setShowSidebar={setShowSidebar}
                          >
                            Withdraw
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user && !user.club_holder ? (
                          <SideMenuItem
                            to="/change-club"
                            setShowSidebar={setShowSidebar}
                          >
                            Change club
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user ? (
                          <SideMenuItem
                            to="/change-password"
                            setShowSidebar={setShowSidebar}
                          >
                            Change password
                          </SideMenuItem>
                        ) : (
                          ""
                        )}

                        {user ? (
                          ""
                        ) : (
                          <SideMenuItem
                            to="/signup"
                            setShowSidebar={setShowSidebar}
                          >
                            Create account
                          </SideMenuItem>
                        )}

                        {user ? (
                          ""
                        ) : (
                          <SideMenuItem
                            to="/signin"
                            setShowSidebar={setShowSidebar}
                          >
                            Log in
                          </SideMenuItem>
                        )}

                        {user ? (
                          <div
                            onClick={() => {
                              setShowSidebar(false);
                              logoutUser();
                            }}
                            className="border-b items-start border-slate-600 py-4 px-4  hover:bg-blue-800 hover:cursor-pointer"
                          >
                            <div className="block p-2 -m-2 font-medium text-slate-100">
                              Log out
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SideBar;
