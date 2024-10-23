import { Link } from "react-router-dom";

type HomePagePropTypes = {
  chapterNum: String;
  chapterTitle: String;
  sectionNum: String;
  sectionTitle: String;
};

export default function Chapter2Page({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/">
        Back to Home Page
      </Link>
      <section className="py-6 flex flex-col items-start ">
        <h2 className="text-2xl font-bold">
          Chapter {chapterNum}: {chapterTitle}
        </h2>
      </section>
      {/* <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.1: Responding to Events
      </h2>
      <button>
        <Link to="/section2.1">Section 2.1</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.2: State: A Component's Memory
      </h2>
      <button>
        <Link to="/section2.2">Section 2.2</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.3: Render and Commit
      </h2>
      <button>
        <Link to="/section2.3">Section 2.3</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.4: State as a Snapshot
      </h2>
      <button>
        <Link to="/section2.4">Section 2.4</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.5: Queueing a Series of State Updates
      </h2>
      <button>
        <Link to="/section2.5">Section 2.5</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.6: Updating Objects in State
      </h2>
      <button>
        <Link to="/section2.6">Section 2.6</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2.7: Updating Arrays in State
      </h2>
      <button>
        <Link to="/section2.7">Section 2.7</Link>
      </button> */}
      <h1>Coming soon... 🧙‍♂️</h1>
    </div>
  );
}
