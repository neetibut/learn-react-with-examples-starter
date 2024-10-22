import { Link } from "react-router-dom";
import App from "./App";

export default function Example02() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section3.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>
          Example 02: <span>Thinking about UI declaratively</span>
        </h2>
      </section>
      {/* code below */}
      <App />
    </div>
  );
}
