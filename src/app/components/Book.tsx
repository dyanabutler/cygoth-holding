"use client"
import React, { useState, SVGProps } from 'react';
const pages = [
    { title: "About Me", content: "Hello, my name is Jane Doe, and I'm a passionate artist and nature lover..." },
    { title: "Interests & Achievements", content: "My passion for art and nature has led me to explore various mediums..." },
    { title: "Projects", content: "I have worked on various projects, including..." },
    { title: "Future Plans", content: "Looking forward, I plan to..." },
    // Add more pages as needed
  ];
  
  export default function Component() {
    const [currentPage, setCurrentPage] = useState(0);
  
    const nextPage = () => {
      setCurrentPage((prev) => (prev + 1) % pages.length); // Cycle through pages
    };
  
    const previousPage = () => {
      setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length); // Cycle backwards through pages
    };
  
    return (
      <div className="relative h-screen w-full overflow-hidden bg-[#e7dfc5] p-4 sm:p-8">
        <div className="absolute inset-0 m-auto max-h-[90vh] max-w-[90vw] h-[600px] w-[800px] transform transition-transform duration-1000 preserve-3d sm:max-h-[600px] sm:max-w-[800px]">
          <div className={`absolute inset-0  transition-transform duration-1000 transform ${currentPage % 2 === 0 ? 'rotate-y-0' : 'rotate-y-180'}`}>
            <div className="p-4 text-[16px] sm:text-[22px] font-handwriting font-king text-[#382314]">
              <h2 className="mb-4 text-center  text-2xl sm:text-4xl font-bold">{pages[currentPage].title}</h2>
              <p className="font-jacq">{pages[currentPage].content}</p>
            </div>
          </div>
        </div>
        <button className="absolute top-1/2 left-3 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 rounded-full bg-[#382314] text-white transition-transform duration-1000 hover:scale-110"
                onClick={previousPage}>
          <ArrowLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button className="absolute top-1/2 right-3 sm:right-8 h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 rounded-full bg-[#382314] text-white transition-transform duration-1000 hover:scale-110"
                onClick={nextPage}>
          <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    );
  }

interface IconProps extends SVGProps<SVGSVGElement> {}

function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
