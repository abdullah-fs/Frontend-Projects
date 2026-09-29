const Features = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-3">
            PRODUCT FEATURES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Powerful features designed to make your everyday experience
            simple and efficient.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Feature 1 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-xl font-bold">
              01
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Easy to Use
            </h3>

            <p className="text-gray-400 mt-3">
              A simple and intuitive experience that anyone can use.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-xl font-bold">
              02
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Fast Performance
            </h3>

            <p className="text-gray-400 mt-3">
              Built for speed so you can get things done faster.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-xl font-bold">
              03
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Reliable
            </h3>

            <p className="text-gray-400 mt-3">
              Designed to deliver a consistent experience every day.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;