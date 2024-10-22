import { useState } from "react";

// Explicitly type the array of counters as an array of numbers
let initialCounters: number[] = [0, 0, 0];

export default function CounterList() {
  // Use the array of numbers type for counters
  const [counters, setCounters] = useState<number[]>(initialCounters);

  // Type the index parameter as a number
  function handleIncrementClick(index: number) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
