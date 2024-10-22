import { createRoot } from "react-dom/client";
import App from "./App";

// Ensure the element exists and is not null
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container); // Create the root
  root.render(<App />); // Render the App component
} else {
  console.error("Root element not found");
}
