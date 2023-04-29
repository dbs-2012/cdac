import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Theory from "./components/Theory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Triangle from "./components/Triangle";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<Theory />} />
          <Route path='/sim' element={<Triangle/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
