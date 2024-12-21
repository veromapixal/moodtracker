import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to: string;
  color?: 'pastel-yellow' | 'pastel-blue';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({ 
  to,
  children, 
  color = 'pastel-yellow', 
  size = 'medium',
  onClick 
}: ButtonProps) => {
  const colorClasses = {
    'pastel-yellow': 'bg-[#FFFDC6] hover:bg-[#FFF9A3]',
    'pastel-blue': 'bg-[#E5F6FF] hover:bg-[#CCE9FF]'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-[100px] py-[20px] font-semibold text-4xl'
  };

  return (
    <Link to={to} className="inline-block">
      <button 
      onClick={onClick}
      className={`
        ${colorClasses[color]}
        ${sizeClasses[size]}
        rounded-lg
        transition-colors
        duration-300
        font-medium
        mb-[px]
      `}
    >
      {children}
    </button>
    </Link>
  );
}