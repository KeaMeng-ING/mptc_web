"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Close dropdown on outside click
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
      <header className="bg-primary min-h-[70px]">
        <div className="mx-4 md:mx-19 flex items-center justify-between">
          <div className="flex items-center py-4 h-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="mr-2 md:mr-4"
              style={{ height: "auto" }}
            />
            <div className="title">
              <h2 className="text-base md:text-xl text-white font-secondary-bold font-black">
                រដ្ឋាបាលខេត្ដកែប
              </h2>
              <h2 className="text-xs md:text-lg text-white font-english">
                KEP ADMINISTRATION
              </h2>
            </div>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          <div className="hidden md:flex items-center h-full">
            <div className="relative w-[200px] md:w-[400px]">
              <input
                type="text"
                placeholder="ស្វែងរក"
                className="px-3 py-2.5 pr-10 rounded-sm bg-white focus:outline-none w-full placeholder:text-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                <Search size={20} />
              </span>
            </div>

            <div className="w-[1px] h-8 ml-4 bg-white hidden md:block"></div>

            <div className="border-1 border-[#002266] rounded-sm py-2 px-4 ml-4 flex gap-2">
              <Image
                src="/Flag_of_Cambodia.svg"
                alt="icon"
                width={30}
                height={19}
              />
              <p className="text-white text-sm md:text-base">ភាសាខ្មែរ</p>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Menu */}
      <div className="h-15 bg-primary w-full border-t-2 border-b-2 border-[#002266] hidden md:block">
        <ul
          className="flex items-center relative h-full mx-19"
          ref={dropdownRef}
        >
          <li className="text-white font-secondary-bold text-lg py-3.5 pr-6">
            ទំព័រដើម
          </li>
          <li
            className="relative text-white font-primary text-lg flex items-center gap-1 py-3.5 px-6 cursor-pointer"
            onClick={() => toggleDropdown("about")}
          >
            អំពីខេត្ដកែប
            <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
            {openDropdown === "about" && (
              <ul className="absolute top-full left-0 w-56 bg-[#003A8A] opacity-80 text-white shadow-md z-50 rounded-sm">
                <li className="px-4 py-3 font-primary text-white  flex items-center gap-1 cursor-pointer">
                  ប្រវត្តិខេត្ត
                  <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
                </li>
                <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                  រចនាសម្ព័ន្ធរដ្ឋបាលខេត្ត
                  <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
                </li>
                <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                  ថ្នាក់ដឹកនាំខេត្ត
                  <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
                </li>
                <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                  ស្ថានភាពទូទៅ
                  <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
                </li>
                <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                  ក្របខណ្ឌអភិវឌ្ឍន៍ខេត្ត
                  <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
                </li>
                <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                  មន្ទី-អង្គភាពជុំវិញខេត្ត
                  <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
                </li>
              </ul>
            )}
          </li>
          <li className=" relative text-white font-primary text-lg flex items-center gap-1 py-3.5 px-6 cursor-pointer">
            សេវារដ្ឋបាល
            <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
          </li>
          <li className="text-white font-primary text-lg flex items-center gap-1 py-3.5 px-6 cursor-pointer">
            ព៍ត៌មាន~ព្រឹត្តិការណ៍
            <ChevronDown size={24} className="ml-1" strokeWidth={1.5} />
          </li>
          <li className="text-white font-primary text-lg flex items-center gap-1 py-3.5 px-6">
            បទដ្ឋានគតិយុត្តិ
          </li>
          <li className="text-white font-primary text-lg flex items-center gap-1 py-3.5 px-6">
            សក្តានុពលវិនិយោគ
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-50">
          <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-primary shadow-lg p-6">
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
                <ChevronDown size={20} className="ml-1" strokeWidth={1.5} />
                {openDropdown === "about" && (
                  <ul className="absolute left-full top-0 w-48 bg-[#003A8A] opacity-90 text-white shadow-md z-50 rounded-sm">
                    <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                      ប្រវត្តិខេត្ត
                    </li>
                    <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                      រចនាសម្ព័ន្ធរដ្ឋបាលខេត្ត
                    </li>
                    <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                      ថ្នាក់ដឹកនាំខេត្ត
                    </li>
                    <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                      ស្ថានភាពទូទៅ
                    </li>
                    <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                      ក្របខណ្ឌអភិវឌ្ឍន៍ខេត្ត
                    </li>
                    <li className="px-4 py-3 font-primary text-white flex items-center gap-1 cursor-pointer">
                      មន្ទី-អង្គភាពជុំវិញខេត្ត
                    </li>
                  </ul>
                )}
              </li>
              <li className="text-white font-primary text-base flex items-center gap-1 py-2 cursor-pointer">
                សេវារដ្ឋបាល
                <ChevronDown size={20} className="ml-1" strokeWidth={1.5} />
              </li>
              <li className="text-white font-primary text-base flex items-center gap-1 py-2 cursor-pointer">
                ព៍ត៌មាន~ព្រឹត្តិការណ៍
                <ChevronDown size={20} className="ml-1" strokeWidth={1.5} />
              </li>
              <li className="text-white font-primary text-base flex items-center gap-1 py-2">
                បទដ្ឋានគតិយុត្តិ
              </li>
              <li className="text-white font-primary text-base flex items-center gap-1 py-2">
                សក្តានុពលវិនិយោគ
              </li>
              {/* Search and language for mobile */}
              <li className="mt-6">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="ស្វែងរក"
                    className="px-3 py-2.5 pr-10 rounded-sm bg-white focus:outline-none w-full placeholder:text-black"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                    <Search size={20} />
                  </span>
                </div>
              </li>
              <li>
                <div className="border-1 border-[#002266] rounded-sm py-2 px-4 flex gap-2 mt-2">
                  <Image
                    src="/Flag_of_Cambodia.svg"
                    alt="icon"
                    width={30}
                    height={19}
                  />
                  <p className="text-white text-sm">ភាសាខ្មែរ</p>
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
