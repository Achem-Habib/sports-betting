import DateTime from "../DateTime";

export default function MatchInfo({ setIsOpen, match_info, category }) {
  return (
    <div className="relative flex bg-purple-800 rounded-t-md py-2">
      <span className="my-auto pl-2">
        <img
          className="w-10 h-10"
          src={category.image}
          alt={category.category}
        />
      </span>
      <div className="leading-none mx-auto">
        <p className="text-md text-slate-100">
          {match_info.team_1} <span>vs</span> {match_info.team_2}
        </p>
        <p className="text-sm font-extralight text-slate-100">
          {match_info.tournament_name}
        </p>
        <p className="text-sm font-extralight text-slate-100">
          <DateTime date_time={match_info.date_time} />
        </p>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute right-0 top-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 fill-white hover:fill-slate-200"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}
