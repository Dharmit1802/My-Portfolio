"use client";

import React, { useContext, useState } from 'react'
import {links} from '../lib/data'
import { createContext } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionProviderType = {children: React.ReactNode}

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>,
  lastTimeClick: number,
  setLastTimeClick:React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({children}:ActiveSectionProviderType) {

  const [activeSection, setActiveSection] =useState<SectionName>("Home");
  const [lastTimeClick, setLastTimeClick] = useState(0);

  const value = {
    activeSection,
    setActiveSection,
    lastTimeClick,
    setLastTimeClick
  }

  return (
    <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);

  if(context === null){
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }

  return context;
}
