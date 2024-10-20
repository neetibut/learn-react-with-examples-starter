import { Link } from "react-router-dom";

export default function Example08() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.6">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 08: </h2>
        <h2>?</h2>
      </section>
    </div>
  );
}
