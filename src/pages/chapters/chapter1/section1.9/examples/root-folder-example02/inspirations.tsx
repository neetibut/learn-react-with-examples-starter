// Define the Inspiration type
interface Inspiration {
  type: "quote" | "color"; // The type can either be "quote" or "color"
  value: string; // The value is a string (quote text or color code)
}

const inspirations: Inspiration[] = [
  {
    type: "quote",
    value: "Don’t let yesterday take up too much of today.” — Will Rogers",
  },
  { type: "color", value: "#B73636" },
  { type: "quote", value: "Ambition is putting a ladder against the sky." },
  { type: "color", value: "#256266" },
  { type: "quote", value: "A joy that's shared is a joy made double." },
  { type: "color", value: "#F9F2B4" },
];

export default inspirations;
