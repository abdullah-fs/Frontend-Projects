const Benefits = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-3">
            BENEFITS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Our Product?
          </h2>
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6">

          {/* Left Column */}
          <div className="flex-1 space-y-5">

            <div className="flex items-center gap-4">
              <span className="text-white text-xl">✓</span>
              <p className="text-gray-300">
                Save Time Every Day
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white text-xl">✓</span>
              <p className="text-gray-300">
                Simple and Easy to Use
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-5">

            <div className="flex items-center gap-4">
              <span className="text-white text-xl">✓</span>
              <p className="text-gray-300">
                Better Productivity
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white text-xl">✓</span>
              <p className="text-gray-300">
                Reliable Performance
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;