import { useEffect, useState } from "react";
import Tab from "./Tab";
import "./style.css";
function CustomTabs({ URL }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [tabbedItem, setTabbedItem] = useState({});

  async function getData() {
    try {
      setLoading(true);
      const result = await fetch(URL);
      const data = await result.json();
      setItems(data.todos);
      setTabbedItem(data.todos[0]);
      setLoading(false);
    } catch (err) {
      setErr(err.message);
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h1>Loading, Please wait.....</h1>;
  if (err) return <h1>Err: {err}</h1>;
  return (
    <div className="tabs">
      <div className="tabs-containers">
        {items.map((item, index) => (
          <Tab
            item={item}
            key={index}
            tabbedItem={tabbedItem}
            onClick={() => {
              setTabbedItem(item);
            }}
          />
        ))}
      </div>
      <p>{tabbedItem.todo}</p>
    </div>
  );
}
export default CustomTabs;
