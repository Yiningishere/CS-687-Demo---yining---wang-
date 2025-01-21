import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Dogs from '@/pages/Dogs';
import DogDetails from '@/pages/DogDetails';
import Report from '@/pages/Report';
import Sightings from '@/pages/Sightings';
import Volunteer from '@/pages/Volunteer';
import Donate from '@/pages/Donate';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import FAQ from '@/pages/FAQ';
import SuccessStories from '@/pages/SuccessStories';
import AdoptionGuidelines from '@/pages/AdoptionGuidelines';
import Partners from '@/pages/Partners';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Contact from '@/pages/Contact';
import AdoptDog from '@/pages/AdoptDog';
import SightingDetails from './pages/SightingDetails';

const App = () => {  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/report" element={<Report />} />
            <Route path="/sightings" element={<Sightings />} />
            <Route path="/sightings/:id" element={<SightingDetails />} />
            <Route path="/dogs/:id" element={<DogDetails />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/dogs/:id" element={<AdoptDog />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/guidelines" element={<AdoptionGuidelines />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
