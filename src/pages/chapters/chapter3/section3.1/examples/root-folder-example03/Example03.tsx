import React from "react";
import { Link } from "react-router-dom";

type Example03PropTypes = {
  onClick?: () => void;
  children?: React.ReactNode;
  movieName?: string;
};

function Button({ onClick, children }: Example03PropTypes) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }: Example03PropTypes) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

function Example03() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section3.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 03: </h2>
        <h2>Passing event handlers as props</h2>
      </section>
      <Toolbar />
    </div>
  );
}

export default Example03;
