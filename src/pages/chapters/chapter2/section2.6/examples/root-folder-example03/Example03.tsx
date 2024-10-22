import { Link } from "react-router-dom";
import App from "./App";

export default function Example03() {
  return (
    <div className="page-container bg-white text-black text-start p-6">
      <Link className="link-homepage" to="/section2.6">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 03: Copying objects with the spread syntax</h2>
      </section>
      {/* Render your React code below: */}
      <App />
    </div>
  );
}
