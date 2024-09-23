import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Workshops from './Pages/Workshops';
import ProfessionalHelp from './Pages/ProfessionalHelp';
import MindfulMovement from './Pages/MindfulMovement';
import AboutUs from './Pages/AboutUs';
// import ProfessionalHelp from './Pages/ProfessionalHelp';
// import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import BooksPage from './Pages/BooksPage';
import VideoPlay from './Pages/VideoPlayer';
import VideosPage from './Pages/VideosPage';
import ArticlesPage from './Pages/ArticlesPage';
import VideoPlayer from './Pages/VideoPlayer'; 


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/professional-help" element={<ProfessionalHelp />} />
        <Route path="/about-us" element={<AboutUs />} />
<<<<<<< HEAD
        <Route path="/mindful-movement" element={<MindfulMovement />} />
=======
        <Route path="/wellness-library-books" element={<BooksPage />} />
        <Route path="/wellness-library-videos" element={<VideosPage/>} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        
        <Route path="/wellness-library-article" element={<ArticlesPage/>} />

>>>>>>> c3b775112962c71d94c2c969e6a7d6484443d88b
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
