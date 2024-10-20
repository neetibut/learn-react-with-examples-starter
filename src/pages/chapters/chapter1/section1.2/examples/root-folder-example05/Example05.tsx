import { Link } from "react-router-dom";

export default function Example5() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.2">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 5: Nesting and organizing components</h2>
      </section>
      <section className="space-y-4 py-6 text-base text-start w-1/2">
        <ol className="space-y-2 list-disc list-inside text-start">
          <li>
            Components are regular JavaScript functions, so you can keep
            multiple components in the same file. This is convenient when
            components are relatively small or tightly related to each other. If
            this file gets crowded, you can always move Profile to a separate
            file. You will learn how to do this shortly on the page about
            imports.
          </li>
          <li>
            Because the Profile components are rendered inside Gallery—even
            several times!—we can say that Gallery is a parent component,
            rendering each Profile as a “child”. This is part of the magic of
            React: you can define a component once, and then use it in as many
            places and as many times as you like.
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
