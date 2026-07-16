import { useState } from 'react';

export default function App() {

  const [cnt, setCnt] = useState(0)
  const [cntToSet, setCntToSet] = useState(0)

  const incHandler = (prev) => {
    // setCnt((num) => num + prev + 1)   //they will update vals as taking fn passed val in first step and add with default val
    // setCnt((num) => num + 1)
    setCnt(prev + 1) // shorthand for above 2 line code
  }

  return (
    <>
      <h1>Counter is {cnt}</h1>
      <div className="card">Count is {cnt}</div>
      <div>
        <button style={{margin: "0 6px"}}
        onClick={() => setCnt(cnt + 1)}
        >
          Increase
        </button>
        <button style={{margin: "0 6px"}}
        onClick={() => setCnt(() => Math.max(cnt - 1, 0))}
        >
          Decrease
        </button>
        <button style={{margin: "0 6px"}}
        onClick={() => setCnt((cnt) => 0)}
        >
          Reset
        </button>
      </div>
      <div style={{margin: "20px 0"}}>
        <input
        style={{margin: "0 5px",
          padding: "0.6em 1.2em", border: "1px solid white", width: "100px", borderRadius: "2%"
        }}
        value={cntToSet}
        onChange={(e) => setCntToSet(Number(e.target.value))}
        type="text" />
        <button 
        style={{margin: "0 6px", padding: "2 2px"}}
        onClick={() => {
          setCnt(Number(cntToSet));
          setCntToSet(0)
        }}
        >
          Set to {cntToSet}
        </button>
      </div>
    </>
  );
}
