import { useEffect } from "react";

interface ClockProps {
  time: string;
}

export default function Clock({ time }: ClockProps) {
  useEffect(() => {
    console.log("Clock re-rendered");
  }, [time]);

  return (
    <>
      <h1>{time}</h1>
      <input className="text-black" />
    </>
  );
}
