import { useState, useRef } from "react";

function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const focusOnInput = () => inputRef.current.focus();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  return (
    <div>
      <h1>useRef</h1>
      <section>
        <input
          type="text"
          placeholder="Random input"
          ref={inputRef}
          value={randomInput}
          onChange={handleChange}
        />
        <p>Renders: {renders.current}</p>
        <p>{randomInput}</p>
        <button onClick={focusOnInput}>Focus on input</button>
      </section>
      <br />
      <br />
      <br />
      <section>
        <button onClick={startTimer}>Start timer</button>
        <button onClick={stopTimer}>Stop timer</button>
        <button onClick={resetTimer}>Reset timer</button>
        <p>Timer: {seconds}</p>
      </section>
    </div>
  );
}

export default App;
