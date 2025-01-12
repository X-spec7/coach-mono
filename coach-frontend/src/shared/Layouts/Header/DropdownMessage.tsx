import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/shared/components/ClickOutside";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);


  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="tw-relative">
      <li className="tw-relative">
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="tw-relative tw-flex tw-h-8.5 tw-w-8.5 tw-items-center tw-justify-center tw-rounded-full tw-border-[0.5px] tw-border-stroke tw-bg-gray tw-hover:tw-text-primary "
          href="#"
        >
          <span
            className={`tw-absolute -tw-right-0.5 -tw-top-0.5 tw-z-1 tw-h-2 tw-w-2 tw-rounded-full tw-bg-meta-1 ${
              notifying === false ? "tw-hidden" : "tw-inline"
            }`}
          >
            <span className="tw-absolute -tw-z-1 tw-inline-flex tw-h-full tw-w-full animate-ping tw-rounded-full tw-bg-meta-1 tw-opacity-75"></span>
          </span>

          <svg
            className="tw-fill-current tw-duration-300 tw-ease-in-out"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z"
              fill=""
            />
            <path
              d="M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z"
              fill=""
            />
            <path
              d="M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z"
              fill=""
            />
            <path
              d="M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z"
              fill=""
            />
          </svg>
        </Link>

        {/* <!-- Dropdown Start --> */}
        {dropdownOpen && (
          <div
            className={`tw-absolute -tw-right-16 tw-mt-2.5 tw-flex tw-h-90 w-75 tw-flex-col tw-rounded-sm tw-border tw-border-stroke tw-bg-white tw-shadowdefault tw-sm:tw-right-0 tw-sm:w-80`}
          >
            <div className="tw-px-4.5 tw-py-3">
              <h5 className="tw-text-sm tw-font-medium tw-text-bodydark2">Messages</h5>
            </div>

            <ul className="tw-flex tw-h-auto tw-flex-col tw-overflow-y-auto">
              <li>
                <Link
                  className="tw-flex tw-gap-4.5 tw-border-t tw-border-stroke tw-px-4.5 tw-py-3 tw-hover:tw-bg-gray-2"
                  href="/messages"
                >
                  <div className="tw-h-12.5 w-12.5 tw-rounded-full">
                    <Image
                      width={112}
                      height={112}
                      src={"/images/user/user-02.png"}
                      alt="User"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div>
                    <h6 className="tw-text-sm tw-font-medium tw-text-black ">
                      Mariya Desoja
                    </h6>
                    <p className="tw-text-sm">I like your confidence 💪</p>
                    <p className="tw-text-xs">2min ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="tw-flex tw-gap-4.5 tw-border-t tw-border-stroke tw-px-4.5 tw-py-3 tw-hover:tw-bg-gray-2"
                  href="/messages"
                >
                  <div className="tw-h-12.5 w-12.5 tw-rounded-full">
                    <Image
                      width={112}
                      height={112}
                      src={"/images/user/user-01.png"}
                      alt="User"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div>
                    <h6 className="tw-text-sm tw-font-medium tw-text-black ">
                      Robert Jhon
                    </h6>
                    <p className="tw-text-sm">Can you share your offer?</p>
                    <p className="tw-text-xs">10min ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="tw-flex tw-gap-4.5 tw-border-t tw-border-stroke tw-px-4.5 tw-py-3 tw-hover:tw-bg-gray-2"
                  href="/messages"
                >
                  <div className="tw-h-12.5 w-12.5 tw-rounded-full">
                    <Image
                      width={112}
                      height={112}
                      src={"/images/user/user-03.png"}
                      alt="User"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div>
                    <h6 className="tw-text-sm tw-font-medium tw-text-black ">
                      Henry Dholi
                    </h6>
                    <p className="tw-text-sm">I cam across your profile and...</p>
                    <p className="tw-text-xs">1day ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="tw-flex tw-gap-4.5 tw-border-t tw-border-stroke tw-px-4.5 tw-py-3 tw-hover:tw-bg-gray-2"
                  href="/messages"
                >
                  <div className="tw-h-12.5 w-12.5 tw-rounded-full">
                    <Image
                      width={112}
                      height={112}
                      src={"/images/user/user-04.png"}
                      alt="User"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div>
                    <h6 className="tw-text-sm tw-font-medium tw-text-black ">
                      Cody Fisher
                    </h6>
                    <p className="tw-text-sm">I’m waiting for you response!</p>
                    <p className="tw-text-xs">5days ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="tw-flex tw-gap-4.5 tw-border-t tw-border-stroke tw-px-4.5 tw-py-3 tw-hover:tw-bg-gray-2"
                  href="/messages"
                >
                  <div className="tw-h-12.5 w-12.5 tw-rounded-full">
                    <Image
                      width={112}
                      height={112}
                      src={"/images/user/user-02.png"}
                      alt="User"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div>
                    <h6 className="tw-text-sm tw-font-medium tw-text-black ">
                      Mariya Desoja
                    </h6>
                    <p className="tw-text-sm">I like your confidence 💪</p>
                    <p className="tw-text-xs">2min ago</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* <!-- Dropdown End --> */}
      </li>
    </ClickOutside>
  );
};

export default DropdownMessage;
