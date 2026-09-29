import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex h-20 items-center justify-between px-6 md:px-10 lg:px-16">

      {/* Logo */}
      <div>
        <p className="text-2xl font-bold text-gray-900">
          Culina
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="hidden items-center gap-8 text-[17px] font-medium text-gray-700 md:flex lg:gap-12">
        <li>
          <a href="#home" className="cursor-pointer hover:text-gray-900">
            Home
          </a>
        </li>

        <li>
          <a href="#menu" className="cursor-pointer hover:text-gray-900">
            Menu
          </a>
        </li>

        <li>
          <a href="#about" className="cursor-pointer hover:text-gray-900">
            About
          </a>
        </li>

        <li>
          <a href="#contact" className="cursor-pointer hover:text-gray-900">
            Contact
          </a>
        </li>

      </ul>

      {/* Button */}
      <button className="rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white hover:bg-gray-700">
        Order Now
      </button>

    </nav>
  )
}

export default Navbar