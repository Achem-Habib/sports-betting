import Match from "./Match";

function SportsCategory({ matches, status }) {
  return (
    <div className="">
      <h1 className="bg-gradient-to-r from-sky-700 to-sky-500 w-full px-4 py-2 mt-4 mb-2 text-white font-semibold">
        {status} Match
      </h1>
      <div className="flex flex-col gap-y-4">
        {matches.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default SportsCategory;
