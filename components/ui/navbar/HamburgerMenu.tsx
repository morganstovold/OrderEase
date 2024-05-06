import React from 'react';

const HamburgerButton = () => {
  return (
    <div className="inset-y-0 mr-2 inline-flex items-center justify-center rounded-md bg-background p-2 px-4 focus:outline-none focus:ring-2 focus:ring-inset lg:hidden">
      <span className="sr-only">Open main menu</span>

      <svg
        className="block size-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        className="hidden size-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export { HamburgerButton };
