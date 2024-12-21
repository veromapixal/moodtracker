import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavButtonProps {
  to: string;
  children: ReactNode;
}

export const NavButton = ({ to, children }: NavButtonProps) => (
  <Link 
    to={to} 
    className="bg-transparent hover:bg-[#FFFDC6] h-[80px] px-20 flex items-center transition-colors duration-300 rounded"
  >
    {children}
  </Link>
);