import React from 'react'

const Menu = () => {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16" id='menu'>

      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Popular Dishes
        </h2>

        <div className="mx-auto mt-4 h-1 w-30 rounded-full bg-gray-900"></div>
      </div>


      {/* Food Cards */}
      <div className="flex flex-col gap-6">

        {/* Row 1 */}
        <div className="flex flex-col gap-6 sm:flex-row">

          {/* Card 1 */}
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80"
              alt="Margherita Pizza"
              className="h-52 w-full rounded-xl object-cover"
            />

            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Margherita Pizza
              </p>

              <p className="mt-1 text-lg font-bold text-gray-700">
                $12
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700">
                Order
              </button>
            </div>
          </div>


          {/* Card 2 */}
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
              alt="Classic Burger"
              className="h-52 w-full rounded-xl object-cover"
            />

            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Classic Burger
              </p>

              <p className="mt-1 text-lg font-bold text-gray-700">
                $10
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700">
                Order
              </button>
            </div>
          </div>


          {/* Card 3 */}
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
              alt="Creamy Pasta"
              className="h-52 w-full rounded-xl object-cover"
            />

            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Creamy Pasta
              </p>

              <p className="mt-1 text-lg font-bold text-gray-700">
                $14
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700">
                Order
              </button>
            </div>
          </div>

        </div>


        {/* Row 2 */}
        <div className="flex flex-col gap-6 sm:flex-row">

          {/* Card 4 */}
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80"
              alt="Fresh Salad"
              className="h-52 w-full rounded-xl object-cover"
            />

            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Fresh Salad
              </p>

              <p className="mt-1 text-lg font-bold text-gray-700">
                $9
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700">
                Order
              </button>
            </div>
          </div>


          {/* Card 5 */}
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80"
              alt="Chicken Dumplings"
              className="h-52 w-full rounded-xl object-cover"
            />

            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Chicken Dumplings
              </p>

              <p className="mt-1 text-lg font-bold text-gray-700">
                $11
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700">
                Order
              </button>
            </div>
          </div>


          {/* Card 6 */}
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop&q=80"
              alt="Chocolate Dessert"
              className="h-52 w-full rounded-xl object-cover"
            />

            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Chocolate Dessert
              </p>

              <p className="mt-1 text-lg font-bold text-gray-700">
                $8
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700">
                Order
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Menu