import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          WHY CHOOSE US?
        </h2>

        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gray-900"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6">

        {/* Card 1 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Fresh Food
          </h3>

          <p className="mt-2 text-gray-500">
            Fresh ingredients in every dish.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Expert Chef
          </h3>

          <p className="mt-2 text-gray-500">
            Delicious meals prepared by experts.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Fast Service
          </h3>

          <p className="mt-2 text-gray-500">
            Quick and friendly service.
          </p>
        </div>

        {/* Card 4 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Cozy Place
          </h3>

          <p className="mt-2 text-gray-500">
            Comfortable dining atmosphere.
          </p>
        </div>

        {/* Card 5 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Best Taste
          </h3>

          <p className="mt-2 text-gray-500">
            Amazing flavors in every bite.
          </p>
        </div>

        {/* Card 6 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Quality
          </h3>

          <p className="mt-2 text-gray-500">
            We never compromise on quality.
          </p>
        </div>

        {/* Card 7 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Affordable
          </h3>

          <p className="mt-2 text-gray-500">
            Great food at fair prices.
          </p>
        </div>

        {/* Card 8 */}
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <div className="text-4xl">★</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Happy Guests
          </h3>

          <p className="mt-2 text-gray-500">
            Your satisfaction is our priority.
          </p>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs