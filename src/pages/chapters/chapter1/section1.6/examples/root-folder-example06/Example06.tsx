import { Link } from "react-router-dom";
import App from "./App";

export default function Example06() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.6">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 06: Conditionally assigning JSX to a variable</h2>
      </section>
      {/* Render your React code below: */}
      <App />
    </div>
  );
}
