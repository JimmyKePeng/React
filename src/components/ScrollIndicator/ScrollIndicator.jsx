import { useEffect, useState } from "react";
import "./style.css";
function ScrollIndicator({ URL }) {
  const [items, setItems] = useState(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function getData(infoURL) {
    try {
      setLoading(true);
      const result = await fetch(infoURL);
      const data = await result.json();
      if (data && data.products && data.products.length > 0) {
        setItems(data.products);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  }
  useEffect(() => {
    getData(URL);
  }, []);

  function handleScroll() {
    //document.documentElement.scrollTop	    Pixels scrolled from the top of the page
    //document.documentElement.scrollHeight	    Total scrollable height of the page
    //document.documentElement.clientHeight	    Height of the visible viewport (window height)
    const percent =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;
    setScrollPercent(percent);
    console.log(percent);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  if (loading) return <h1>Loading data! Pleaes wait</h1>;
  if (err) return <h1>{err}</h1>;
  return (
    <div className="main-container">
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="indicator-bar">
          <div
            className="indicator-bar-color"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>

      <div>
        {items &&
          items.map((item, index) => (
            <p className="items-list" key={index}>
              {index + 1}. {item.title}
            </p>
          ))}
      </div>
    </div>
  );
}

export default ScrollIndicator;
