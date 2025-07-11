import { useState } from "react";
export default function Scroll_indicator() {
  const [items, setItems] = useState(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const result = await fetch(
          "https://dummyjson.com/products?limit=100&select=title"
        );
        const data = await result.json();
        setItems(data.products);
        setLoading(false);
        console.log(data.products);
      } catch (err) {
        console.log(err);
        setErr(err.message);
      }
    }
    getData();
  }, []);
  if (loading) return <h1>Loading</h1>;
  return <div></div>;
}
