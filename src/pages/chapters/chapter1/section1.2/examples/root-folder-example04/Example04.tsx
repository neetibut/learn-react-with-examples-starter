import { Link } from "react-router-dom";

export default function Example4() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.2">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 4: What the browser sees</h2>
      </section>
      <section className="space-y-4 py-6 text-base text-start ">
        <p>Notice the difference in casing:</p>
        <ol className="space-y-2 list-disc list-inside text-start">
          <li>
            {`<section>`} is lowercase, so React knows we refer to an HTML tag.
          </li>
          <li>
            {`<Profile>`} starts with a capital P, so React knows that we want
            to use our component called Profile.
          </li>
        </ol>
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
