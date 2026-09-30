function Footer() {
  return (
    <footer className="bg-[#E5E7EB] py-12 text-[#111827]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Footer Content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-semibold">
              Abdullah
            </h2>

            <p className="mt-2 text-sm text-[#6B7280]">
              Frontend & MERN Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-[#6B7280]">
              <a
                href="#home"
                className="transition hover:text-[#111827]"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition hover:text-[#111827]"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition hover:text-[#111827]"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="transition hover:text-[#111827]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#111827]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold">
              Social Links
            </h3>

            <div className="mt-3 flex gap-5 text-sm text-[#6B7280]">
              <a
                href="#"
                className="transition hover:text-[#111827]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-[#111827]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition hover:text-[#111827]"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-[#6B7280]">
          © 2026 Abdullah Mahmood. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;