import { Link } from "react-router-dom";
import App from "./App";

export default function Example4() {
  return (
    <div className="page-container bg-white text-black text-start p-6">
      <Link className="link-homepage" to="/section2.4">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 4: Sends a message with a five-second delay</h2>
      </section>
      {/* Render your React code below: */}
      <App />
    </div>
  );
}