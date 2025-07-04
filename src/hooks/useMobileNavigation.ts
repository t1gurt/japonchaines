'use client';

import { useState, useEffect } from 'react';

export const useMobileNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérification initiale
    checkIsMobile();

    // Écouter les changements de taille de fenêtre
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Fermer le menu quand on passe en mode desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // Prévenir le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return {
    isMobile,
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu
  };
};

export default useMobileNavigation;
