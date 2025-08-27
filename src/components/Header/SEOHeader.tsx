import React from "react";
import ServerHeader from "./ServerHeader";
import ClientNavigation from "./ClientNavigation";

// SEO-Optimized Header Component
// Server-side rendered for SEO with client-side hydration for interactivity
const SEOHeader = () => {
  return (
    <>
      {/* Server-rendered header for SEO */}
      <ServerHeader />

      {/* Client-side interactive components overlay */}
      <div className="fixed left-0 top-0 w-full z-[10000] pointer-events-none">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-3 items-end lg:items-center xl:justify-between ease-out duration-200 py-3">
            <div className="xl:flex-grow flex-col sm:flex-row w-full flex sm:justify-between lg:justify-start sm:items-center gap-3 sm:gap-6 lg:gap-8">
              {/* Spacer for logo */}
              <div className="flex-shrink-0 mx-auto sm:mx-0 w-[120px] md:w-[150px] h-8"></div>
              {/* Spacer for search */}
              <div className="max-w-[530px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] w-full h-12"></div>
            </div>

            {/* Interactive elements */}
            <div className="flex w-full lg:w-auto items-center gap-7.5 flex-shrink-0 pointer-events-auto">
              <div className="hidden xl:flex items-center gap-3.5">
                {/* Spacer for phone */}
                <div className="w-24 h-6"></div>
              </div>
              <span
                className="hidden xl:block w-px h-7.5 bg-gray-4"
                aria-hidden="true"
              ></span>
              <div className="flex w-full lg:w-auto justify-end items-center gap-5">
                <ClientNavigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOHeader;
