import React from "react";
import { Link } from "react-router-dom";

export default function Example05() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 05: </h2>
        <h2>Event propagation</h2>
      </section>
      <Toolbar />
    </div>
  );
}

function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
