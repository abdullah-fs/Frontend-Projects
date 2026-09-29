const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Nexora
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-400 hover:text-white transition">
            Home
          </a>

          <a href="#features" className="text-gray-400 hover:text-white transition">
            Features
          </a>

          <a href="#pricing" className="text-gray-400 hover:text-white transition">
            Pricing
          </a>

          <a href="#faq" className="text-gray-400 hover:text-white transition">
            FAQ
          </a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition">
          Buy Now
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;