import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import CurriculumVitae from '../../assets/cv_ms.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <header className="fixed top-0 left-0 flex justify-between items-center py-7 px-10 lg:px-40 bg-[#21212150] w-full z-10 header-fixed glassmorphism [.modal-open_&]:z-0">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>M</span>
          <span>ihailo</span>
        </HashLink>
        
        <div className="relative ml-auto mr-2.5">
          <input
            onChange={toggleTheme}
            className="h-0 w-0 invisible outline-none peer"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label 
            htmlFor="switch" 
            className="cursor-pointer indent-[-9999px] w-14 h-7.5 bg-green block rounded-full relative 
            after:content-[''] after:bg-white after:w-5 after:h-5 after:rounded-full after:absolute after:top-1 after:left-1 
            after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
            peer-checked:bg-white peer-checked:border peer-checked:border-zinc-800
            peer-checked:after:left-[calc(100%-5px)] peer-checked:after:-translate-x-full 
            peer-checked:after:border peer-checked:after:border-zinc-800"
          >
            Toggle
          </label>
        </div>

        <nav className={`flex items-center gap-7 relative ${isActive ? 'active' : ''} 
        max-md:overflow-hidden max-md:fixed max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full 
        max-md:h-dvh max-md:bg-green max-md:top-0 max-md:left-0 max-md:transition-opacity max-md:duration-300
        ${isActive ? 'max-md:opacity-100 max-md:visible' : 'max-md:opacity-0 max-md:invisible'}`}
        data-active={isActive ? "true" : "false"}>
          <NavHashLink 
            smooth 
            to="#home" 
            onClick={closeMenu}
            className="text-white p-2.5 font-['Red_Hat_Display',sans-serif] font-medium uppercase transition-all duration-300 hover:brightness-60"
          >
            Home
          </NavHashLink>
          <NavHashLink 
            smooth 
            to="#about" 
            onClick={closeMenu}
            className="text-white p-2.5 font-['Red_Hat_Display',sans-serif] font-medium uppercase transition-all duration-300 hover:brightness-60"
          >
            About me
          </NavHashLink>
          <NavHashLink 
            smooth 
            to="#portfolio" 
            onClick={closeMenu}
            className="text-white p-2.5 font-['Red_Hat_Display',sans-serif] font-medium uppercase transition-all duration-300 hover:brightness-60"
          >
            Portfolio
          </NavHashLink>
          <NavHashLink 
            smooth 
            to="#contact" 
            onClick={closeMenu}
            className="text-white p-2.5 font-['Red_Hat_Display',sans-serif] font-medium uppercase transition-all duration-300 hover:brightness-60"
          >
            Contact
          </NavHashLink>
          <a 
            href={CurriculumVitae} 
            download 
            className="button text-white p-2.5 px-20 font-['Red_Hat_Display',sans-serif] font-medium uppercase transition-all duration-300 hover:brightness-60 max-md:bg-pink"
          >
            CV
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={`hidden max-md:block w-8 h-0.5 bg-white relative cursor-pointer ${
            isActive ? 'bg-transparent' : ''
          } before:content-[''] before:block before:absolute before:w-full before:h-0.5 before:bg-white before:cursor-pointer before:transition-all before:duration-600 before:bottom-2 
          after:content-[''] after:block after:absolute after:w-full after:h-0.5 after:bg-white after:cursor-pointer after:transition-all after:duration-600 after:top-2 ${
            isActive
              ? 'before:bottom-0 before:rotate-45 after:top-0 after:rotate-[135deg]'
              : ''
          }`}
          onClick={() => {
            setActive(!isActive);
          }}
          data-active={isActive ? "true" : "false"}
        ></div>
      </Router>
    </header>
  );
}