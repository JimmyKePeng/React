import { useEffect, useState } from "react";

function SearchAutoComp() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const [showUsers, setShowUsers] = useState([]);

  async function getUsers() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/users?limit=100&select=firstName`
      );
      const result = await res.json();
      console.log(result.users);
      if (result && result.users && result.users.length) {
        setUsers(result.users.map((user) => user.firstName));
        setLoading(false);
        setErr(null);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErr(err.message);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  function handleChange(e) {
    console.log(users);
    setInput(e.target.value);
    const results = users.filter((user) => {
      return user.toLowerCase().startsWith(e.target.value.toLowerCase());
    });
    setShowUsers(results);
  }
  if (loading) return <h1>Loading data!</h1>;
  if (err) return <h1>Err: {err}</h1>;
  return (
    <div className="flex items-center justify-center flex-col">
      <input
        onChange={handleChange}
        type="text"
        value={input}
        name="name"
        placeholder="Search user here"
      />
      <ul>
        {input &&
          input.trim() &&
          showUsers.map((user) => <li className="list-disc">{user}</li>)}
      </ul>
    </div>
  );
}
export default SearchAutoComp;
