import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('welcomeModalShown');
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('welcomeModalShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-8 mx-4">
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-exo-800">
            Bem-vindo ao Método ExoAge
          </h2>
          
          <p className="text-exo-600">
            Descubra o poder da medicina regenerativa e transforme sua pele com nossa tecnologia exclusiva de rejuvenescimento.
          </p>
          
          <div className="flex justify-center space-x-4 pt-4">
            <a 
              href="#agendar" 
              onClick={handleClose}
              className="px-6 py-2 bg-exo-800 text-white rounded-lg hover:bg-exo-700 transition-colors"
            >
              Agende sua Avaliação
            </a>
            
            <button 
              onClick={handleClose}
              className="px-6 py-2 border border-exo-200 text-exo-800 rounded-lg hover:bg-exo-50 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
