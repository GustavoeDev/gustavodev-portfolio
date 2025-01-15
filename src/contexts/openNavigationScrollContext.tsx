"use client";

import { createContext, useState } from "react";

interface NavigationScrollProviderProps {
  children: React.ReactNode;
}

interface NavigationScrollContextType {
  handleNavigationVisible: (type: boolean) => void;
  isVisible: boolean;
  handleOpenModal: (type: boolean) => void;
  isModalOpen: boolean;
}

export const NavigationScrollContext = createContext(
  {} as NavigationScrollContextType
);

export default function NavigationScrollProvider({
  children,
}: NavigationScrollProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleNavigationVisible(type: boolean) {
    setIsVisible(type);
  }

  function handleOpenModal(type: boolean) {
    setIsModalOpen(type);
  }

  return (
    <NavigationScrollContext.Provider
      value={{
        handleNavigationVisible,
        isVisible,
        handleOpenModal,
        isModalOpen,
      }}
    >
      {children}
    </NavigationScrollContext.Provider>
  );
}
