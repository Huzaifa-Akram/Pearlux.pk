"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchComponentProps {
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search products...");
  const router = useRouter();

  // Update placeholder based on screen size
  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 640) { // sm breakpoint
        setPlaceholder("Search embroidery supplies, threads, wires...");
      } else {
        setPlaceholder("Search products...");
      }
    };

    // Set initial placeholder
    updatePlaceholder();

    // Listen for resize events
    window.addEventListener('resize', updatePlaceholder);

    return () => window.removeEventListener('resize', updatePlaceholder);
  }, []);

  const handleSearch = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!searchQuery.trim()) return;

      setIsSearching(true);

      try {
        // Navigate to search results page with query
        const encodedQuery = encodeURIComponent(searchQuery.trim());
        router.push(`/search?q=${encodedQuery}`);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    },
    [searchQuery, router]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  return (
    <div
      className={`max-w-[530px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] w-full ${className}`}
    >
      <form onSubmit={handleSearch} role="search" aria-label="Search products">
        <div className="flex items-center">
          <div className="relative w-full">
            <label htmlFor="client-search" className="sr-only">
              Search for embroidery supplies, threads, wires, and more
            </label>
            <input
              onChange={handleInputChange}
              value={searchQuery}
              type="search"
              name="search"
              id="client-search"
              placeholder={placeholder}
              autoComplete="off"
              className="custom-search w-full rounded-[5px] bg-gray-1 border border-gray-3 py-3 pl-5 pr-12 outline-none ease-in duration-200 text-base focus:border-[#d8a635] focus:ring-1 focus:ring-[#d8a635]"
              aria-describedby="search-description"
              disabled={isSearching}
            />
            <div id="search-description" className="sr-only">
              Search through our collection of premium embroidery supplies
              including threads, wires, beads, and accessories
            </div>

            <button
              type="submit"
              id="client-search-btn"
              aria-label={isSearching ? "Searching..." : "Submit search"}
              disabled={isSearching || !searchQuery.trim()}
              className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 ease-in duration-200 hover:text-[#d8a635] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <svg
                  className="animate-spin h-4 w-4 text-[#d8a635]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z"
                    fill="#d8a635"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
