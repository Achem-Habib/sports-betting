import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex flex-col px-2 py-2  gap-y-6">
        <div className="flex flex-wrap justify-between border-b border-b-slate-700">
          <span className="text-fuchsia-300 font-semibold">Username:</span>
          <span className="text-slate-200 font-semibold">
            {user ? user.username : ""}
          </span>
        </div>
        <div className="flex flex-wrap justify-between border-b border-b-slate-700">
          <span className="text-fuchsia-300 font-semibold">Email:</span>
          <span className="text-slate-200 font-semibold">
            {user ? user.email : ""}
          </span>
        </div>
        <div className="flex flex-wrap justify-between border-b border-b-slate-700">
          <span className="text-fuchsia-300 font-semibold">Phone Number:</span>
          <span className="text-slate-200 font-semibold">
            {user ? user.mobile_number : ""}
          </span>
        </div>
        <div className="flex flex-wrap justify-between border-b border-b-slate-700">
          <span className="text-fuchsia-300 font-semibold">Club Name:</span>
          <span className="text-slate-200 font-semibold">
            {user ? user.club_name : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
