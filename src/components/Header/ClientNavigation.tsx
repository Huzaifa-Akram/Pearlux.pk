"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { menuData } from "./menuData";
import Dropdown from "./Dropdown";
import MegaDropdown from "./MegaDropdown";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";

const ClientNavigation = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // Multi-level mobile menu state
  const [mobileMenuLevel, setMobileMenuLevel] = useState(0);
  const [menuHistory, setMenuHistory] = useState<any[]>([]);
  const [currentMenuData, setCurrentMenuData] = useState(menuData);

  const { openCartModal } = useCartModalContext();
  const product = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  // Mobile menu navigation functions
  const openSubMenu = (menuItem: any, title: string) => {
    setMenuHistory([
      ...menuHistory,
      { data: currentMenuData, title: getCurrentMenuTitle() },
    ]);
    if (menuItem.submenu) {
      setCurrentMenuData(menuItem.submenu);
    } else if (menuItem.sections) {
      const flatItems = menuItem.sections.flatMap(
        (section: any) => section.items
      );
      setCurrentMenuData(flatItems);
    }
    setMobileMenuLevel(mobileMenuLevel + 1);
  };

  const goBack = () => {
    if (menuHistory.length > 0) {
      const lastMenu = menuHistory[menuHistory.length - 1];
      setCurrentMenuData(lastMenu.data);
      setMenuHistory(menuHistory.slice(0, -1));
      setMobileMenuLevel(mobileMenuLevel - 1);
    }
  };

  const getCurrentMenuTitle = () => {
    if (mobileMenuLevel === 0) return "Menu";
    return menuHistory[menuHistory.length - 1]?.title || "Submenu";
  };

  const resetMobileMenu = () => {
    setMobileMenuLevel(0);
    setMenuHistory([]);
    setCurrentMenuData(menuData);
    setNavigationOpen(false);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (navigationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navigationOpen]);

  const handleOpenCartModal = () => {
    openCartModal();
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        id="mobile-menu-toggle"
        aria-label="Toggle mobile menu"
        aria-expanded={navigationOpen}
        className="xl:hidden block relative z-[10000]"
        onClick={() => setNavigationOpen(!navigationOpen)}
      >
        <span className="block relative cursor-pointer w-5.5 h-5.5">
          <span className="du-block absolute right-0 w-full h-full">
            <span
              className={`block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                !navigationOpen && "!w-full delay-300"
              }`}
            ></span>
            <span
              className={`block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                !navigationOpen && "!w-full delay-400"
              }`}
            ></span>
            <span
              className={`block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                !navigationOpen && "!w-full delay-500"
              }`}
            ></span>
          </span>

          <span className="block absolute right-0 w-full h-full rotate-45">
            <span
              className={`block bg-dark rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                !navigationOpen && "!h-0 delay-[0] "
              }`}
            ></span>
            <span
              className={`block bg-dark rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                !navigationOpen && "!h-0 dealy-200"
              }`}
            ></span>
          </span>
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300 xl:hidden ${
          navigationOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setNavigationOpen(false)}
        aria-hidden={!navigationOpen}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 bg-white z-[9999] transform transition-transform duration-300 ease-in-out xl:hidden shadow-2xl flex flex-col ${
          navigationOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            {mobileMenuLevel > 0 && (
              <button
                onClick={goBack}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Go back to previous menu level"
              >
                <svg
                  className="w-5 h-5 text-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <h3
              id="mobile-menu-title"
              className="text-base sm:text-lg md:text-xl font-semibold text-dark"
            >
              {mobileMenuLevel === 0 ? "Menu" : getCurrentMenuTitle()}
            </h3>
          </div>
          <button
            onClick={resetMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6 text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Content */}
        <div className="flex-1 overflow-hidden">
          <div
            className="h-full overflow-y-auto overscroll-contain"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <ul className="space-y-2" role="menu">
                {currentMenuData.map((menuItem: any, i: number) => (
                  <li key={i} role="none">
                    <div>
                      {menuItem.submenu || menuItem.sections ? (
                        <button
                          onClick={() => openSubMenu(menuItem, menuItem.title)}
                          className="w-full flex items-center justify-between py-2 sm:py-3 px-3 text-sm sm:text-base md:text-lg font-normal text-dark hover:text-[#d8a635] hover:bg-gray-50 rounded-lg transition-all group"
                          role="menuitem"
                          aria-haspopup="true"
                        >
                          <span>{menuItem.title}</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#d8a635] transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={menuItem.path || "#"}
                          className="block py-2 sm:py-3 px-3 text-sm sm:text-base md:text-lg font-normal text-dark hover:text-[#d8a635] hover:bg-gray-50 rounded-lg transition-all"
                          onClick={resetMobileMenu}
                          role="menuitem"
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Mobile Nav Actions */}
              {mobileMenuLevel === 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <ul className="space-y-2" role="menu">
                    <li role="none">
                      <Link
                        href="/recently-viewed"
                        className="flex items-center gap-3 py-2 sm:py-3 px-3 text-sm sm:text-base md:text-lg font-normal text-dark hover:text-[#d8a635] hover:bg-gray-50 rounded-lg transition-all"
                        onClick={resetMobileMenu}
                        role="menuitem"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Recently Viewed
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href="/wishlist"
                        className="flex items-center gap-3 py-2 sm:py-3 px-3 text-sm sm:text-base md:text-lg font-normal text-dark hover:text-[#d8a635] hover:bg-gray-50 rounded-lg transition-all"
                        onClick={resetMobileMenu}
                        role="menuitem"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        Wishlist
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientNavigation;
