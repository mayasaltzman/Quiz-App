import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import home from './components/pages/home'

function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path="/" element={<home />} />
      </Routes>


    </div>
  );
}

export default App;
