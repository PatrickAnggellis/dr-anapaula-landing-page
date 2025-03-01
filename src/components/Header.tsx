import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Método', href: '#método' },
    { label: 'Serviços', href: '#serviços' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-40 shadow-sm">
      <div className="container mx-auto max-w-6xl flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Logo ExoAge" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-exo-800 hover:text-exo-600 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="#agendar"
            className="px-6 py-2 bg-exo-800 text-white rounded-lg hover:bg-exo-700 transition-colors"
          >
            Agende Avaliação
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-exo-800 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
            <div className="container mx-auto px-4">
              <nav className="space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="block text-2xl text-exo-800 hover:text-exo-600 transition-colors font-medium py-3 border-b border-exo-100"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#agendar"
                  onClick={toggleMenu}
                  className="block w-full text-center px-6 py-3 bg-exo-800 text-white rounded-lg hover:bg-exo-700 transition-colors mt-6"
                >
                  Agende Avaliação
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
