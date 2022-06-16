import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
      <div className="flex md:hidden gap-x-2 pt-14 w-full px-2 sm:px-8">
        <Link
          to="/signin"
          className="bg-green-500 text-white text-center text-md font-medium w-full py-1 border border-slate-600 rounded-md"
        >
          Log in
        </Link>

        <Link
          to="/signup"
          className="bg-blue-600 text-white text-center text-md font-medium w-full py-1 border border-slate-600 rounded-md"
        >
          Sign up
        </Link>
      </div>
      <div className="hidden md:hidden gap-x-2 pt-14 w-full px-2">
        <button className="bg-green-500 text-white text-lg font-medium w-full py-1 border border-slate-600 rounded-md">
          Balance : <span className="text-sm text-white">100 Tk</span>
        </button>
        <button className="bg-blue-600 text-white text-lg font-medium w-full py-1 border border-slate-600 rounded-md">
          Deposit
        </button>
      </div>
    </div>
  );
}
