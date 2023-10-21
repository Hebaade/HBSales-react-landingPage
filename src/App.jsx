
import './App.css'
import Home from './Components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import About from "./Components/About";
import ContactP from './Components/ContactP';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactP />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App
