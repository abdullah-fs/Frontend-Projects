import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8F9FA] text-[#4B5563]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">

        {/* Logo */}
        <h1 className="text-2xl font-medium">
          Abdullah
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center text-[18px] font-medium gap-10 md:flex">
          <a href="#home" className="hover:text-[#111827]">
            Home
          </a>

          <a href="#about" className="hover:text-[#111827]">
            About
          </a>

          <a href="#skills" className="hover:text-[#111827]">
            Skills
          </a>

          <a href="#services" className="hover:text-[#111827]">
            Services
          </a>

          <a href="#portfolio" className="hover:text-[#111827]">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-[#111827]">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-200 px-6 py-5 md:hidden">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>

          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>

          <a href="#portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>

          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;