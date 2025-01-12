import React from "react";
import Link from "next/link";
import SidebarDropdown from "@/shared/Layouts/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";
import { NavbarSvg } from "./Svg";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "tw-bg-green tw-text-black" : "tw-text-gray-20"} tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-[20px] tw-px-6 tw-h-10 tw-text-sm  tw-font-medium tw-duration-300 tw-ease-in-out tw-hover:tw-bg-graydark`}
        >      
            <NavbarSvg route={item.route} isItemActive={isItemActive } />
            {item.label}
            {item.children && (
              <svg
                className={`tw-absolute tw-right-4 tw-top-1/2 tw--translate-y-1/2 tw-fill-current ${
                  pageName === item.label.toLowerCase() && "tw-rotate-180"
                }`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                  fill=""
                />
              </svg>
            )}
        </Link>

        {item.children && (
          <div
            className={`tw-translate tw-transform tw-overflow-hidden ${
              pageName !== item.label.toLowerCase() && "tw-hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
