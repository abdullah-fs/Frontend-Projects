const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              Nexora
            </h2>

            <p className="text-gray-400 mt-3 max-w-xs">
              Simple, powerful, and reliable for your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#features" className="hover:text-white transition">
                Features
              </a>

              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>

              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Social Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>

              <a href="#" className="hover:text-white transition">
                Instagram
              </a>

              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <p>Peshawar, Pakistan</p>
              <p>+92 300 1234567</p>
              <p>hello@nexora.com</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            © 2026 Nexora. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;