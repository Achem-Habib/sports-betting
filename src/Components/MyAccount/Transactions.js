import { Link } from "react-router-dom";

export default function Transactions() {
  return (
    <div className="flex flex-col gap-y-2  px-2 py-4 rounded-md">
      <h1 className="text-lg font-semibold text-blue-500">
        Account transactions
      </h1>
      <div className="flex flex-col gap-y-6">
        <Link to="/deposit" className="flex gap-x-6">
          <span className="text-white my-auto">Deposit</span>
        </Link>
        <Link to="/withdraw" className="flex gap-x-6">
          <span className="text-white my-auto">Withdraw</span>
        </Link>
        <Link to="/transaction" className="flex gap-x-6">
          <span className="text-white my-auto">Deposit History</span>
        </Link>
        <Link to="/transaction" className="flex gap-x-6">
          <span className="text-white my-auto">Withdraw History</span>
        </Link>
      </div>
    </div>
  );
}
