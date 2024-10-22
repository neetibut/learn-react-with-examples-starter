import React from "react";
import { Link } from "react-router-dom";

export default function Example09() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section3.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 09: </h2>
        <h2>-</h2>
      </section>
    </div>
  );
}
