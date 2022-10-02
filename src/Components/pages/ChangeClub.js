import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";
import RadioInput from "../Form/RadioInput";

export default function ChangeClub() {
  const [clubName, setClubName] = useState([]);
  const [club, setClub] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, logoutUser } = useContext(AuthContext);
  const username = user.username;

  useEffect(() => {
    document.title = "Change club";
    async function getClubName() {
      try {
        let res = await axios.get(`${url}/accounts/club-name`);
        let data = res.data;
        let clubs = [];
        data.map((d) => {
          if (d.username === user.club_name) {
            clubs.push(d.username);
          }
          return "";
        });
        data.map((d) => {
          if (!(d.username === user.club_name)) {
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
  }, [user.club_name]);

  async function changeClub() {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Request Body
      let body = JSON.stringify({
        club_name: club,
      });
      let res = await axios.post(
        `${url}/accounts/update-club/?user_name=${username}`,
        body,
        config
      );

      if (res) {
        setLoading(false);
        setError();
        logoutUser();
      }
    } catch (err) {
      setLoading(false);
      setError(
        "Something is wrong. Check your internet connection and refresh the page."
      );
    }
  }

  async function userAuthentication() {
    setLoading(true);
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    let body = JSON.stringify({ username, password });

    try {
      let res = await axios.post(`${url}/accounts/token/`, body, config);
      if (res) {
        changeClub();
      }
    } catch (err) {
      setLoading(false);
      setError("Error while authenticating.Check your password!");
    }
  }

  async function handleSubmit(e) {
    setError();
    e.preventDefault();
    if (user.club_name === club) {
      setError("Select a new club to change your club.");
    } else {
      userAuthentication();
    }
  }

  return (
    <div>
      <div className="pt-20 pb-10">
        <div className="flex flex-col gap-y-8 mx-2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
              Change your club
            </h2>
          </div>
          <div className="mx-auto">
            <p className=" text-pink-200 text-center font-semibold text-lg flex  gap-x-2">
              Your present club:{" "}
              <span className="text-sky-400">{user.club_name}</span>
            </p>
          </div>
          <form
            className="mx-auto w-full max-w-md space-y-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
              <RadioInput
                id="club-name"
                name="Select club"
                options={clubName}
                value={club}
                onChange={(event) => setClub(event.target.value)}
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
                {loading ? "Processing..." : " Change club"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
