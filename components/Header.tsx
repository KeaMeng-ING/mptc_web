"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

const aboutDropdownItems = [
  "ប្រវត្តិខេត្ត",
  "រចនាសម្ព័ន្ធរដ្ឋបាលខេត្ត",
  "ថ្នាក់ដឹកនាំខេត្ត",
  "ស្ថានភាពទូទៅ",
  "ក្របខណ្ឌអភិវឌ្ឍន៍ខេត្ត",
  "មន្ទី-អង្គភាពជុំវិញខេត្ត",
];

const Dropdown = ({ isOpen, items }: { isOpen: boolean; items: string[] }) => {
  if (!isOpen) return null;

  return (
    <ul className="absolute top-full left-0 w-44 md:w-56 bg-[#003A8A] opacity-90 text-white shadow-md z-50 rounded-sm">
      {items.map((item, i) => (
        <li
          key={i}
          className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer hover:bg-[#002f6c]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      {/* Top Header */}
      <header className="bg-primary min-h-[60px]">
        <div className="px-2 sm:px-4 md:px-12 lg:px-20 flex items-center justify-between">
          <div className="flex items-center py-3 h-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2 md:mr-4"
              style={{ height: "auto" }}
            />
            <div className="title">
              <h2 className="text-sm sm:text-base md:text-xl text-white font-secondary-bold font-black">
                រដ្ឋាបាលខេត្ដកែប
              </h2>
              <h2 className="text-xs sm:text-sm md:text-md text-white font-english">
                KEP ADMINISTRATION
              </h2>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          {/* Desktop Search & Language */}
          <div className="hidden md:flex items-center h-full">
            <div className="relative w-[140px] sm:w-[200px] md:w-[300px] lg:w-[400px]">
              <input
                type="text"
                placeholder="ស្វែងរក"
                className="px-3 py-2.5 pr-10 rounded-sm bg-white focus:outline-none w-full placeholder:text-black text-xs sm:text-sm md:text-base"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                <Search size={18} />
              </span>
            </div>

            <div className="w-[1px] h-8 ml-4 bg-white"></div>

            <div className="border border-[#002266] rounded-sm py-2 px-4 ml-4 flex gap-2 items-center">
              <Image
                src="/Flag_of_Cambodia.svg"
                alt="icon"
                width={45}
                height={29}
                className="w-12 h-auto"
              />
              <p className="text-white text-sm md:text-base">ភាសាខ្មែរ</p>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Menu */}
      <nav className="h-13 bg-primary w-full border-y-2 border-[#002266] hidden md:block">
        <ul
          className="flex items-center h-full px-4 md:px-8 lg:px-20 whitespace-nowrap overflow-x-auto"
          ref={dropdownRef}
        >
          <li className="text-white font-secondary-bold text-base md:text-lg py-3.5 pr-4 md:pr-6">
            ទំព័រដើម
          </li>

          <li
            className="relative text-white font-primary text-base md:text-lg flex items-center gap-1 py-3.5 px-4 md:px-6 cursor-pointer"
            onClick={() => toggleDropdown("about")}
          >
            អំពីខេត្ដកែប
            <ChevronDown size={20} strokeWidth={1.5} />
            <Dropdown
              isOpen={openDropdown === "about"}
              items={aboutDropdownItems}
            />
          </li>

          <li className="text-white font-primary text-base md:text-lg flex items-center gap-1 py-3.5 px-4 md:px-6 cursor-pointer">
            សេវារដ្ឋបាល
            <ChevronDown size={20} strokeWidth={1.5} />
          </li>

          <li className="text-white font-primary text-base md:text-lg flex items-center gap-1 py-3.5 px-4 md:px-6 cursor-pointer">
            ព៍ត៌មាន~ព្រឹត្តិការណ៍
            <ChevronDown size={20} strokeWidth={1.5} />
          </li>

          <li className="text-white font-primary text-base md:text-lg py-3.5 px-4 md:px-6 cursor-pointer">
            បទដ្ឋានគតិយុត្តិ
          </li>

          <li className="text-white font-primary text-base md:text-lg py-3.5 px-4 md:px-6 cursor-pointer">
            សក្តានុពលវិនិយោគ
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-50">
          <div className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-primary shadow-lg p-5 sm:p-6">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className="flex flex-col gap-4 mt-10">
              <li className="text-white font-secondary-bold text-base py-2">
                ទំព័រដើម
              </li>

              <li
                className="relative text-white font-primary text-base flex items-center gap-1 py-2 cursor-pointer"
                onClick={() => toggleDropdown("about")}
              >
                អំពីខេត្ដកែប
                <ChevronDown size={18} strokeWidth={1.5} />
                {openDropdown === "about" && (
                  <ul className="absolute left-full top-0 w-48 bg-[#003A8A] opacity-95 text-white shadow-md z-50 rounded-sm">
                    {aboutDropdownItems.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-3 font-primary text-white hover:bg-[#002f6c] cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="text-white font-primary text-base flex items-center gap-1 py-2 cursor-pointer">
                សេវារដ្ឋបាល
              </li>
              <li className="text-white font-primary text-base flex items-center gap-1 py-2 cursor-pointer">
                ព៍ត៌មាន~ព្រឹត្តិការណ៍
              </li>
              <li className="text-white font-primary text-base py-2">
                បទដ្ឋានគតិយុត្តិ
              </li>
              <li className="text-white font-primary text-base py-2">
                សក្តានុពលវិនិយោគ
              </li>

              {/* Mobile Search & Language */}
              <li className="mt-6">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="ស្វែងរក"
                    className="px-3 py-2.5 pr-10 rounded-sm bg-white focus:outline-none w-full placeholder:text-black text-xs"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                    <Search size={18} />
                  </span>
                </div>
              </li>
              <li>
                <div className="border border-[#002266] rounded-sm py-2 px-3 flex gap-2 mt-2">
                  <Image
                    src="/Flag_of_Cambodia.svg"
                    alt="icon"
                    width={45}
                    height={29}
                    className="w-12 h-auto"
                  />
                  <p className="text-white text-xs">ភាសាខ្មែរ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
