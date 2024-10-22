import React from "react";
import { Link } from "react-router-dom";

export default function Example08() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section3.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 08: </h2>
        <h2>Preventing default behavior</h2>
      </section>
      <Signup />
    </div>
  );
}

function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
