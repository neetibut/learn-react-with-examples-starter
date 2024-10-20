import { Link } from "react-router-dom";

export default function Example10() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.2">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 10: </h2>
        <h2>?</h2>
      </section>
    </div>
  );
}
