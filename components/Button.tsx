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
    const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none";

    const variants = {
        primary: "bg-[#e38e26] text-white hover:bg-[#c77a1e] hover:shadow-lg disabled:hover:bg-[#e38e26]", // Updated Orange
        secondary: "bg-[#107b9d] text-white hover:bg-[#0d627d] hover:shadow-lg disabled:hover:bg-[#107b9d]", // Updated Teal
        outline: "border-2 border-[#107b9d] text-[#107b9d] hover:bg-[#107b9d] hover:text-white disabled:hover:bg-transparent disabled:hover:text-[#107b9d]"
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
