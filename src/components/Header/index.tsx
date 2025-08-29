"use client"; /// main
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuData } from "./menuData";
import Dropdown from "./Dropdown";
import MegaDropdown from "./MegaDropdown";
import SearchComponent from "./SearchComponent";

// Main Header Export - SEO Optimized with working dropdowns
const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // Multi-level mobile menu state
  const [mobileMenuLevel, setMobileMenuLevel] = useState(0);
  const [menuHistory, setMenuHistory] = useState<any[]>([]);
  const [currentMenuData, setCurrentMenuData] = useState(menuData);

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
      <header
        className={`fixed left-0 top-0 w-full z-9999 bg-white transition-all ease-in-out duration-300 ${
          stickyMenu && "shadow"
        } border-b border-black`}
      >
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          {/* Header top start - SEO optimized */}
          <div
            className={`flex flex-col lg:flex-row gap-3 items-end lg:items-center xl:justify-between ease-out duration-200 ${
              stickyMenu ? "py-2" : "py-3"
            }`}
          >
            {/* Header top left */}
            <div className="xl:flex-grow flex-col sm:flex-row w-full flex sm:justify-between lg:justify-start sm:items-center gap-3 sm:gap-6 lg:gap-8">
              {/* Logo - SEO optimized with proper alt text and structured data */}
              <Link
                className="flex-shrink-0 mx-auto sm:mx-0"
                href="/"
                title="Pearlux - Premium Embroidery & Craft Supplies"
                aria-label="Pearlux Homepage"
              >
                <div className="animated-logo-background">
                  <Image
                    src="/images/Pearlux.svg"
                    alt="Pearlux Logo - Premium Embroidery and Craft Supplies Store"
                    width={150}
                    height={32}
                    className="w-[110px] md:w-[140px] h-auto"
                    priority
                  />
                </div>
              </Link>

              {/* Search form - SEO optimized with client-side functionality */}
              <SearchComponent />
            </div>

            {/* Header top right - Contact info for SEO */}
            <div className="flex w-full lg:w-auto items-center gap-7.5 flex-shrink-0">
              {/* Phone support - SEO optimized with structured data */}
              <div className="hidden xl:flex items-center gap-3.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215ZM7.7609 4.34262C7.24855 3.61797 6.32812 3.57473 5.80528 4.12518L4.23568 5.77767C3.90429 6.12656 3.73042 6.52646 3.75185 6.92576C3.83289 8.43558 4.48307 11.8779 8.35919 15.9587C12.4234 20.2375 16.1676 20.3584 17.6026 20.2167C17.8864 20.1887 18.1783 20.0313 18.4574 19.7375L19.8779 18.2419C20.4907 17.5968 20.3301 16.4345 19.5092 15.962L17.5987 14.8624C17.086 14.5673 16.4854 14.6584 16.1 15.0642L15.6445 15.5437L15.1174 15.043C15.6445 15.5438 15.6438 15.5445 15.6432 15.5452L15.6417 15.5467L15.6388 15.5498L15.6324 15.5562L15.6181 15.5704C15.6078 15.5803 15.5959 15.5913 15.5825 15.6031C15.5556 15.6266 15.5223 15.6535 15.4824 15.6819C15.4022 15.7387 15.2955 15.8012 15.1606 15.8544C14.8846 15.9633 14.5201 16.0216 14.0699 15.9485C13.1923 15.806 12.0422 15.1757 10.5194 13.5724C8.99202 11.9644 8.40746 10.7647 8.27675 9.87259C8.21022 9.41852 8.26346 9.05492 8.36116 8.78035C8.40921 8.64533 8.46594 8.53766 8.51826 8.4559C8.54435 8.41514 8.56922 8.381 8.5912 8.35322C8.60219 8.33933 8.61246 8.32703 8.62182 8.31627L8.63514 8.30129L8.64125 8.29465L8.64415 8.29154L8.64556 8.29004C8.64625 8.28931 8.64694 8.28859 9.17861 8.79357L8.64695 8.28858L8.93376 7.98662C9.3793 7.51755 9.44403 6.72317 9.02189 6.1261L7.7609 4.34262Z"
                    fill="#d8a635"
                  />
                </svg>

                <div itemScope itemType="https://schema.org/ContactPoint">
                  <span className="block text-2xs text-dark-4 uppercase">
                    24/7 SUPPORT
                  </span>
                  <p
                    className="font-medium text-custom-sm text-dark"
                    itemProp="telephone"
                  >
                    <a
                      href="tel:+923126295899"
                      className="hover:text-[#d8a635] transition-colors"
                      aria-label="Call Pearlux customer support"
                    >
                      +92 312 6295899
                    </a>
                  </p>
                  <meta itemProp="contactType" content="customer service" />
                  <meta itemProp="areaServed" content="Pakistan" />
                  <meta itemProp="availableLanguage" content="English,Urdu" />
                </div>
              </div>

              {/* Divider */}
              <span
                className="hidden xl:block w-px h-7.5 bg-gray-4"
                aria-hidden="true"
              ></span>

              <div className="flex w-full lg:w-auto justify-between items-center gap-5">
                <div className="flex items-center gap-5">
                  {/* WhatsApp contact - SEO optimized */}
                  <a
                    href="https://wa.me/923126295899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-[#d8a635] transition-colors"
                    aria-label="Contact Pearlux via WhatsApp for quick support"
                    title="WhatsApp Chat with Pearlux"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.4054 3.5823C18.1607 1.34053 15.1751 0.103607 11.9905 0.103607C5.40939 0.103607 0.0517206 5.45357 0.0517206 12.0234C0.0517206 14.1457 0.645099 16.2123 1.76405 18.0186L0 24.0416L6.17876 22.3146C7.93172 23.3266 9.93907 23.859 11.9793 23.859H11.9905C18.5604 23.859 24 18.509 24 11.9391C24 8.77136 22.65 5.82407 20.4054 3.5823ZM11.9905 21.8603C10.1954 21.8603 8.43462 21.3503 6.90942 20.4014L6.54895 20.1935L2.83362 21.2448L3.90706 17.6406L3.67729 17.2689C2.63347 15.6842 2.07295 13.8835 2.07295 12.0347C2.07295 6.56445 6.51034 2.12705 12.0018 2.12705C14.6238 2.12705 17.0749 3.16308 18.9489 5.03144C20.8172 6.9025 21.9857 9.3536 21.979 11.9752C21.9789 17.4566 17.4706 21.8603 11.9905 21.8603ZM17.4371 14.4946C17.1515 14.3563 15.6826 13.6417 15.42 13.5507C15.1574 13.4542 14.9652 13.4096 14.7674 13.6951C14.5752 13.9863 14.0091 14.643 13.8336 14.8408C13.6637 15.0331 13.4937 15.0499 13.208 14.9116C12.9224 14.7789 11.9569 14.4946 10.8163 13.4822C9.9201 12.6939 9.3259 11.7283 9.15599 11.437C8.98608 11.1513 9.13709 10.9927 9.28253 10.8529C9.41128 10.7244 9.56786 10.5153 9.71025 10.3454C9.85825 10.1754 9.89725 10.0538 9.99675 9.85601C10.0962 9.66259 10.0516 9.48712 9.97989 9.34468C9.90263 9.20224 9.31407 7.73342 9.07875 7.16732C8.84344 6.61232 8.60812 6.68401 8.43822 6.67844C8.26831 6.67287 8.07488 6.67287 7.88146 6.67287C7.68804 6.67287 7.36542 6.75014 7.10282 7.03597C6.84023 7.32179 6.07677 8.03642 6.07677 9.50524C6.07677 10.9741 7.12612 12.3927 7.26856 12.5805C7.41099 12.7683 9.30851 15.7156 12.2474 16.9895C13.0413 17.3289 13.6577 17.5307 14.1343 17.68C14.9 17.9264 15.5978 17.89 16.1528 17.8184C16.7694 17.7356 17.9648 17.1039 18.2058 16.4294C18.4411 15.7549 18.4411 15.1888 18.3639 15.0555C18.2866 14.9221 18.1044 14.8505 17.8188 14.7121L17.4371 14.4946Z"
                        fill="#d8a635"
                      />
                    </svg>

                    <div>
                      <span className="block text-2xs text-dark-4 uppercase">
                        CONTACT
                      </span>
                      <p className="font-medium text-custom-sm text-dark">
                        WhatsApp
                      </p>
                    </div>
                  </a>
                </div>

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
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar - Now working with dropdowns */}
        <div className="border-t border-gray-3">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
            <div className="flex items-center justify-between">
              {/* Desktop Navigation with working dropdowns */}
              <nav
                className="hidden xl:flex items-center justify-between w-auto"
                role="navigation"
                aria-label="Main navigation"
              >
                <ul className="flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-6 relative">
                  {menuData.map((menuItem, i) =>
                    menuItem.megaMenu ? (
                      <MegaDropdown
                        key={i}
                        menuItem={menuItem}
                        stickyMenu={stickyMenu}
                      />
                    ) : menuItem.submenu ? (
                      <Dropdown
                        key={i}
                        menuItem={menuItem}
                        stickyMenu={stickyMenu}
                      />
                    ) : (
                      <li
                        key={i}
                        className="group relative before:w-0 before:h-[3px] before:bg-[#d8a635] before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full"
                      >
                        <Link
                          href={menuItem.path}
                          className={`hover:text-[#d8a635] text-custom-sm font-medium text-dark flex transition-colors ${
                            stickyMenu ? "xl:py-4" : "xl:py-6"
                          }`}
                          title={`Shop ${menuItem.title} - Pearlux`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              {/* Desktop Right Navigation - SEO optimized */}
              <div className="hidden xl:block">
                <ul className="flex items-center gap-5.5">
                  <li className="py-4">
                    <Link
                      href="/recently-viewed"
                      className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#d8a635] transition-colors"
                      title="View Recently Viewed Products"
                      aria-label="Recently viewed products"
                    >
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.45313 7.55556H1.70313V7.55556L2.45313 7.55556ZM2.45313 8.66667L1.92488 9.19908C2.21729 9.4892 2.68896 9.4892 2.98137 9.19908L2.45313 8.66667ZM4.10124 8.08797C4.39528 7.79623 4.39715 7.32135 4.10541 7.02731C3.81367 6.73327 3.3388 6.73141 3.04476 7.02315L4.10124 8.08797ZM1.86149 7.02315C1.56745 6.73141 1.09258 6.73327 0.800843 7.02731C0.509102 7.32135 0.510968 7.79623 0.805009 8.08797L1.86149 7.02315ZM12.1973 5.05946C12.4143 5.41232 12.8762 5.52252 13.229 5.30558C13.5819 5.08865 13.6921 4.62674 13.4752 4.27388L12.1973 5.05946ZM8.0525 1.25C4.5514 1.25 1.70313 4.06755 1.70313 7.55556H3.20313C3.20313 4.90706 5.3687 2.75 8.0525 2.75V1.25ZM1.70313 7.55556L1.70313 8.66667L3.20313 8.66667L3.20313 7.55556L1.70313 7.55556ZM2.98137 9.19908L4.10124 8.08797L3.04476 7.02315L1.92488 8.13426L2.98137 9.19908ZM2.98137 8.13426L1.86149 7.02315L0.805009 8.08797L1.92488 9.19908L2.98137 8.13426ZM13.4752 4.27388C12.3603 2.46049 10.3479 1.25 8.0525 1.25V2.75C9.80904 2.75 11.346 3.67466 12.1973 5.05946L13.4752 4.27388Z"
                          fill=""
                        />
                        <path
                          d="M13.5427 7.33337L14.0699 6.79996C13.7777 6.51118 13.3076 6.51118 13.0155 6.79996L13.5427 7.33337ZM11.8913 7.91107C11.5967 8.20225 11.5939 8.67711 11.8851 8.97171C12.1763 9.26631 12.6512 9.26908 12.9458 8.9779L11.8913 7.91107ZM14.1396 8.9779C14.4342 9.26908 14.9091 9.26631 15.2003 8.97171C15.4914 8.67711 15.4887 8.20225 15.1941 7.91107L14.1396 8.9779ZM3.75812 10.9395C3.54059 10.587 3.07849 10.4776 2.72599 10.6951C2.3735 10.9127 2.26409 11.3748 2.48163 11.7273L3.75812 10.9395ZM7.9219 14.75C11.4321 14.75 14.2927 11.9352 14.2927 8.44449H12.7927C12.7927 11.0903 10.6202 13.25 7.9219 13.25V14.75ZM14.2927 8.44449V7.33337H12.7927V8.44449H12.7927ZM13.0155 6.79996L11.8913 7.91107L12.9458 8.9779L14.0699 7.86679L13.0155 6.79996ZM13.0155 7.86679L14.1396 8.9779L15.1941 7.91107L14.0699 6.79996L13.0155 7.86679ZM2.48163 11.7273C3.60082 13.5408 5.62007 14.75 7.9219 14.75V13.25C6.15627 13.25 4.61261 12.3241 3.75812 10.9395L2.48163 11.7273Z"
                          fill="#d8a635"
                        />
                      </svg>
                      Recently Viewed
                    </Link>
                  </li>

                  <li className="py-4">
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#d8a635] transition-colors"
                      title="View Your Wishlist"
                      aria-label="Wishlist"
                    >
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M5.97441 12.6073L6.43872 12.0183L5.97441 12.6073ZM7.99992 3.66709L7.45955 4.18719C7.60094 4.33408 7.79604 4.41709 7.99992 4.41709C8.2038 4.41709 8.3989 4.33408 8.54028 4.18719L7.99992 3.66709ZM10.0254 12.6073L10.4897 13.1962L10.0254 12.6073ZM6.43872 12.0183C5.41345 11.21 4.33627 10.4524 3.47904 9.48717C2.64752 8.55085 2.08325 7.47831 2.08325 6.0914H0.583252C0.583252 7.94644 1.3588 9.35867 2.35747 10.4832C3.33043 11.5788 4.57383 12.4582 5.51009 13.1962L6.43872 12.0183ZM2.08325 6.0914C2.08325 4.75102 2.84027 3.63995 3.85342 3.17683C4.81929 2.73533 6.15155 2.82823 7.45955 4.18719L8.54028 3.14699C6.84839 1.38917 4.84732 1.07324 3.22983 1.8126C1.65962 2.53035 0.583252 4.18982 0.583252 6.0914H2.08325ZM5.51009 13.1962C5.84928 13.4636 6.22932 13.7618 6.61834 13.9891C7.00711 14.2163 7.47619 14.4167 7.99992 14.4167V12.9167C7.85698 12.9167 7.65939 12.8601 7.37512 12.694C7.0911 12.5281 6.79171 12.2965 6.43872 12.0183L5.51009 13.1962ZM10.4897 13.1962C11.426 12.4582 12.6694 11.5788 13.6424 10.4832C14.641 9.35867 15.4166 7.94644 15.4166 6.0914H13.9166C13.9166 7.47831 13.3523 8.55085 12.5208 9.48717C11.6636 10.4524 10.5864 11.21 9.56112 12.0183L10.4897 13.1962ZM15.4166 6.0914C15.4166 4.18982 14.3402 2.53035 12.77 1.8126C11.1525 1.07324 9.15145 1.38917 7.45955 3.14699L8.54028 4.18719C9.84828 2.82823 11.1805 2.73533 12.1464 3.17683C13.1596 3.63995 13.9166 4.75102 13.9166 6.0914H15.4166ZM9.56112 12.0183C9.20813 12.2965 8.90874 12.5281 8.62471 12.694C8.34044 12.8601 8.14285 12.9167 7.99992 12.9167V14.4167C8.52365 14.4167 8.99273 14.2163 9.3815 13.9891C9.77052 13.7618 10.1506 13.4636 10.4897 13.1962L9.56112 12.0183Z"
                          fill=""
                        />
                      </svg>
                      Wishlist
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SEO: Hidden structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pearlux",
              url: "https://pearlux.pk",
              logo: "https://pearlux.pk/images/Pearlux.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-312-6295899",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: ["English", "Urdu"],
              },
              sameAs: ["https://wa.me/923126295899"],
            }),
          }}
        />
      </header>

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

export default Header;
