export default function BetAnswer({ question, answer, rate }) {
  return (
    <div className="bg-slate-200 px-2 py-1 rounded-md mt-1">
      <p className="text-sm font-semibold text-slate-900">
        {question.question}
      </p>
      <div className="flex justify-between">
        <span className="text-sm font-semibold text-slate-900">{answer}</span>
        <span className="text-sm font-semibold text-slate-900">{rate}</span>
      </div>
    </div>
  );
}
