export default function PerStatement() {
  return (
    <div className="bg-slate-800 flex flex-col px-2 py-2 shadow-xl rounded-md">
      <div className="flex gap-x-4 pb-2 border-b border-slate-400 ">
        <span className="my-auto">
          <svg
            className="w-6 h-6 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M15.05,12.81L6.56,4.32c-0.39-0.39-1.02-0.39-1.41,0L2.32,7.15c-0.39,0.39-0.39,1.02,0,1.41l8.49,8.49 c0.39,0.39,1.02,0.39,1.41,0l2.83-2.83C15.44,13.83,15.44,13.2,15.05,12.81z" />
                  <rect
                    height="6"
                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.5264 17.7562)"
                    width="2"
                    x="16.17"
                    y="16.17"
                  />
                </g>
                <circle cx="18.5" cy="5.5" r="3.5" />
              </g>
            </g>
          </svg>
        </span>
        <div className="flex flex-col leading-none">
          <p className="text-blue-600 font-semibold">
            Pakistan <span>VS</span> India
          </p>
          <p className="text-xs text-blue-200">T20 International</p>
          <p className="text-xs text-blue-200">19.05.2022(5.00 pm)</p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-amber-400">To win the match?</h1>
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Pakistan wins:</p>
            <p className="text-slate-100 text-sm font-bold">2.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Amount:</p>
            <p className="text-slate-100 text-sm font-bold">500</p>
          </div>
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Return Amount:</p>
            <p className="text-slate-100 text-sm font-bold">1000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-blue-300 text-sm">Status:</p>
            <p className="text-blue-600 text-sm font-bold">Paid out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
