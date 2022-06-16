import PerStatement from "../Statement/PerStatement";

export default function Statement() {
  return (
    <div className="flex flex-col gap-y-2 mx-4  pt-16 pb-10 h-full">
      <h2 className=" text-center text-3xl font-extrabold text-slate-100">
        Bet History
      </h2>
      <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3">
        <PerStatement />
        <PerStatement />
        <PerStatement />
        <PerStatement />
      </div>
    </div>
  );
}
