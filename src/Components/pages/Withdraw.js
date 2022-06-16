import RadioInput from "../Form/RadioInput";
import SignupInput from "../Form/SignupInput";

export default function Withdraw() {
  const method = ["Select method", "bkash", "nagad"];
  const type = ["Account Type", "Personal", "Agent"];
  return (
    <div className="pt-16 md:pt-20 pb-10">
      <div className="flex flex-col gap-y-8 mx-2 ">
        <div>
          <h2 className=" text-center text-3xl font-extrabold text-slate-100">
            Request a Withdraw
          </h2>
        </div>
        <form
          className="mx-auto w-full max-w-md space-y-6"
          action="#"
          method="POST"
        >
          <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
            <RadioInput name="Method" options={method} />
            <RadioInput name="Type of Account" options={type} />
            <SignupInput id="to" name="text" placeholder="To" />
            <SignupInput id="amount" name="text" placeholder="Amount" />
            <SignupInput id="password" name="password" placeholder="Password" />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Request Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
