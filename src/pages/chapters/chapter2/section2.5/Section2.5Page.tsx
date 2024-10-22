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
      <Link className="link-homepage" to="/chapter2">
        Back to <span className="font-bold">Chapter Page</span>
      </Link>
      <section className="py-6 flex flex-col text-xl items-start ">
        <h2 className="">
          Chapter {chapterNum}: {chapterTitle}
        </h2>
        <h2 className="">
          Section {sectionNum}: {sectionTitle}
        </h2>
      </section>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 01: React batches state updates
      </h2>
      <button>
        <Link to="/section2.5/example01">Example 01</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 02: Updating the same state multiple times before the next order
      </h2>
      <button>
        <Link to="/section2.5/example02">Example 02</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 03: What happens if you update state after replacing it
      </h2>
      <button>
        <Link to="/section2.5/example03">Example 03</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example 04: Naming conventions
      </h2>
      <button>
        <Link to="/section2.5/example04">Example 04</Link>
      </button>
      <button>
        <Link to="/section2.5/example05">Example 05</Link>
      </button>
      <button>
        <Link to="/section2.5/example06">Example 06</Link>
      </button>
      <button>
        <Link to="/section2.5/example07">Example 07</Link>
      </button>
      <button>
        <Link to="/section2.5/example08">Example 08</Link>
      </button>
      <button>
        <Link to="/section2.5/example09">Example 09</Link>
      </button>
      <button>
        <Link to="/section2.5/example10">Example 10</Link>
      </button>
    </div>
  );
}
