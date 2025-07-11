import { useState } from "react";
import PopUpWindow from "./PopUpWindow";
import "./style.css";
import GithubProfileFinder from "../GithubProfileFinder/GithubProfileFinder";
function ModalPopUp() {
  const [openPopup, setOpenPopup] = useState(false);

  function handleClick() {
    setOpenPopup((prev) => !prev);
  }
  return (
    <div className={`modal-container ${openPopup ? "show" : ""}`}>
      {openPopup ? (
        <PopUpWindow onClick={handleClick} />
      ) : (
        <button className="px-3" onClick={handleClick}>
          Open Popup
        </button>
      )}
    </div>
  );
}
export default ModalPopUp;
