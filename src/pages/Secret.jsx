import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Secret() {
  const URL = "http://localhost:3001";
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [newSecret, setNewSecret] = useState("");
  if (!isAuth) return <Navigate to="/login" replace />; // redirect if not logged in

  useEffect(() => {
    const getSecret = async () => {
      try {
        const res = await axios.get(`${URL}/secret`, {
          withCredentials: true,
        });

        setData(res.data);

        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    getSecret();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${URL}/replaceSecret`,
        { newSecret: newSecret },
        {
          withCredentials: true,
        }
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-screen grid grid-cols-5">
      <div className="col-start-2 bg-amber-100">
        <div className="flex flex-col  ">
          <h1 className="font-bold text-gray-700 ">Here's your secret:</h1>
          <h2 className="font-bold text-blue-400  mx-9"> {data.secret}</h2>
          <form className="my-6" onSubmit={handleSubmit}>
            <textarea
              name="newSecret"
              className=" border border-blue-500 w-full px-3 caret-pink-500"
              placeholder="enter new secret here"
              rows="3"
              value={newSecret}
              onChange={(e) => {
                setNewSecret(() => {
                  return e.target.value;
                });
              }}
            />
            <button type="submit">Replace</button>
          </form>
        </div>
      </div>
      <div className="col-start-4 bg-green-200">
        <div className=" ">
          <h1 className="font-bold text-gray-700">Here's your secret:</h1>
          <h2 className="font-bold text-blue-400"> {data.secret}</h2>
        </div>
      </div>
    </div>
  );
}

export default Secret;
