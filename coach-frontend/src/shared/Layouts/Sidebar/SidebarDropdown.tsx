import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="tw-mb-5.5 tw-mt-4 tw-flex tw-flex-col tw-gap-2.5 tw-pl-6">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-md tw-px-4 tw-font-medium tw-text-bodydark2 tw-duration-300 tw-ease-in-out tw-hover:tw-text-white ${
                pathname === item.route ? "tw-text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
