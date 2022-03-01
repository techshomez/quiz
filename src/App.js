import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import QuizInstruction from "./components/quiz/QuizInstructions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/play/instructions" element={<QuizInstruction />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
