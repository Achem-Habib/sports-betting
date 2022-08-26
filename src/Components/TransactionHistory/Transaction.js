import PerTransaction from "./PerTransaction";

export default function Transaction() {
  return (
    <div className="mt-2">
      <div className="flex flex-col gap-y-2 bg-slate-800 py-2 px-2 rounded-md">
        <p className="text-slate-200 font-semibold">12.06.2022</p>
        <div className="flex-flex-col gap-y-2">
          <PerTransaction />
          <PerTransaction />
        </div>
      </div>
    </div>
  );
}
