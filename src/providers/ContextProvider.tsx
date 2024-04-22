import React, { ReactNode, useRef } from "react";
import { createContext } from "react";

interface ThemeContextType {
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
const ThemeProvider: React.FC<ThemeContextType & { children: ReactNode }> = ({
  children,
}) => {
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  return (
    <ThemeContext.Provider value={{homeRef, portfolioRef, aboutRef, contactsRef }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
