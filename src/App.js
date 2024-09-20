import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Workshops from './Pages/Workshops';
import AboutUs from './Pages/AboutUs';
// import ProfessionalHelp from './Pages/ProfessionalHelp';
// import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import BooksPage from './Pages/BooksPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<Workshops />} />
        {/* <Route path="/professional-help" element={<ProfessionalHelp />} /> */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/wellness-library-books" element={<BooksPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
