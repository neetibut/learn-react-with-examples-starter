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
      <button>
        <Link to="/section2.3/example01">Example 01</Link>
      </button>
      <button>
        <Link to="/section2.3/example02">Example 02</Link>
      </button>
      <button>
        <Link to="/section2.3/example03">Example 03</Link>
      </button>
      <button>
        <Link to="/section2.3/example04">Example 04</Link>
      </button>
      <button>
        <Link to="/section2.3/example05">Example 05</Link>
      </button>
      <button>
        <Link to="/section2.3/example06">Example 06</Link>
      </button>
      <button>
        <Link to="/section2.3/example07">Example 07</Link>
      </button>
      <button>
        <Link to="/section2.3/example08">Example 08</Link>
      </button>
      <button>
        <Link to="/section2.3/example09">Example 09</Link>
      </button>
      <button>
        <Link to="/section2.3/example10">Example 10</Link>
      </button>
    </div>
  );
}
