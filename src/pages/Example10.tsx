import React from "react";
import { Link } from "react-router-dom";

export default function Example10() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/">
        Back to Home Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 10: </h2>
        <h2>-</h2>
      </section>
    </div>
  );
}
