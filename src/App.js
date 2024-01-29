import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Home from './components/pages/Home'
import Quiz from './components/pages/Quiz'

function App() {
  return (
    <div className="App">

      {/* including navbar */}
      <NavBar />

      {/* react router routes */}
      <Routes basename="/quiz-app">
        <Route path="/quiz-app" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>


    </div>
  );
}

export default App;
