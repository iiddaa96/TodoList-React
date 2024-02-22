import React from "react";

// Typedefinition för DeleteHandler som inte tar några argument och inte returnerar något värde.
export type DeleteHandler = () => void;

interface ButtonProps {
  // Funktion som ska köras när knappen klickas
  onClick: () => void;

  // Valfri CSS-klass för att anpassa utseendet på knappen
  className?: string;

  // Innehållet i knappen
  children: React.ReactNode;
}

// Gör Button-komponenten till en återanvändbar knappkomponent
// Tar emot props som argument och returnerar JSX för en knapp med angiven CSS-klass och klickhändelse.
const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
