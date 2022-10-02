import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { user, logoutUser } = useContext(AuthContext);
  const username = user.username;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Change password";
  });

  async function changePassword() {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Request Body
      let body = JSON.stringify({
        password: newPassword,
      });
      let res = await axios.post(
        `${url}/accounts/update-password/?user_name=${username}`,
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
        changePassword();
      }
    } catch (err) {
      setLoading(false);
      setError("Error while authenticating.Check your password!");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError();
    setLoading(true);

    userAuthentication();
  }

  return (
    <div>
      <div className="pt-20 pb-10">
        <div className="flex flex-col gap-y-8 mx-2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
              Change your password
            </h2>
          </div>
          <form
            className="mx-auto w-full max-w-md space-y-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
              <Input
                id="current password"
                type="password"
                placeholder="Current Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                id="new password"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                disabled={loading}
                className="group relative w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                {loading ? "Processing..." : " Change password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
