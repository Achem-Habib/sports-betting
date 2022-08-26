export default function QuickBet({ setBetAmount }) {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="text-sm font-semibold text-slate-900">Quick bets</p>
      <div className="grid grid-cols-4 gap-x-2 gap-y-2">
        <button
          onClick={() => setBetAmount(50)}
          className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md"
        >
          50
        </button>
        <button
          onClick={() => setBetAmount(100)}
          className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md"
        >
          100
        </button>
        <button
          onClick={() => setBetAmount(200)}
          className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md"
        >
          200
        </button>
        <button
          onClick={() => setBetAmount(500)}
          className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md"
        >
          500
        </button>
        <button
          onClick={() => setBetAmount(1000)}
          className="bg-blue-700 text-sm text-white py-1 px-4 rounded-md"
        >
          1000
        </button>
      </div>
    </div>
  );
}
