interface ClockProps {
  color: string; // Color should be a valid CSS color as a string
  time: string; // Assuming time is passed as a formatted string
}

export default function Clock({ color, time }: ClockProps) {
  return <h1 style={{ color }}>{time}</h1>;
}
