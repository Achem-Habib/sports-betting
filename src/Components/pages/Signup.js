import RadioInput from "../Form/RadioInput";
import SignupInput from "../Form/SignupInput";

export default function Signup() {
  const clubName = ["win", "lose", "abc", "def"];
  return (
    <div className="pt-16 md:pt-20 pb-20">
      <div className=" mx-2">
        <div className="flex flex-col gap-y-8 ">
          <div>
            <h2 className=" text-center text-3xl font-extrabold text-slate-100">
              Create Your Account
            </h2>
          </div>
          <form
            className="mx-auto w-full max-w-md space-y-6"
            action="#"
            method="POST"
          >
            <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
              <SignupInput id="full-name" name="text" placeholder="Full Name" />
              <SignupInput id="user-name" name="text" placeholder="User Name" />
              <SignupInput id="email" name="email" placeholder="Email" />
              <SignupInput
                id="mobile-number"
                name="text"
                placeholder="Mobile Number"
              />
              <SignupInput
                id="password"
                name="password"
                placeholder="Password"
              />
              <SignupInput
                id="confirm-password"
                name="password"
                placeholder="Confirm Password"
              />
              <RadioInput name="Club" options={clubName} />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
        <div className="text-slate-100 text-md mt-4 text-center">
          If you have an account,You can just{" "}
          <a
            className="underline text-green-500 hover:text-red-700"
            href="/signin"
          >
            log in
          </a>{" "}
          here
        </div>
      </div>
    </div>
  );
}
