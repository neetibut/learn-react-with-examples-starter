import { Link } from "react-router-dom";

type HomePagePropTypes = {
  chapterNum: String,
  chapterTitle: String,
  sectionNum: String,
  sectionTitle: String,
};

export default function HomePage({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <div className="page-container">
      <header className="min-w-full py-6 group relative bg-gradient-to-br from-blue-400 to-green-400 rounded-lg hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1>Let&apos;s Learn React</h1>
        <h1>with Examples 🤗</h1>
      </header>
      <section className="py-6 flex flex-col text-xl items-start ">
        <h2 className="">
          Chapter {chapterNum}: {chapterTitle}
        </h2>
        <h2 className="">
          Section {sectionNum}: {sectionTitle}
        </h2>
      </section>
      <button>
        <Link to="/example01">Example 01</Link>
      </button>
      <button>
        <Link to="/example02">Example 02</Link>
      </button>
      <button>
        <Link to="/example03">Example 03</Link>
      </button>
      <button>
        <Link to="/example04">Example 04</Link>
      </button>
      <button>
        <Link to="/example05">Example 05</Link>
      </button>
      <button>
        <Link to="/example06">Example 06</Link>
      </button>
      <button>
        <Link to="/example07">Example 07</Link>
      </button>
      <button>
        <Link to="/example08">Example 08</Link>
      </button>
      <button>
        <Link to="/example09">Example 09</Link>
      </button>
      <button>
        <Link to="/example10">Example 10</Link>
      </button>
    </div>
  );
}
