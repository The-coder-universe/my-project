import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import PartnersPage from './components/pages/PartnersPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);

  // Admin access - simple password check
  const handleAdminAccess = () => {
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
      setShowAdmin(true);
    } else if (password !== null) {
      alert('Invalid password');
    }
  };

  // Handle keyboard shortcut for admin access (Ctrl+Alt+A)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        handleAdminAccess();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (showAdmin) {
    return <AdminDashboard onBack={() => setShowAdmin(false)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'products':
        return <ProductsPage />;
      case 'partners':
        return <PartnersPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
      
      {/* Hidden admin button - only visible on hover */}
      <button
        onClick={handleAdminAccess}
        className="fixed bottom-4 right-4 w-8 h-8 bg-gray-800 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 text-xs"
        title="Admin Access (Ctrl+Alt+A)"
      >
        A
      </button>
    </div>
  );
}

export default App;