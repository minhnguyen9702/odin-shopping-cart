import React, { useEffect } from "react";

interface PopupProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 1250);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 top-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

export default Popup;
