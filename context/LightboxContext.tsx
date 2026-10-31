"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface LightboxItem {
  src: string;
  title?: string;
  alt?: string;
}

interface LightboxContextType {
  isOpen: boolean;
  currentItem: LightboxItem | null;
  currentIndex: number;
  itemsList: LightboxItem[];
  openLightbox: (srcOrItem: string | LightboxItem, index?: number, list?: LightboxItem[]) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<LightboxItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsList, setItemsList] = useState<LightboxItem[]>([]);

  const openLightbox = (
    srcOrItem: string | LightboxItem,
    index = 0,
    list: LightboxItem[] = []
  ) => {
    let item: LightboxItem;
    if (typeof srcOrItem === "string") {
      item = { src: srcOrItem, title: "Suraj Resorts & Convention Hall" };
    } else {
      item = srcOrItem;
    }

    const effectiveList = list.length > 0 ? list : [item];
    setItemsList(effectiveList);
    setCurrentIndex(index >= 0 && index < effectiveList.length ? index : 0);
    setCurrentItem(effectiveList[index] || item);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentItem(null);
  };

  const nextImage = () => {
    if (itemsList.length <= 1) return;
    const nextIdx = (currentIndex + 1) % itemsList.length;
    setCurrentIndex(nextIdx);
    setCurrentItem(itemsList[nextIdx]);
  };

  const prevImage = () => {
    if (itemsList.length <= 1) return;
    const prevIdx = (currentIndex - 1 + itemsList.length) % itemsList.length;
    setCurrentIndex(prevIdx);
    setCurrentItem(itemsList[prevIdx]);
  };

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentItem,
        currentIndex,
        itemsList,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (context === undefined) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}
