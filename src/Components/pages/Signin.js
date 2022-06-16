import Input from "../Form/Input";

export default function Signin() {
  return (
    <div className="flex">
      <div className="mx-auto md:mt-16 ">
        <div className=" min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
                <Input
                  id="email-address"
                  name="email"
                  placeholder="Email address"
                />
                <Input id="password" name="password" placeholder="Password" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-slate-100"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {" "}
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-slate-100 text-md">
              If you don't have an account, Please{" "}
              <a
                className="underline text-green-500 hover:text-red-700"
                href="#"
              >
                create an account
              </a>{" "}
              first
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
