import quotes from "./quotes";
import FancyText from "./FancyText";
import { useState } from "react";

interface InspirationGeneratorProps {
  children?: React.ReactNode; // children is optional and can be any valid React element
}

export default function InspirationGenerator({
  children,
}: InspirationGeneratorProps) {
  const [index, setIndex] = useState<number>(0); // index is a number
  const quote: string = quotes[index]; // quotes should be an array of strings

  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} title={false} />{" "}
      {/* Ensure FancyText accepts the correct props */}
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
