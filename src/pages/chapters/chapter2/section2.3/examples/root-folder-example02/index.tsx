import { createRoot } from "react-dom/client";
import Gallery from "./Gallery";

// const root = createRoot(document.getElementById('root'));
// root.render(<Gallery />);

// Ensure the element exists and is not null
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container); // Create the root
  root.render(<Gallery />); // Render the App component
} else {
  console.error("Root element not found");
}
