import { Link } from "react-router-dom";

export default function Example09() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section3.7">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 09: </h2>
        <h2>?</h2>
      </section>
    </div>
  );
}
