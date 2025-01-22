"use client";

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'


type Theme = "light" | "dark";

function ThemeSwitch() {

  const [theme, setTheme] = useState<Theme>("light");

  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem('theme', 'dark');
      window.dispatchEvent(new Event('storage'))
      document.documentElement.classList.add('dark');
    }
    if (theme === "dark") {
      setTheme("light")

      window.localStorage.setItem('theme', 'light');
      window.dispatchEvent(new Event('storage'))
      document.documentElement.classList.remove('dark');
    }
  }

  useEffect(() => {
    const localtheme = window.localStorage.getItem('theme') as Theme | null;
    if (localtheme) {
      setTheme(localtheme);
      if (localtheme === "dark") {
        document.documentElement.classList.add('dark');
      }
    }
    else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <button onClick={ToggleTheme} className='fixed bottom-[4.5rem] md:bottom-[initial] md:top-[1.6rem] right-3 bg-white rounded-full w-[3rem] h-[3rem] border border-gray-500 text-black dark:text-white hover:scale-[1.15] flex items-center justify-center active:scale-105 transition-all shadow-2xl backdrop-blur-[0.5rem] dark:bg-gray-900'>
      {
        theme === "light" ? (<BsSun />) : (<BsMoon />)
      }
    </button>
  )
}

export default ThemeSwitch;