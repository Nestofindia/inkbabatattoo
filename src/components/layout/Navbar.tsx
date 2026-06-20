'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../../config/links';
import LazyImage from '../shared/LazyImage';

const LOGO_DARK =
  'https://ik.imagekit.io/wt9brvtz5/logos/Png%20black%20orange';
const LOGO_LIGHT =
  'https://ik.imagekit.io/wt9brvtz5/logos/Logo%20png%20orange%20white';

const NAV_LINK =
  'inline-flex items-center gap-1.5 py-2 text-base xl:text-lg font-semibold font-heading font-condensed-semibold tracking-wide transition-colors duration-300 whitespace-nowrap';

const Navbar: React.FC = () => {
  const pathname = usePathname() ?? '/';
  const isHomePage = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  // const [workDropdownOpenService, setWorkDropdownOpenService] = useState(false);

  const useDarkNav = !isHomePage || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
    setWorkDropdownOpen(false);
    // setWorkDropdownOpenService(false);
  }, [pathname]);

  const closeMenu = () => {
    setIsOpen(false);
    setWorkDropdownOpen(false);
    // setWorkDropdownOpenService(false);
  };

  const linkColor = useDarkNav
    ? 'text-traditional-700 hover:text-accent-600'
    : 'text-white hover:text-accent-200';

  const linkActive = useDarkNav ? 'text-accent-600' : 'text-white';

  const underline =
    "after:absolute after:bottom-0 after:left-0 after:h-[3.5px] after:w-full after:rounded-full after:bg-accent-500 after:transition-transform after:duration-300 after:origin-right relative";

  const navLinkClasses = (isActive: boolean): string =>
    `${NAV_LINK} ${underline} ${linkColor} ${
      isActive
        ? `${linkActive} after:scale-x-100 after:origin-left`
        : 'after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left'
    }`;

  const dropdownBtnClass = (open: boolean) =>
    `${NAV_LINK} ${underline} ${linkColor} ${
      open
        ? `${linkActive} after:scale-x-100 after:origin-left`
        : 'after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left'
    }`;

  const navLinkClassesMobile = (isActive: boolean): string =>
    `${NAV_LINK} w-full ${isActive ? 'text-accent-600' : 'text-traditional-700 hover:text-accent-600'}`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-traditional py-3 max-[469px]:py-2 border-b border-warm-200'
          : 'bg-transparent py-5 max-[469px]:py-2.5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="hover:opacity-90 transition-opacity shrink-0"
          onClick={closeMenu}
        >
          <LazyImage
            eager
            src={useDarkNav ? LOGO_DARK : LOGO_LIGHT}
            alt="Ink Baba Tattoo House Logo"
            className="h-12 max-[469px]:h-10 lg:h-14 xl:h-16 w-auto object-contain -ml-2"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink min-w-0" aria-label="Main">
          <Link href="/" className={navLinkClasses(pathname === '/')}>
            Home
          </Link>

          <Link href="/about" className={navLinkClasses(pathname === '/about')}>
            Our Story
          </Link>

          <Link href="/testimonials" className={navLinkClasses(pathname === '/testimonials')}>
            Review
          </Link>

          <div className="relative">
            <button
              type="button"
              className={dropdownBtnClass(workDropdownOpen)}
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
              aria-expanded={workDropdownOpen}
            >
              Gallery
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${
                  workDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-warm-200 py-1 transition-all duration-200 ${
                workDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1'
              }`}
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <Link
                href="/gallery"
                className="block px-4 py-2.5 text-traditional-700 hover:bg-accent-50 hover:text-accent-600 font-semibold font-heading font-condensed-semibold transition-colors"
                onClick={() => setWorkDropdownOpen(false)}
              >
                Tattoo
              </Link>
              <Link
                href="/piercing-services"
                className="block px-4 py-2.5 text-traditional-700 hover:bg-accent-50 hover:text-accent-600 font-semibold font-heading font-condensed-semibold transition-colors"
                onClick={() => setWorkDropdownOpen(false)}
              >
                Piercing
              </Link>
            </div>
          </div>

          {/* Services — hidden for now
          <div className="relative">
            <button
              type="button"
              className={dropdownBtnClass(workDropdownOpenService)}
              onMouseEnter={() => setWorkDropdownOpenService(true)}
              onMouseLeave={() => setWorkDropdownOpenService(false)}
              aria-expanded={workDropdownOpenService}
            >
              Services
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${
                  workDropdownOpenService ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-warm-200 py-1 transition-all duration-200 ${
                workDropdownOpenService
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1'
              }`}
              onMouseEnter={() => setWorkDropdownOpenService(true)}
              onMouseLeave={() => setWorkDropdownOpenService(false)}
            >
              <Link
                href="/tattoo-services"
                className="block px-4 py-2.5 text-traditional-700 hover:bg-accent-50 hover:text-accent-600 font-semibold font-heading font-condensed-semibold transition-colors border-b border-warm-100"
                onClick={() => setWorkDropdownOpenService(false)}
              >
                Tattoo Services
              </Link>
              <Link
                href="/piercing-services"
                className="block px-4 py-2.5 text-traditional-700 hover:bg-accent-50 hover:text-accent-600 font-semibold font-heading font-condensed-semibold transition-colors"
                onClick={() => setWorkDropdownOpenService(false)}
              >
                Piercing Services
              </Link>
            </div>
          </div>
          */}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book-now ml-1 text-sm xl:text-base py-2 px-5 xl:py-3 xl:px-8 shrink-0"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          className={`lg:hidden p-2 transition-colors ${
            useDarkNav ? 'text-traditional-700' : 'text-white'
          }`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-warm-200 shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-5 flex flex-col gap-4" aria-label="Mobile">
          <Link href="/" className={navLinkClassesMobile(pathname === '/')} onClick={closeMenu}>
            Home
          </Link>

          <Link href="/about" className={navLinkClassesMobile(pathname === '/about')} onClick={closeMenu}>
            Our Story
          </Link>

          <Link href="/testimonials" className={navLinkClassesMobile(pathname === '/testimonials')} onClick={closeMenu}>
            Review
          </Link>

          <div>
            <button
              type="button"
              className={`${NAV_LINK} w-full justify-between text-traditional-700 hover:text-accent-600`}
              onClick={() => setWorkDropdownOpen((v) => !v)}
            >
              Gallery
              <ChevronDown
                size={18}
                className={workDropdownOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
              />
            </button>
            {workDropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-accent-300 pl-4">
                <Link
                  href="/gallery"
                  className="text-traditional-600 hover:text-accent-600 font-semibold font-heading font-condensed-semibold"
                  onClick={closeMenu}
                >
                  Tattoo
                </Link>
                <Link
                  href="/piercing-services"
                  className="text-traditional-600 hover:text-accent-600 font-semibold font-heading font-condensed-semibold"
                  onClick={closeMenu}
                >
                  Piercing
                </Link>
              </div>
            )}
          </div>

          {/* Services — hidden for now
          <div>
            <button
              type="button"
              className={`${NAV_LINK} w-full justify-between text-traditional-700 hover:text-accent-600`}
              onClick={() => setWorkDropdownOpenService((v) => !v)}
            >
              Services
              <ChevronDown
                size={18}
                className={
                  workDropdownOpenService ? 'rotate-180 transition-transform' : 'transition-transform'
                }
              />
            </button>
            {workDropdownOpenService && (
              <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-accent-300 pl-4">
                <Link
                  href="/tattoo-services"
                  className="text-traditional-600 hover:text-accent-600 font-semibold font-heading font-condensed-semibold"
                  onClick={closeMenu}
                >
                  Tattoo Services
                </Link>
                <Link
                  href="/piercing-services"
                  className="text-traditional-600 hover:text-accent-600 font-semibold font-heading font-condensed-semibold"
                  onClick={closeMenu}
                >
                  Piercing Services
                </Link>
              </div>
            )}
          </div>
          */}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book-now w-full text-center mt-1"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
