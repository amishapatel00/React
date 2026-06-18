import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function expensiveTask(num) {
    for (let i = 0; i <= 10000; i++) {}
    return num * 2;
  }
  let doubleValue = expensiveTask(input);
  useMemo(() => expensiveTask(input), [input]);

  return (
    <div className="container">
      <button>count:{count}</button>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <input
          type="number"
          placeholder="enter any number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <div>Double:{doubleValue}</div>
      </div>
    </div>
  );
}

export default App;
