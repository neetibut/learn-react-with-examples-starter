import React from "react";
import { Link } from "react-router-dom";

export default function Example10() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 10: </h2>
        <h2>-</h2>
      </section>
    </div>
  );
}
