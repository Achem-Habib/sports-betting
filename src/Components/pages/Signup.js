import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";
import RadioInput from "../Form/RadioInput";

export default function Signup() {
  const clubName = ["win", "lose", "abc", "def"];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [club, setClub] = useState(clubName[0]);
  const { registerUser } = useContext(AuthContext);

  const [error, setError] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }

    await registerUser(
      username,
      email,
      number,
      password,
      confirmPassword,
      club
    );
  }

  return (
    <div className="pt-16 md:pt-20 pb-20">
      <div className=" mx-4">
        <div className="flex flex-col gap-y-8 ">
          <div>
            <h2 className=" text-center text-3xl font-extrabold text-teal-400">
              Create Your Account
            </h2>
          </div>
          <form
            className="mx-auto w-full max-w-md space-y-6"
            onSubmit={handleSubmit}
          >
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
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                id="mobile-number"
                type="text"
                placeholder="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <RadioInput
                id="club-name"
                name="Club(Optional)"
                options={clubName}
                value={club}
                onChange={(event) => setClub(event.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
        {error ? <p className="text-white">{error}</p> : ""}
        <div className="text-slate-100 text-md mt-4 text-center">
          If you have an account,You can just{" "}
          <Link
            className="underline text-lime-300 hover:text-red-700"
            to="/signin"
          >
            log in
          </Link>{" "}
          here
        </div>
      </div>
    </div>
  );
}
