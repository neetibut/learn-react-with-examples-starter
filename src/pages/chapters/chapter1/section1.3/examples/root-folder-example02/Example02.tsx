import { Link } from "react-router-dom";

export default function Example02() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.3">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 02: Exporting and importing a component</h2>
      </section>
      <Profile />
    </div>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/GFcRn8s.png" alt="Amazing JSD8" />;
}
