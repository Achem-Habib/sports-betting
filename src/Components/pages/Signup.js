import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";
import RadioInput from "../Form/RadioInput";

export default function Signup() {
  const [clubName, setClubName] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [club, setClub] = useState();
  const { registerUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Sign up";
    async function getClubName() {
      try {
        let res = await axios.get(`${url}/accounts/club-name`);
        let data = res.data;
        let clubs = [];
        data.map((d) => {
          if (d.is_staff) {
            clubs.push(d.username);
          }
          return "";
        });
        data.map((d) => {
          if (!d.is_staff) {
            clubs.push(d.username);
          }
          return "";
        });
        setClub(clubs[0]);
        setClubName(clubs);
      } catch (err) {
        console.log(err);
      }
    }

    getClubName();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!club) {
      setError("Club field is required!");
    } else {
      await registerUser(
        username,
        email,
        number,
        password,
        confirmPassword,
        club,
        setLoading,
        setError
      );
    }
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
            className="mx-auto w-full max-w-md space-y-3"
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

            {error ? (
              <p className="text-red-500 text-center text-lg ">{error}</p>
            ) : (
              ""
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                {loading ? "Processing..." : "Create account"}
              </button>
            </div>
          </form>
        </div>

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
