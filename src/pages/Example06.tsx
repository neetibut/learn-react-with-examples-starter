import React from "react";
import { Link } from "react-router-dom";

type Example06PropTypes = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Example06() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/">
        Back to Home Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 06: </h2>
        <h2>Stopping propagation</h2>
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
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }: Example06PropTypes) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
        console.log(e);
      }}
    >
      {children}
    </button>
  );
}
