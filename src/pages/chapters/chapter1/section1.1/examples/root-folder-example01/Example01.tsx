import { Link } from "react-router-dom";

export default function Example01() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.1">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 01: </h2>
      </section>
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
    </div>
  );
}
