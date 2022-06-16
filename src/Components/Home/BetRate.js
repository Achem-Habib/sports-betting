export default function BetRate({ name, rate }) {
  return (
    <button className="bg-gradient-to-r from-blue-700 to-blue-900 flex justify-between px-2 py-1 rounded-md">
      <span className="text-white text-sm">{name}</span>
      <span className="text-white text-sm font-bold">{rate}</span>
    </button>
  );
}
