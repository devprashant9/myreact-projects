import {React, useState} from 'react';
import data from './assets/data';

export default function Accordian() {
  const [single, setSingle] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enable, setEnable] = useState(false)

  function singleChange(getCurrentId){
    setSingle(getCurrentId === single ? null : getCurrentId)
  }
  function multipleChange(getCurrentId){
    let copyMultiple = [...multiple];
    let currentId = copyMultiple.indexOf(getCurrentId);
    if(currentId === -1){
      copyMultiple.push(getCurrentId);
    }
    else{
      copyMultiple.splice(currentId, 1);
    }
    setMultiple(copyMultiple);
  }

  return (
    <>
      <div className="container">
        <div className="select">
          <button onClick={() => setEnable(!enable)}>Click to {enable ? "Disable" : "Enable"} Multiple Accordian</button>
        </div>
        <div className="questions">
          {
            data && data.length > 0 ?
            (data.map((items, index) => {
              return(
                <div onClick={enable ? () => multipleChange(items.id) : () => singleChange(items.id)}
                 className="items" key={index}>
                {items.question}
                <div className="answer">
                  {
                    enable ? 
                    (multiple.includes(items.id) && <div>{items.answer}</div>) 
                    : 
                    (<div>
                      {single === items.id ? (<div>{items.answer}</div>) : null}
                    </div>)
                  }
                </div>
              </div>
              
              )
            }))
            :
            (
              <div>No Items Were Found</div>
            )
          }
        </div>
      </div>
    </>
  )
}
