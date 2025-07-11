import React from "react";
function Home() {
  async function handleSend() {
    try {
      const res = await axios.post("http://localhost:3001/message", {
        message: input,
      });
      // res.data = { reply: "Server received: your input here" } from backend
      setResponse(res.data.reply);
    } catch (err) {
      console.error("Error:", err);
    }
  }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
export default Home;
