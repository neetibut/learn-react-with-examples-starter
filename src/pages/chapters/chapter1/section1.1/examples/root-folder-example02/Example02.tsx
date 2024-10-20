import { Link } from "react-router-dom";

export default function Example02() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.1">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 02: </h2>
        <ul className="list-disc text-start">
          <li>Step 1: Export the component</li>
          <li>Step 2: Define the function</li>
          <li>Step 3: Add markup</li>
        </ul>
      </section>
      <Profile />
    </div>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/GFcRn8s.png" alt="Amazing JSD8" />;
}
