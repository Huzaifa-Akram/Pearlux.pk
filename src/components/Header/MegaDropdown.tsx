import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MegaDropdown = ({ menuItem, stickyMenu }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathUrl = usePathname();

  // We'll use inline styles and classNames instead of dynamically adding a style element

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative before:w-0 before:h-[3px] before:bg-[#d8a635] before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full ${
        pathUrl.includes(menuItem.title) && "before:!w-full"
      }`}
    >
      <a
        href={menuItem.path}
        className={`hover:text-[#d8a635] text-custom-sm font-medium text-dark flex items-center gap-1.5 capitalize ${
          stickyMenu ? "xl:py-4" : "xl:py-6"
        } ${pathUrl.includes(menuItem.title) && "!text-[#d8a635]"}`}
      >
        {menuItem.title}
        <svg
          className="fill-current cursor-pointer"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z"
            fill="#d8a635"
          />
        </svg>
      </a>

      {/* Mega Dropdown Start */}
      <div
        className={`mega-dropdown fixed bg-white rounded-b-md shadow-card hidden ${
          isHovered ? "xl:block" : "xl:hidden"
        }`}
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
          borderTop: "3px solid #d8a635",
          top: stickyMenu ? "140px" : "160px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1170px",
          maxWidth: "calc(100vw - 2rem)",
          zIndex: 999,
        }}
      >
        <div className="px-4 sm:px-7.5 xl:px-0">
          <div className="flex flex-wrap gap-8 p-6">
            {menuItem.sections?.map((section, idx) => (
              <div key={idx} className="flex-1 min-w-[200px]">
                <h3 className="mb-3 text-xs font-semibold text-dark uppercase tracking-wider border-b border-gray-200 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.path || "#"}
                        className="text-gray-600 hover:text-[#d8a635] text-xs block py-1 transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MegaDropdown;
