import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
function Login() {
  const base_url = "http://localhost:3001/";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      navigate("/secret");
    }
  }, [isAuth, navigate]);

  async function handleSubmit(e) {
    const URL = `${base_url}${e.target.value}`;
    console.log(URL);
    e.preventDefault();
    try {
      const res = await axios.post(
        `${URL}`,
        { username, password },
        { withCredentials: true } // needed to send cookies for session-based login
      );

      if (res.data.success) {
        setSuccess(res.data.message);
        setError("");
        // optional: redirect after success
        // navigate("/dashboard");
        setIsAuth(true);
        navigate("/secret");
      } else {
        setError(res.data.message);
        setSuccess("");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError(err.response.data.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
      setSuccess("");
    }
  }

  return (
    <div className="flex  justify-center items-center flex-col mt-20">
      <div className="m-5">
        <form>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="email"
            placeholder="Email"
            value={username}
            name="email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
            name="password"
            value={password}
          />
          <button onClick={handleSubmit} value="login">
            Log in
          </button>
          <button onClick={handleSubmit} value="signup">
            Sign up
          </button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">{success}</p>}
      </div>
      <div className="m-5"></div>
    </div>
  );
}
export default Login;
