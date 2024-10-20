import { Link } from "react-router-dom";

type HomePagePropTypes = {
  chapterNum1: String;
  chapterTitle1: String;
  chapterNum2: String;
  chapterTitle2: String;
  chapterNum3: String;
  chapterTitle3: String;
  chapterNum4: String;
  chapterTitle4: String;
};

export default function HomePage({
  chapterNum1,
  chapterTitle1,
  chapterNum2,
  chapterTitle2,
  chapterNum3,
  chapterTitle3,
  chapterNum4,
  chapterTitle4,
}: HomePagePropTypes) {
  return (
    <div className="page-container">
      <header className="min-w-full py-6 group relative bg-gradient-to-br from-blue-400 to-green-400 rounded-lg hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1>Let&apos;s Learn <span className="font-bold">React</span></h1>
        <h1>with Examples 🤗</h1>
      </header>

      <h2 className="py-6 flex flex-col text-xl items-start">
        Chapter {chapterNum1}: {chapterTitle1}
      </h2>
      <button>
        <Link to="/chapter1">Chapter 1</Link>
      </button>
      <h2 className="py-6 flex flex-col text-xl items-start">
        Chapter {chapterNum2}: {chapterTitle2}
      </h2>
      <button>
        <Link to="/chapter2">Chapter 2</Link>
      </button>
      <h2 className="py-6 flex flex-col text-xl items-start">
        Chapter {chapterNum3}: {chapterTitle3}
      </h2>
      <button>
        <Link to="/chapter3">Chapter 3</Link>
      </button>
      <h2 className="py-6 flex flex-col text-xl items-start">
        Chapter {chapterNum4}: {chapterTitle4}
      </h2>
      <button>
        <Link to="/chapter4">Chapter 4</Link>
      </button>
    </div>
  );
}
