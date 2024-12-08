import React from "react";

const ShoppingBagIcon: React.FC = () => {
  return (
    <button aria-label="Shopping Bag" className="p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[#111"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2l1.5 3h9L18 2" />
        <path d="M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <line x1="9" y1="10" x2="9" y2="14" />
        <line x1="15" y1="10" x2="15" y2="14" />
      </svg>
    </button>
  );
};

export default ShoppingBagIcon;
