import { Link } from "react-router-dom";
import App from "./App";

export default function Example01() {
  return (
    <div className="page-container bg-white text-black">
      <Link className="link-homepage" to="/section1.1">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 01: </h2>
      </section>
      <App />
    </div>
  );
}
