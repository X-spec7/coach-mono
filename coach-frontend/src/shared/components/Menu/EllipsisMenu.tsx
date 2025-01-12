'use client'

import React, { useState, useRef, useEffect } from "react"

interface EllipsisMenuProps {
  menus: string[]
  onClick?: (menu: string) => void
}

const EllipsisMenu: React.FC<EllipsisMenuProps> = ({ menus, onClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Toggles the dropdown menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  // Closes the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="tw-relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="tw-p-2 tw-rounded-full tw-hover:tw-bg-gray-200 tw-focus:tw-outline-none"
        aria-label="Ellipsis menu"
      >
        <svg fill="#212738" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          width="12" height="12" viewBox="0 0 41.915 41.916"
        >
          <g>
            <g>
              <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585
			C8.705,15.371,11.214,17.874,11.214,20.956z"/>
              <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585
			C24.056,15.371,26.564,17.874,26.564,20.956z"/>
              <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585
			C39.406,15.371,41.915,17.874,41.915,20.956z"/>
            </g>
          </g>
        </svg>
      </button>

      {/* TODO: remove default values in future */}
      {isOpen && menus.length == 0 && (
        <div className="tw-absolute tw-right-0 tw-mt-2 tw-w-48 tw-bg-white tw-border tw-border-gray-200 tw-rounded-md tw-shadowlg tw-z-9999">
          <ul className="tw-py-1">
            <li>
              <button
                className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-gray-700 tw-hover:tw-bg-gray-100"
                onClick={() => {
                  alert("Option 1 clicked")
                  setIsOpen(false)
                }}
              >
                Option 1
              </button>
            </li>
            <li>
              <button
                className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-gray-700 tw-hover:tw-bg-gray-100"
                onClick={() => {
                  alert("Option 2 clicked")
                  setIsOpen(false)
                }}
              >
                Option 2
              </button>
            </li>
            <li>
              <button
                className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-gray-700 tw-hover:tw-bg-gray-100"
                onClick={() => {
                  alert("Option 3 clicked")
                  setIsOpen(false)
                }}
              >
                Option 3
              </button>
            </li>
          </ul>
        </div>
      )}

      {isOpen && menus.length != 0 && (
        <div className="tw-absolute tw-right-0 tw-mt-2 tw-w-48 tw-bg-white tw-border tw-border-gray-200 tw-rounded-md tw-shadowlg tw-z-9999">
          <ul className="tw-py-1">
            {
              menus.map((menu, index) => (
                <li key={index}>
                  <button
                    className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-gray-700 tw-hover:tw-bg-gray-100"
                    onClick={() => {
                      if(onClick) {
                        onClick(menu)
                      }
                      setIsOpen(false)
                    }}
                  >
                    {menu}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default EllipsisMenu
