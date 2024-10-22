import { Link } from "react-router-dom";

function Button() {
  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLButtonElement;
    alert("You clicked a " + target.tagName);
  }
  return <button onClick={handleClick}>Click me</button>;
}

export default function Example01() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 01: </h2>
        <h2>Adding event handlers</h2>
      </section>
      <Button />
      <button
        onClick={function handleClick2() {
          alert("You clicked the 2nd button.");
        }}
      >
        I&apos;m 2nd button, click me 🤗
      </button>
      <button
        onClick={() => {
          alert("You clicked the 3rd button.");
        }}
      >
        I&apos;m 3rd button, click me 😎
      </button>
    </div>
  );
}
