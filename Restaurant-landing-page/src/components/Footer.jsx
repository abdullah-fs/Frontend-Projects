import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 px-6 py-12 text-white md:px-10 lg:px-16">

      {/* Footer Content */}
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">

        {/* Restaurant */}
        <div className="md:w-1/4">
          <h2 className="text-2xl font-bold">
            SAVORIA
          </h2>

          <p className="mt-4 leading-6 text-gray-400">
            A place where fresh flavors,
            delicious food, and warm
            hospitality come together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="mt-4 flex flex-col gap-3 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-white">
                Menu
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold">
            Follow Us
          </h3>

          <ul className="mt-4 flex flex-col gap-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">
            Contact
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-gray-400">
            <p>Peshawar</p>
            <p>+92 313 8056055</p>
            <p>abdullah277388@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2026 Savoria. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer