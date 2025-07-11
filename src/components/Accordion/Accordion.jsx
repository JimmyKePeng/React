import React from "react";
import { quizData } from "./data";
function Accordion() {
  const [selected, setSelected] = React.useState(null);
  const [enableMulti, setEnableMulti] = React.useState(false);
  const [multiple, setMultiple] = React.useState([]);

  function handleSingle(id) {
    setSelected(id === selected ? null : id);
  }

  function multiSelection(id) {
    setSelected(null);
    setMultiple([]);
    setEnableMulti((prev) => {
      return !prev;
    });
  }
  function handleMutil(id) {
    if (multiple.includes(id)) {
      setMultiple((prev) => prev.filter((item) => item != id));
    } else {
      setMultiple((prev) => {
        return [...prev, id];
      });
    }
  }
  return (
    <div className="flex justify-center items-center flex-col my-20 text-sm text-grey-300">
      <button className="mybtn" onClick={multiSelection}>
        Enable Multi Selection
      </button>

      <div>
        {quizData.map((item) => {
          return (
            <div key={item.id} className=" w-140 m-1 p-4 bg-blue-500 ">
              <div
                onClick={
                  enableMulti
                    ? () => handleMutil(item.id)
                    : () => handleSingle(item.id)
                }
                className=" font-bold flex justify-between items-center"
              >
                <h2>{item.question}</h2>
                <span>+</span>
              </div>
              <div>
                {enableMulti
                  ? multiple.includes(item.id) && (
                      <p className="bg-blue-500 font-bold p-5">{item.answer}</p>
                    )
                  : selected === item.id && (
                      <p className="bg-blue-500 font-bold p-5" name={item.id}>
                        {item.answer}
                      </p>
                    )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accordion;
