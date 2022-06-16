import BetRate from "./BetRate";

export default function BetOption() {
  return (
    <div className="border-b border-slate-400 pb-4 mt-2 mb-4 ml-2">
      <h1 className="text-white text-lg font-semibold mb-2">
        To win the match
      </h1>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        <BetRate name="India" rate="2.00" />
        <BetRate name="Pakistan" rate="2.00" />
        <BetRate name="Draw" rate="2.00" />
      </div>
    </div>
  );
}
