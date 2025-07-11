// npm i react-qr-code
import QRCode from "react-qr-code";
import { useState } from "react";

function QRCodeGenerator() {
  const myWebURL = "https://jimmykepeng.github.io/MyHomepage/";
  const [QRCodeValue, setQRCodeValue] = useState(myWebURL);
  const [userInput, setUserInput] = useState("");
  function generateNewQRCode(e) {
    setQRCodeValue(userInput);
    setUserInput("");
    e.preventDefault();
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="my-5">QR Code Generator</h2>
      <form onSubmit={generateNewQRCode} className="mb-5">
        <input
          type="text"
          value={userInput}
          placeholder="Enter your value here"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          className=""
          type="submit"
          disabled={userInput && userInput.trim !== "" ? false : true}
        >
          Generate
        </button>
      </form>
      <QRCode value={QRCodeValue} size={350} />
    </div>
  );
}
export default QRCodeGenerator;
