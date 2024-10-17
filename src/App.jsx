import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Example01 from "./pages/Example01";
import Example02 from "./pages/Example02";
import Example03 from "./pages/Example03";
import Example04 from "./pages/Example04";
import Example05 from "./pages/Example05";
import Example06 from "./pages/Example06";
import Example07 from "./pages/Example07";
import Example08 from "./pages/Example08";
import Example09 from "./pages/Example09";
import Example10 from "./pages/Example10";

// We setup React-Router-Dom for our web app's navigation here.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.1"
              sectionTitle="Responding to Events"
            />
          }
        />
        <Route path="/example01" element={<Example01 />} />
        <Route path="/example02" element={<Example02 />} />
        <Route path="/example03" element={<Example03 />} />
        <Route path="/example04" element={<Example04 />} />
        <Route path="/example05" element={<Example05 />} />
        <Route path="/example06" element={<Example06 />} />
        <Route path="/example07" element={<Example07 />} />
        <Route path="/example08" element={<Example08 />} />
        <Route path="/example09" element={<Example09 />} />
        <Route path="/example10" element={<Example10 />} />
      </Routes>
    </BrowserRouter>
  );
}
