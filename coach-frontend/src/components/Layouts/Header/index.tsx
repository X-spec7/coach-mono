import Link from "next/link";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { SearchField } from "@/components/shared";

interface HeaderProps {
  isDashboard?: boolean
  isDetailPage?: boolean
  title: string
  description: string
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex w-full">
      <div className="flex flex-grow items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between items-start">
          <h4 className="text-black text-2xl">{props.title}</h4>
          <p className="text-gray-20 text-xs">{props.description}</p>
        </div>

        <div className="flex flex-center gap-2 p-2 bg-white rounded-4xl">
          {
            props.isDashboard && <SearchField width="w-67" height="h-9" placeholder="Search anything" onChange={() => {}} />
          }
          <DropdownNotification />
          {
            !props.isDashboard && <DropdownUser />
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
