import { useState } from "react";

function Calculator() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [operation, setOperation] = useState("");
  const [results, setResults] = useState([]);

  function performAct() {
    const a = Number(numA);
    const b = Number(numB);
    let result;

    if (operation === "Add") {
      result = a + b;
    } else if (operation === "Subtract") {
      result = a - b;
    } else if (operation === "Multiply") {
      result = a * b;
    } else {
      return;
    }

    // append result
    setResults(prev => [...prev, result]);

    setNumA("");
    setNumB("");
    setOperation("");
  }

  return (
    <>
      <h3>Calculator</h3>

      <input
        type="number"
        placeholder="Enter number a"
        value={numA}
        onChange={(e) => setNumA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter number b"
        value={numB}
        onChange={(e) => setNumB(e.target.value)}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="">Operation</option>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <button onClick={performAct}>Perform Action</button>

      <h4>Results:</h4>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </>
  );
}

export default Calculator;