import "./style.css";
import { RxCross2 } from "react-icons/rx";
function PopUpWindow({ onClick, item }) {
  return (
    <div className="popup-container">
      <div className="popup-header">
        <h1>Customized Header</h1>
        <button className="close-btn" onClick={onClick}>
          <RxCross2 />
        </button>
      </div>
      <div className="popup-body">
        <h1>Customized Body</h1>
      </div>
      <div className="popup-footer">
        <h1>Customized Footer</h1>
      </div>
    </div>
  );
}
export default PopUpWindow;
