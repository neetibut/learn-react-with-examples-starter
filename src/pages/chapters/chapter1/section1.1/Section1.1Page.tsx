import { Link } from "react-router-dom";

type HomePagePropTypes = {
  chapterNum: String;
  chapterTitle: String;
  sectionNum: String;
  sectionTitle: String;
};

export default function SectionPage({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/chapter1">
        Back to <span>Chapter Page</span>
      </Link>
      <section className="py-6 flex flex-col text-xl items-start ">
        <h2 className="">
          Chapter {chapterNum}: <span>{chapterTitle}</span>
        </h2>
        <h2 className="">
          Section {sectionNum}: <span>{sectionTitle}</span>
        </h2>
      </section>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 01: Components: UI building blocks
      </h2>
      <button>
        <Link to="/section1.1/example01">Example 01</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 02: Defining a component
      </h2>
      <button>
        <Link to="/section1.1/example02">Example 02</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 03: Using a component
      </h2>
      <button>
        <Link to="/section1.1/example03">Example 03</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 04: What the browser sees
      </h2>
      <button>
        <Link to="/section1.1/example04">Example 04</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 05: Nesting and organizing components
      </h2>
      <button>
        <Link to="/section1.1/example05">Example 05</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 06: ?</h2>
      <button>
        <Link to="/section1.1/example06">Example 06</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 07: ?</h2>
      <button>
        <Link to="/section1.1/example07">Example 07</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 08: ?</h2>
      <button>
        <Link to="/section1.1/example08">Example 08</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 09: ?</h2>
      <button>
        <Link to="/section1.1/example09">Example 09</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 10: ?</h2>
      <button>
        <Link to="/section1.1/example10">Example 10</Link>
      </button>
    </div>
  );
}
