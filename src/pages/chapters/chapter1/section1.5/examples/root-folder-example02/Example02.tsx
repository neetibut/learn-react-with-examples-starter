import { Link } from "react-router-dom";
import App from "./App";

export default function Example02() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.5">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 02: Passing props to a component</h2>
      </section>
      {/* render your React code here below: */}
      <App />
    </div>
  );
}
