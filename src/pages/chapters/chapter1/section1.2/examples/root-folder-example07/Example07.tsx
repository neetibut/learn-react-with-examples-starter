import { Link } from "react-router-dom";

export default function Example07() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.2">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 07: </h2>
        <h2>?</h2>
      </section>
    </div>
  );
}
