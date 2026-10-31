"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface EnquireModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EnquireModalContext = createContext<EnquireModalContextType | undefined>(undefined);

export function EnquireModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <EnquireModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </EnquireModalContext.Provider>
  );
}

export function useEnquireModal() {
  const context = useContext(EnquireModalContext);
  if (context === undefined) {
    throw new Error("useEnquireModal must be used within an EnquireModalProvider");
  }
  return context;
}
