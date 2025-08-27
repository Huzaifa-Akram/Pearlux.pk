import React from "react";
import Link from "next/link";
import Image from "next/image";
import { menuData } from "./menuData";
import SearchComponent from "./SearchComponent";

// Server-side rendered header for SEO optimization
const ServerHeader = () => {
  return (
    <header className="fixed left-0 top-0 w-full z-9999 bg-white transition-all ease-in-out duration-300">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        {/* Header top start - SEO optimized */}
        <div className="flex flex-col lg:flex-row gap-3 items-end lg:items-center xl:justify-between ease-out duration-200 py-3">
          {/* Header top left */}
          <div className="xl:flex-grow flex-col sm:flex-row w-full flex sm:justify-between lg:justify-start sm:items-center gap-3 sm:gap-6 lg:gap-8">
            {/* Logo - SEO optimized with proper alt text and structured data */}
            <Link
              className="flex-shrink-0 mx-auto sm:mx-0"
              href="/"
              title="Pearlux - Premium Embroidery & Craft Supplies"
              aria-label="Pearlux Homepage"
            >
              <Image
                src="/images/Pearlux.svg"
                alt="Pearlux Logo - Premium Embroidery and Craft Supplies Store"
                width={150}
                height={32}
                className="w-[120px] md:w-[150px] h-auto"
                priority
              />
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

              {/* Client-side navigation toggle */}
              <div id="mobile-menu-placeholder"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - SEO optimized */}
      <div className="border-t border-gray-3">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="flex items-center justify-between">
            {/* Navigation placeholder for client-side rendering */}
            <div id="main-navigation-placeholder" className="w-full"></div>
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
  );
};

export default ServerHeader;
