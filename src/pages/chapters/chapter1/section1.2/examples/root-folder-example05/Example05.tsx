import { Link } from "react-router-dom";
import App from "./App";

export default function Example5() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.2">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 5: Nesting and organizing components</h2>
      </section>
      <App />
    </div>
  );
}
