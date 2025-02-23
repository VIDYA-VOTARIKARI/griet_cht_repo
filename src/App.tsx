import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Departments from './pages/Departments';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Page Coming Soon</h1>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          {/* <Chatbot /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;