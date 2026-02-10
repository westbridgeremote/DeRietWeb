import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rates from "./pages/Rates";
import MapDirections from "./pages/MapDirections";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/map" element={<MapDirections />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
