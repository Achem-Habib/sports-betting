import Match from "./Match";

export default function SportsCategory() {
  return (
    <div className="">
      <h1 className="bg-gradient-to-r from-sky-700 to-sky-500 w-full px-4 py-2 mt-4 mb-2 text-white font-semibold">
        Live Match
      </h1>
      <div className="flex flex-col gap-y-4">
        <Match />
        <Match />
        <Match />
      </div>
    </div>
  );
}
