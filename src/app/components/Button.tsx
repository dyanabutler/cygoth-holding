"use client"
import React from 'react';

// Define a type for the props expected by the Button component
type ButtonProps = {
  link: string;  // Define link as a required string
  label?: string;  // Optional string with a default value set later
  actionLabel?: string;  // Optional string with a default value set later
};

const Button: React.FC<ButtonProps> = ({ 
  link, 
  label = "Become an Og in Discord",  // Set default values here
  actionLabel = "" 
}) => {
  return (
    <div className="grid p-4 gap-8 items-start justify-center">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <a href={link} className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="font-king text-indigo-400 group-hover:text-gray-100 transition duration-200">{actionLabel}</span>
        
        </a>
        <text> --- 100/100 Seats Available </text>
      </div>
    </div>
  );
}

export default Button;
