import React from 'react'

const About = () => {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16" id='about'>
  <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">

    {/* Left Side - Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop&q=80"
        alt="Our restaurant"
        className="h-80 w-full rounded-2xl object-cover sm:h-96"
      />
    </div>

    {/* Right Side - Content */}
    <div className="w-full text-center lg:w-1/2 lg:text-left">

      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        About Our Restaurant
      </h2>

      {/* Line */}
      <div className="mx-auto mt-4 h-1 w-30 rounded-full bg-gray-900 lg:mx-0"></div>

      {/* Paragraph */}
      <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
        At Culina, we believe that great food brings people together.
        Our restaurant combines fresh ingredients, traditional flavors,
        and a warm atmosphere to create a memorable dining experience.
        Every dish is prepared with care and passion to give our guests
        delicious food they can enjoy and remember.
      </p>

      <button className="rounded-lg bg-gray-900 px-6 py-3 my-5 font-medium text-white hover:bg-gray-700">
        More Information
      </button>

    </div>

  </div>
</section>
  )
}

export default About