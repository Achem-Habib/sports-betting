import { useState } from "react";

export default function ClubSignin() {
  const [clubName, setClubName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <div className="mx-auto  md:mt-16 ">
        <div className=" min-h-full   py-12 px-4 sm:px-6 lg:px-8">
          <div className=" space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
                Sign in to your club
              </h2>
            </div>
            <form className="mt-8 space-y-6 w-full">
              <div className="flex flex-col  gap-y-4 shadow-sm -space-y-px">
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="club-name"
                    className="text-pink-100 font-semibold"
                  >
                    Club Name
                  </label>
                  <input
                    id="club-name"
                    type="text"
                    placeholder="Club Name"
                    className="appearance-none  relative block w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="password"
                    className="text-pink-100 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="appearance-none  relative block w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="text-sm flex justify-end">
                <a
                  href="#"
                  className="font-medium text-lime-300 hover:text-indigo-500"
                >
                  {" "}
                  Forgot your password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
