import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './pages/components/Header.jsx';
import Footer from './pages/components/Footer.jsx';
import Location from './pages/Location.jsx';
import CenterContent from "./pages/components/CenterContent.jsx";

function App() {
    return (
        <Router>
            <Header />
            <CenterContent>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CenterContent>
            <Footer />
        </Router>
    );
}

export default App;
