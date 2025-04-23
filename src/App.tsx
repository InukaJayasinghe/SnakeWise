import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SnakesPage from './pages/SnakesPage';
import SnakeDetailPage from './pages/SnakeDetailPage';
import EmergencyPage from './pages/EmergencyPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/snakes" element={<SnakesPage />} />
            <Route path="/snakes/:id" element={<SnakeDetailPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;