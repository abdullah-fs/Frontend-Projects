const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-3">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Testimonial 1 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-lg">
              "Great product. It is simple, fast, and very easy to use."
            </p>

            <p className="text-white font-semibold mt-6">
              — User 1
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-lg">
              "Love it! It has made my everyday tasks much easier."
            </p>

            <p className="text-white font-semibold mt-6">
              — User 2
            </p>
          </div>

        </div>
        <div className="flex flex-col my-6 md:flex-row gap-6">

          {/* Testimonial 1 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-lg">
              "Great product. It is simple, fast, and very easy to use."
            </p>

            <p className="text-white font-semibold mt-6">
              — User 1
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-lg">
              "Love it! It has made my everyday tasks much easier."
            </p>

            <p className="text-white font-semibold mt-6">
              — User 2
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;