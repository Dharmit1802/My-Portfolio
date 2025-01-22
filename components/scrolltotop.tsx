"use client";

import { useActiveSectionContext } from '@/context/active-section-context';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ScrollToTop() {
  const { setActiveSection, setLastTimeClick } = useActiveSectionContext();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrollTop = document.documentElement.scrollTop;
    setVisible(scrollTop > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []); // Clean up the event listener on unmount

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setLastTimeClick(Date.now());
    setActiveSection('Home');
  }

  return (
    <motion.button
      onClick={handleScrollTop}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 100 }}
      transition={{ duration: 0.3 ,ease: "easeInOut"}}
      className="fixed bottom-3 right-3 w-[3rem] h-[3rem] border border-gray-500 text-black text-lg bg-white rounded-full flex items-center justify-center hover:bg-black/80 hover:text-white/90 hover:scale-[1.25] transition-all"
    >
      <FaArrowUp />
    </motion.button>
  );
}

export default ScrollToTop;

