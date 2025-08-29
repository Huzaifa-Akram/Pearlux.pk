import React from "react";

const ComingSoon = () => {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-gray-100 to-white mt-40 sm:mt-36 md:mt-32">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-[#d8a635]">Coming Soon</span> -{" "}
            <span className="block sm:inline">Exciting New Collections</span>
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-[#d8a635] mx-auto mb-6 sm:mb-8"></div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Pearlux Premium Embroidery & Craft Supplies
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Your ultimate destination for high-quality beads, pearls, metallic
              threads, and premium embroidery materials for exquisite bridal
              dress making and creative crafting projects.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 border border-gray-200 rounded-md">
                <h4 className="text-sm sm:text-base font-medium text-[#d8a635] mb-1 sm:mb-2">
                  Premium Materials
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Handpicked luxury beads, pearls and embellishments sourced
                  from around the world
                </p>
              </div>
              <div className="p-3 sm:p-4 border border-gray-200 rounded-md">
                <h4 className="text-sm sm:text-base font-medium text-[#d8a635] mb-1 sm:mb-2">
                  Bridal Collections
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Specialized materials for creating stunning wedding and formal
                  attire
                </p>
              </div>
              <div className="p-3 sm:p-4 border border-gray-200 rounded-md sm:col-span-2 md:col-span-1">
                <h4 className="text-sm sm:text-base font-medium text-[#d8a635] mb-1 sm:mb-2">
                  Craft Essentials
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Everything you need for professional embroidery and detailed
                  craftwork
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-gray-800 italic">
              We&apos;re putting the finishing touches on our new collections.
              Join our newsletter to be the first to know when we launch!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <div className="flex items-center">
              <div className="bg-[#d8a635] rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs text-gray-500">
                  LAUNCHING SOON
                </p>
                <p className="text-sm sm:text-base font-medium">
                  September 2025
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#d8a635] rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs text-gray-500">
                  CONTACT US
                </p>
                <p className="text-sm sm:text-base font-medium">
                  info@pearlux.pk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
