import { Link } from "react-router-dom";
import Transaction from "../TransactionHistory/Transaction";

export default function TransactionHistory() {
  return (
    <div className="pt-14 md:pt-20 mb-10 sm:mx-12 md:mx-16 lg:mx-24">
      <div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 mx-2">
            <Link
              to="/deposit"
              className="flex w-full rounded-md   py-1 bg-green-600"
            >
              <span className="text-slate-100 mx-auto font-semibold">
                Deposit
              </span>
            </Link>
            <Link
              to="/withdraw"
              className="w-full rounded-md  flex gap-x-2 py-1 bg-blue-600"
            >
              <span className="text-slate-100 mx-auto font-semibold">
                Withdraw
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-6 mx-2">
          <h2 className="text-lg font-bold text-slate-100 border-b border-b-slate-400 pb-2 mb-2">
            Transaction history
          </h2>
          <div>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}
