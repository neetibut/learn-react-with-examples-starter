import React from "react";
import { Link } from "react-router-dom";

type Example04PropTypes = {
  onSmash?: () => void;
  children?: React.ReactNode;
  onPlayMovie?: () => void;
  onUploadImage?: () => void;
};

export default function Example04() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/">
        Back to Home Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 04: </h2>
        <h2>Naming event handler props</h2>
      </section>
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading")}
      />
    </div>
  );
}

function Toolbar({ onPlayMovie, onUploadImage }: Example04PropTypes) {
  return (
    <div>
      <Button onSmash={onPlayMovie}>Play Movie</Button>
      <Button onSmash={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onSmash, children }: Example04PropTypes) {
  return <button onClick={onSmash}>{children}</button>;
}
