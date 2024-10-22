import { Link } from "react-router-dom";
import App from "./App";

export default function Example02() {
  return (
    <div className="page-container bg-white text-black text-start p-6">
      <Link className="link-homepage" to="/section2.2">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 02: Adding a state variable</h2>
      </section>
      <App />
    </div>
  );
}
