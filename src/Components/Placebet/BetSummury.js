export default function BetSummury({ betAmount, rate }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-slate-900 font-semibold text-sm">Total amount</p>
        <p className="font-bold text-slate-900 text-sm">{betAmount}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-slate-900 font-semibold text-sm">Possible Return</p>
        <p className="font-bold text-slate-900 text-sm">{betAmount * rate}</p>
      </div>
    </div>
  );
}
