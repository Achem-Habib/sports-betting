import { Tab } from "@headlessui/react";
import ChangeClub from "../MyAccount/ChangeClub";
import ChangePassword from "../MyAccount/ChangePassword";
import Profile from "../MyAccount/Profile";
import Transactions from "../MyAccount/Transactions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyAccount() {
  const tabList = ["Profile", "Change Club", "Change Password"];

  return (
    <div className="md:flex md:gap-x-6 md:px-12 md:py-20 px-2 py-14 ">
      <div className="mb-4 md:my-auto">
        <Transactions />
      </div>
      <div className="w-full max-w-lg mx-auto ">
        <Tab.Group>
          <Tab.List className="flex justify-start space-x-1  p-1 border-b border-b-slate-400 pb-4">
            {tabList.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-md outline-none py-1 text-sm font-medium leading-normal text-slate-100",
                    selected
                      ? "bg-white shadow text-slate-900 px-0.5"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className="">
              <Profile />
            </Tab.Panel>
            <Tab.Panel className="">
              <ChangeClub />
            </Tab.Panel>
            <Tab.Panel className="">
              <ChangePassword />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
