import { Link } from "react-router-dom";

export default function Example03() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.1">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 03: Using a component</h2>
      </section>
      <Gallery />
    </div>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/GFcRn8s.png" alt="Amazing JSD8" />;
}

function Gallery() {
  return (
    <section>
      <h1 className="text-4xl">The Amazing JSD8!</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
