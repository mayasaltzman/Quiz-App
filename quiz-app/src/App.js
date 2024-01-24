import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">

      {/* including navbar */}
      <NavBar />

      <h1>Quiz</h1>

      {/* react router routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;
