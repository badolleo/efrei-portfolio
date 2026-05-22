import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`px-[1.5rem] sticky top-0 z-50 font-header font-medium text-sm flex items-center justify-between py-4 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/70" : ""}`}>
      <div className="flex items-center">
        <Link to="/">BADOL Léo</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/" className="hover:underline">Projects</Link>
        <Link to="/" className="hover:underline">Contacts</Link>
      </div>
    </header>
  )
}