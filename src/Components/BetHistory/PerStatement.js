import cricketImg from "../assets/icons/cricket.jpg";

export default function PerStatement() {
  return (
    <div className="bg-slate-800 flex flex-col px-2 py-2 shadow-xl rounded-md">
      <div className="flex gap-x-4 pb-2 border-b border-slate-400 ">
        <span className="my-auto">
          <img className="w-9 h-9" src={cricketImg} alt="Cricket" />
        </span>
        <div className="flex flex-col leading-none">
          <p className="text-blue-600 font-semibold">
            Pakistan <span>VS</span> India
          </p>
          <p className="text-xs text-blue-200">T20 International</p>
          <p className="text-xs text-blue-200">19.05.2022(5.00 pm)</p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-amber-400">To win the match?</h1>
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Pakistan wins:</p>
            <p className="text-slate-100 text-sm font-bold">2.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Amount:</p>
            <p className="text-slate-100 text-sm font-bold">500</p>
          </div>
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Return Amount:</p>
            <p className="text-slate-100 text-sm font-bold">1000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Status:</p>
            <p className="text-blue-600 text-sm font-bold">Paid out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
