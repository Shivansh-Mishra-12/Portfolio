import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
const App = () => {
  return (
    <div className='w-full h-full'>
      <div className='cursor w-[12px] h-[12px] bg-[var(--accent)] rounded-full fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-200 ease-in' id='cursor'></div>
      <div className='cursor-ring w-[36px] h-[36px] border border-[var(--accent)] rounded-full fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-in opacity-60' id='cursorRing'></div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
    </div>
  )
}

export default App
