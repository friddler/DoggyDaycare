import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
 

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </Router>
   
    </>
  )
}

export default App
