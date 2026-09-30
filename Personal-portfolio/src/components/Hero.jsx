import React from 'react'
import abdullahImage from "../assets/abdullah.jpeg";

function Hero() {
  return (
    <section id="home" className="bg-[#F8F9FA]">
      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:justify-between">
        
        {/* Hero Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-3 text-lg font-medium text-[#6B7280]">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Abdullah Mahmood
          </h1>

          <h2 className="mt-4 text-2xl font-medium text-[#4B5563] sm:text-3xl">
            Frontend / MERN Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#6B7280] sm:text-lg">
            I build modern, responsive and user-friendly web applications
            using React, JavaScript, Node.js, Express and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#portfolio"
              className="rounded-lg bg-[#111827] px-7 py-3 text-center font-medium text-white transition hover:bg-[#374151]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#111827] px-7 py-3 text-center font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="h-64 w-64 overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <img
                src={abdullahImage}
                alt=""
                className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
