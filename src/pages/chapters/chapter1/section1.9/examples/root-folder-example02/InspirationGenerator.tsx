import * as React from "react";
import inspirations from "./inspirations";
import FancyText from "./FancyText";
import Color from "./Color";

// Define the structure for an inspiration object
interface Inspiration {
  type: "quote" | "color"; // The type can be either "quote" or "color"
  value: string; // The value is a string (either the quote or the color code)
}

// Define the props for InspirationGenerator
interface InspirationGeneratorProps {
  children?: React.ReactNode; // Optional children prop
}

export default function InspirationGenerator({
  children,
}: InspirationGeneratorProps) {
  const [index, setIndex] = React.useState<number>(0); // Ensure index is a number
  const inspiration: Inspiration = inspirations[index]; // inspiration must match the Inspiration interface
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === "quote" ? (
        // Pass the required title prop to FancyText
        <FancyText title={true} text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
