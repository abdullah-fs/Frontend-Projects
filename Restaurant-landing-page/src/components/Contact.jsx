import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 md:px-10 lg:px-16">
      
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          CONTACT US
        </h2>

        <div className="mx-auto mt-4 h-1 w-[120px] rounded-full bg-gray-900"></div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-2xl">
        <form className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="font-medium text-gray-700 sm:w-24">
              Name:
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="font-medium text-gray-700 sm:w-24">
              Email:
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="font-medium text-gray-700 sm:w-24">
              Phone:
            </label>

            <input
              type="tel"
              placeholder="Enter your phone"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="font-medium text-gray-700 sm:w-24 sm:pt-3">
              Message:
            </label>

            <textarea
              rows="5"
              placeholder="Write your message"
              className="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-3">
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>

    </section>
  )
}

export default Contact