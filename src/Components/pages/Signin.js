import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Sign in";
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await loginUser(username, password, setLoading, setError);
  }

  return (
    <div className="flex">
      <div className="mx-auto md:mt-16 ">
        <div className=" min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
                <Input
                  id="user-name"
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error ? (
                <p className="text-red-500 text-center text-lg ">{error}</p>
              ) : (
                ""
              )}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  {loading ? "Processing..." : " Sign in"}
                </button>
              </div>
            </form>
            <div className="text-slate-100 text-md">
              If you don't have an account, Please{" "}
              <Link
                className="underline text-lime-300 hover:text-red-700"
                to="/signup"
              >
                create an account
              </Link>{" "}
              first
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
