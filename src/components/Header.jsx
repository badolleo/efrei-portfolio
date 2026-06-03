import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import myself from '../config/myself.json'
import logo_mobile from '../assets/header-yellow-mobile.svg'
import logo_desktop from '../assets/yellow-bg.svg'


export default function Header() {

  let name = myself.Name.toUpperCase() + " " + myself.FirstName;

  const [scrolled, setScrolled] = useState(false);

  const logo = window.innerWidth < 768 ? logo_mobile : logo_desktop;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={`sticky top-0 z-50 w-screen -ml-[calc(50vw-50%)] transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/70" : ""}`}>
      <header className="
          font-header
          font-medium
          text-sm xl:text-[18px]
          flex items-center justify-between
          py-4 xl:py-8
          mx-[1.5rem] xl:mx-[3rem]
      ">
        <div className="flex items-center">
          <Link to="/">{name}</Link>
        </div>
        <div className="flex items-center gap-4 xl:gap-16">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contacts</Link>
        </div>
      </header>
    </div>
    <div className="absolute top-0 right-0 -z-1000 w-screen">
        <img src={logo} alt="tache jaune" className="absolute top-0 right-0 w-[250px] xl:w-[850px]"/>
    </div>
    </>
  )
}