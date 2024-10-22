import { Link } from "react-router-dom";

type HomePagePropTypes = {
  chapterNum: String;
  chapterTitle: String;
  sectionNum: String;
  sectionTitle: String;
};

export default function Chapter3Page({
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
        <h2 className="text-2xl">
          Chapter {chapterNum}: <span>{chapterTitle}</span>
        </h2>
      </section>
      {/* <h2 className="py-6 text-xl">
        Section 3.1: Reacting to Input with State
      </h2>
      <button>
        <Link to="/section3.1">Section 3.1</Link>
      </button>
      <h2 className="py-6 text-xl">
        Section 3.2: Choosing the State Structure
      </h2>
      <button>
        <Link to="/section3.2">Section 3.2</Link>
      </button>
      <h2 className="py-6 text-xl">
        Section 3.3: Sharing State Between Components
      </h2>
      <button>
        <Link to="/section3.3">Section 3.3</Link>
      </button>
      <h2 className="py-6 text-xl">
        Section 3.4: Preserving and Resetting State
      </h2>
      <button>
        <Link to="/section3.4">Section 3.4</Link>
      </button>
      <h2 className="py-6 text-xl">
        Section 3.5: Extracting State Logic into a Reducer
      </h2>
      <button>
        <Link to="/section3.5">Section 3.5</Link>
      </button>
      <h2 className="py-6 text-xl">
        Section 3.6: Passing Data Deeply with Context
      </h2>
      <button>
        <Link to="/section3.6">Section 3.6</Link>
      </button>
      <h2 className="py-6 text-xl">
        Section 3.7: Scaling Up with Reducer and Context
      </h2>
      <button>
        <Link to="/section3.7">Section 3.7</Link>
      </button> */}
      <h1>Coming soon... 🧙‍♂️</h1>
    </div>
  );
}
