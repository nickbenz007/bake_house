import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      scale: '-=0.1',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to(logoRef.current, {
      duration: 5,
      repeat: -1,
      ease: 'power2.inOut',
    });

    gsap.to(logoRef.current, {
      boxShadow: '0px 0px 20px rgba(255, 215, 0, 0.9)',
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.7,
          ease: 'power2.out',
        }
      );
    }
  });

  return (
    <nav className="fixed z-50 w-full bg-transparent shadow-2xl xl:px-32 lg:px-6 px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center">
          <img
            ref={logoRef}
            className="w-16 h-16 p-1 rounded-xl object-cover"
            src="/src/assets/logo.png"
            alt="Logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          ref={linksRef}
          className="hidden md:flex lg:gap-8 gap-4 lg:text-xl text-lg text-white font-semibold tracking-wide font-poppins"
        >
          <li>
            <a className="hover:text-[var(--color-gold)]" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--color-gold)]" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--color-gold)]" href="/">
              Contact Us
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--color-gold)]" href="/">
              Services
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 shadow-lg md:hidden transition-all">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg text-white font-semibold">
            <li>
              <a
                className="hover:text-[var(--color-gold)]"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--color-gold)]"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--color-gold)]"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--color-gold)]"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
