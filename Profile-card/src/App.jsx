import React from 'react'
import abdullahImage from './assets/abdullah.jpeg'

const App = () => {
  return (
    <>
      <header className="text-center px-4 py-6 sm:px-6 md:px-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Abdullah Mahmood</h1>
        <h2 className="text-2xl font-medium mt-2">Frontend Developer</h2>
        <p className="mt-2 text-gray-600">Building modern web experience</p>
        <hr className="mt-6" />
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <section className="bg-white rounded-xl shadow-md p-5 sm:p-7 md:p-10">
          <h2 className="text-3xl font-bold py-5">Introduction</h2>

          <img
            src={abdullahImage}
            alt=""
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto"
          />

          <div className="mt-6">
            <p className="leading-7 text-gray-700">
              Hi, I’m Abdullah Mahmood, a Software Engineering student at the
              University of Peshawar and a Full-Stack MERN Developer. I work
              with React, JavaScript, Node.js, Express, MongoDB, and Tailwind
              CSS. I enjoy building modern, responsive, and user-friendly web
              applications while continuously improving my development skills.
            </p>

            <p className="mt-4">Peshawar Pakistan</p>
            <p className="mt-2">Available for freelance work</p>
          </div>

          <hr className="my-6" />
        </section>

        <section className="bg-white rounded-xl shadow-md p-5 sm:p-7 md:p-10 mt-6">
          <h2 className="text-3xl font-bold py-5">Skills</h2>

          <ul className="flex flex-wrap gap-3">
            <li className="bg-gray-200 px-4 py-2 rounded-full">HTML</li>
            <li className="bg-gray-200 px-4 py-2 rounded-full">CSS</li>
            <li className="bg-gray-200 px-4 py-2 rounded-full">Javascript</li>
            <li className="bg-gray-200 px-4 py-2 rounded-full">React</li>
            <li className="bg-gray-200 px-4 py-2 rounded-full">
              Tailwind CSS
            </li>
          </ul>

          <hr className="my-6" />
        </section>

        <section className="bg-white rounded-xl shadow-md p-5 sm:p-7 md:p-10 mt-6">
          <h2 className="text-3xl font-bold py-5">Socail Links</h2>

          <a
            href="github.com/abdullahazaad"
            className="block sm:inline-block mr-4 mb-3 text-blue-600 hover:underline"
          >
            GitHub
          </a>

          <br className="sm:hidden" />

          <a
            href=""
            className="block sm:inline-block mr-4 mb-3 text-blue-600 hover:underline"
          >
            Linkdlin
          </a>

          <br className="sm:hidden" />

          <a
            href="mailto:abdullah277388@gmail.com"
            className="block sm:inline-block text-blue-600 hover:underline"
          >
            Email
          </a>

          <hr className="my-6" />
        </section>

        <section className="bg-white rounded-xl shadow-md p-5 sm:p-7 md:p-10 mt-6">
          <h2 className="text-3xl font-bold py-5">Contact Form</h2>

          <form className="space-y-4">
            <label className="block text-lg font-medium">Name:</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
            />

            <br />

            <label className="block text-lg font-medium">Email:</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
            />

            <br />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your messege"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
            ></textarea>

            <br />

            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              Submit
            </button>
          </form>

          <hr className="my-6" />
        </section>
      </main>

      <footer className="text-center py-6">
        <p>© 2026 Abdullah Mahmood</p>
      </footer>
    </>
  )
}

export default App