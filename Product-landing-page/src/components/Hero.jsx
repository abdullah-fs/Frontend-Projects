const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-gray-400 mb-4">
              Simple. Powerful. Reliable.
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Powerful Product for Your Everyday Life
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-lg">
              Make your everyday tasks easier with a powerful product
              designed for simplicity, performance, and convenience.
            </p>

            <button className="mt-8 bg-white text-black px-7 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product"
              className="w-full max-w-md h-80 object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;