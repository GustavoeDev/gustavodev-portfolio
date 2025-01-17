"use client";

import { createContext, useState } from "react";

interface NavigationProviderProps {
  children: React.ReactNode;
}

interface NavigationContextType {
  handleOpenNavigation: (type: boolean) => void;
  isOpen: boolean;
  handleBtnVisible: (type: boolean) => void;
  isVisible: boolean;
}

export const NavigationContext = createContext({} as NavigationContextType);

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleOpenNavigation(type: boolean) {
    setIsOpen(type);
  }

  function handleBtnVisible(type: boolean) {
    setIsVisible(type);
  }

  return (
    <NavigationContext.Provider
      value={{
        handleOpenNavigation,
        isOpen,
        handleBtnVisible,
        isVisible,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
