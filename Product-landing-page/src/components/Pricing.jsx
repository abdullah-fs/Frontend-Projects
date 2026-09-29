const Pricing = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-3">PRICING</p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Choose Your Plan
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Basic */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold">Basic</h3>

            <p className="text-4xl font-bold mt-4">$19</p>

            <div className="mt-8 space-y-4 text-gray-400">
              <p>✓ Basic features</p>
              <p>✓ Email support</p>
            </div>

            <button className="w-full mt-8 bg-white text-black py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>

          {/* Pro */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold">Pro</h3>

            <p className="text-4xl font-bold mt-4">$39</p>

            <div className="mt-8 space-y-4 text-gray-400">
              <p>✓ Advanced features</p>
              <p>✓ Priority support</p>
            </div>

            <button className="w-full mt-8 bg-white text-black py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>

          {/* Premium */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold">Premium</h3>

            <p className="text-4xl font-bold mt-4">$69</p>

            <div className="mt-8 space-y-4 text-gray-400">
              <p>✓ All features included</p>
              <p>✓ 24/7 support</p>
            </div>

            <button className="w-full mt-8 bg-white text-black py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;