const FAQ = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Questions */}
        <div className="space-y-4">

          <div className="border border-gray-800 rounded-xl p-5 flex items-center justify-between">
            <p className="text-gray-300">
              What is this product?
            </p>

            <span className="text-gray-400">
              ▼
            </span>
          </div>

          <div className="border border-gray-800 rounded-xl p-5 flex items-center justify-between">
            <p className="text-gray-300">
              How does it work?
            </p>

            <span className="text-gray-400">
              ▼
            </span>
          </div>

          <div className="border border-gray-800 rounded-xl p-5 flex items-center justify-between">
            <p className="text-gray-300">
              What is the price?
            </p>

            <span className="text-gray-400">
              ▼
            </span>
          </div>

          <div className="border border-gray-800 rounded-xl p-5 flex items-center justify-between">
            <p className="text-gray-300">
              Is there a refund policy?
            </p>

            <span className="text-gray-400">
              ▼
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;