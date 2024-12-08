import React from "react";
 const WishlistIcon: React.FC = () => {
  return (
    <button aria-label="Add to Wishlist" className="p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[#111]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l9.84-9.84a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  );
};

export default WishlistIcon;


