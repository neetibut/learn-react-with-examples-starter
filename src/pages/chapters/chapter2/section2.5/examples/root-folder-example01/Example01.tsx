import { Link } from "react-router-dom";
import App from "./App.js";

export default function Example01() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.5">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 01: React batches state updates</h2>
      </section>
      {/* render your React code here below: */}
      <App />
    </div>
  );
}