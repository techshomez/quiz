import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import QuizInstruction from "./components/quiz/QuizInstructions";
import Take from './components/quiz/Take';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/play/instructions" element={<QuizInstruction />} />
        <Route exact path="/take/quiz" element={<Take />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
