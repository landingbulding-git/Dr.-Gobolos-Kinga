import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg text-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-500 hover:bg-gold-400 text-white",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};