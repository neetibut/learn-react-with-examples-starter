import React from "react";
import { Link } from "react-router-dom";

type AlertButtonProps = {
  message: string;
  children: React.ReactNode;
};

function AlertButton({ message, children }: AlertButtonProps) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}

export default function Example02() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 02: </h2>
        <h2>Adding event handlers</h2>
      </section>
      {/* code below */}
      <Toolbar />
    </div>
  );
}
