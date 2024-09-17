import { React, useState } from "react";
import data from "./assets/data";

export default function App() {
  const [selected, setSelected] = useState(null);

  function handleChange(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <div className="container">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItems, index) => {
              return (
                <div
                  onClick={() => handleChange(dataItems.id)}
                  className="items"
                  key={index}
                >
                  <h3>{dataItems.question}</h3>
                  {selected === dataItems.id ? (
                    <div className="answer">{dataItems.answer}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div className="accordian">No Element is Present</div>
          )}
        </div>
      </div>
    </>
  );
}
