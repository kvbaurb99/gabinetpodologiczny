"use client";
import React from 'react';
import styled from "styled-components";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Home, Clipboard, Info, Mail, Heart, Users, Star, ScrollText, Footprints } from 'lucide-react';

interface NavLink {
  title: string;
  slug: string;
}

interface MobileMenuProps {
  $isOpen: boolean;
  $scrolled: boolean;
  navbarLinks: NavLink[];
  onClose: () => void;
  currentPath: string;
}

// Colors matching your existing theme
const COLORS = {
  primary: '#007BA7', // Matches your logo color
  secondary: '#F5F7FA',
  accent: '#4f67bd', // From your hover color
  text: '#2c3e50', // Matches your text color
  lightText: '#718096',
};

// Menu container with styling matched to your navbar
const MenuContainer = styled(motion.div)<{ $scrolled: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0 1.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 123, 167, 0.1);
`;

const MenuList = styled.ul`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
`;

const MenuItem = styled(motion.li)<{ $isActive: boolean }>`
  border-radius: 8px;
  background: ${props => props.$isActive ? COLORS.primary + '10' : 'transparent'};
  transition: all 0.3s ease;
  
  a {
    display: flex;
    align-items: center;
    padding: 0.85rem 1rem;
    font-weight: ${props => props.$isActive ? '600' : '500'};
    font-size: 1.05rem;
    color: ${props => props.$isActive ? COLORS.primary : COLORS.text};
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 1rem;
      right: 1rem;
      bottom: 0;
      height: 1px;
      background: linear-gradient(to right, transparent, ${COLORS.lightText}20, transparent);
      opacity: ${props => props.$isActive ? 0 : 0.3};
    }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: ${COLORS.primary};
`;

// Info section at the bottom of the menu
const MenuFooter = styled.div`
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: rgba(0, 123, 167, 0.05);
  border-radius: 8px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${COLORS.primary};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.85rem;
  font-weight: 600;
  margin-top: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background: ${COLORS.accent};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { 
    height: 0,
    opacity: 0 
  },
  visible: { 
    height: 'auto',
    opacity: 1,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.05
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { 
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { 
    y: -10, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    y: -10, 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

// Function to get icon based on menu item slug
const getIconForSlug = (slug: string) => {
  switch(slug) {
    case '':
      return <Home size={18} />;
    case '#about':
      return <ScrollText size={18} />;
    case '#offer':
      return <Footprints size={18} />;
    case 'o-nas':
      return <Info size={18} />;
    case '#team':
      return <Users size={18} />;
      case '#reviews':
        return <Star size={18} />;
    default:
      return <Heart size={18} />;
  }
};

export const EnhancedMobileMenu: React.FC<MobileMenuProps> = ({ 
  $isOpen, 
  $scrolled, 
  navbarLinks, 
  onClose,
  currentPath 
}) => {
  // Function to check if a menu item is active
  const isActive = (slug: string) => {
    return currentPath === slug;
  };

  return (
    <AnimatePresence>
      {$isOpen && (
        <MenuContainer
          $scrolled={$scrolled}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <MenuList>
            {navbarLinks.map((link, index) => (
              <MenuItem 
                key={index} 
                variants={itemVariants}
                $isActive={isActive(link.slug)}
                onClick={onClose}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={`/${link.slug}`}>
                  <IconWrapper>
                    {getIconForSlug(link.slug)}
                  </IconWrapper>
                  {link.title}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
          
          <motion.div variants={itemVariants}>
            <MenuFooter>
              <h4 style={{ color: COLORS.primary, fontWeight: 600, marginBottom: '0.5rem' }}>
                Potrzebujesz konsultacji?
              </h4>
              <p style={{ fontSize: '0.9rem', color: COLORS.text, opacity: 0.8 }}>
                Zadzwoń i umów wizytę w gabinecie podologicznym
              </p>
              <ContactButton 
                href="tel:+48123456789"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} /> 
                Umów wizytę
              </ContactButton>
            </MenuFooter>
          </motion.div>
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};