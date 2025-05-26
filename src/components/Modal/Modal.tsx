import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open'); // And this line for cleanup
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
      onClick={handleOutsideClick}
      style={{
        animation: `${isOpen ? 'fadeIn' : 'fadeOut'} 0.3s ease-in-out`,
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto transition-all duration-300 transform border border-gray-800"
        style={{
          animation: `${isOpen ? 'scaleIn' : 'scaleOut'} 0.3s ease-in-out`,
        }}
      >
        <button
          onClick={closeModal}
          className="cursor-pointer absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/90 backdrop-blur-sm shadow-sm transition-all duration-200 hover:bg-gray-700 text-gray-400 hover:text-white"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="h-full overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Modal;