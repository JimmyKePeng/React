import MenuList from "./MenuList";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./style.css";
function MenuItem({ item }) {
  const [expand, setExpand] = useState(false);
  function expandChildren() {
    setExpand((prev) => !prev);
  }
  return (
    <li>
      <div className="path">
        <p>{item.label}</p>
        <div className="path-item" onClick={expandChildren}>
          {item && item.children && item.children.length > 0 ? (
            expand ? (
              <FaMinus />
            ) : (
              <FaPlus />
            )
          ) : null}
        </div>
      </div>

      {expand && item && item.children && item.children.length > 0 ? (
        <MenuList menuList={item.children} />
      ) : null}
      {/* {item.children ? <h1>item</h1> : null} */}
    </li>
  );
}
export default MenuItem;
