import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './feature/home'
import About from './feature/about'
import Contact from './feature/contact'
import Header from './components/header/header'
import Layout from './layout/layout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <Home></Home>
    //   <About></About>
    //   <Contact></Contact>
    // </div>
  );
}

export default App;
