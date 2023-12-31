import "./App.css"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import DogDetail from "./pages/DogDetail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import About from "./pages/About"

function App() {


  return (
    <>
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/catalog/:name" element={<DogDetail />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
