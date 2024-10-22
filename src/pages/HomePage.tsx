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
      <header className="flex justify-center items-center min-w-full py-6 group relative bg-gradient-to-br from-blue-400 to-green-400 rounded-lg hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500">
        <img src="/atom.svg" alt="atom icon" width="120" />
        <div className="text-3xl">
          <h1>
            Let&apos;s Learn <span className="ml-0">React</span>
          </h1>
          <h1>with Examples</h1>
        </div>
        <span>🤗</span>
      </header>

      <h2 className="py-6 flex text-xl items-start">
        Chapter {chapterNum1}: <span>{chapterTitle1}</span>
      </h2>
      <button>
        <Link to="/chapter1">Chapter 1</Link>
      </button>
      <h2 className="py-6 flex text-xl items-start">
        Chapter {chapterNum2}:<span>{chapterTitle2}</span>
      </h2>
      <button>
        <Link to="/chapter2">Chapter 2</Link>
      </button>
      <h2 className="py-6 flex text-xl items-start">
        Chapter {chapterNum3}: <span>{chapterTitle3}</span>
      </h2>
      <button>
        <Link to="/chapter3">Chapter 3</Link>
      </button>
      <h2 className="py-6 flex text-xl items-start">
        Chapter {chapterNum4}: <span>{chapterTitle4}</span>
      </h2>
      <button>
        <Link to="/chapter4">Chapter 4</Link>
      </button>
    </div>
  );
}
