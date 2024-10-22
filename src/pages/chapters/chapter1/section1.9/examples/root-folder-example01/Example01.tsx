import { Link } from "react-router-dom";
import Gallery from "./App.js";

export default function Example01() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.9">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        {" "}
        <h2>Chapter 1: Describing the UI</h2>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Section 1.9: Understanding Your UI as a Tree
        </h2>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
          Example 01: Your UI as a tree
        </h2>
      </section>
      {/* render your React code here below: */}
      <Gallery />
    </div>
  );
}
