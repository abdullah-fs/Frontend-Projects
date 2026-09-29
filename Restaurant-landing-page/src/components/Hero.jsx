import React from 'react'

const Hero = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-8 px-6 py-8 lg:flex-row lg:gap-12 lg:px-16 lg:py-10">

      {/* Left Side */}
      <div className="text-center lg:w-1/2 lg:text-left">

        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Delicious Food, <br />
          Made With Love
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base leading-6 text-gray-600 sm:text-lg lg:mx-0">
          Culina — Fresh flavors, delicious meals,
          and a warm dining experience. We bring
          quality ingredients and authentic taste
          together in every dish.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-3 lg:justify-start">

          <button className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700">
            View Menu
          </button>

          <button className="rounded-lg border border-gray-900 px-6 py-3 font-medium text-gray-900 hover:bg-gray-900 hover:text-white">
            Book
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex justify-center lg:w-1/2 lg:justify-end">

        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=80"
          alt="Delicious restaurant food"
          className="h-64 w-full max-w-sm rounded-2xl object-cover shadow-lg sm:h-80 sm:max-w-md"
        />

      </div>

    </main>
  )
}

export default Hero