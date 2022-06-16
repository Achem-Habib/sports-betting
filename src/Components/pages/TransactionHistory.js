import Transaction from "../TransactionHistory/Transaction";

export default function TransactionHistory() {
  return (
    <div className="pt-14 md:pt-20 mb-10 sm:mx-12 md:mx-16 lg:mx-24">
      <div>
        <div className="flex flex-col gap-y-2">
          <p className="text-md mx-auto text-slate-100 text-center font-semibold bg-blue-700 py-1 px-4 rounded-md">
            Balance:<span>500tk</span>
          </p>
          <div className="flex gap-x-2 mx-2">
            <button className="flex w-full rounded-md   py-1 bg-gradient-to-r from-violet-600 to-violet-800">
              <span className="text-slate-100 mx-auto">Deposit</span>
            </button>
            <button className="w-full rounded-md  flex gap-x-2 py-1 bg-gradient-to-r from-sky-600 to-sky-800">
              <span className="text-slate-100 mx-auto">Withdraw</span>
            </button>
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
