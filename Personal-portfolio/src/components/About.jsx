import React from 'react'
import abdullahImage from "../assets/abdullah.jpeg";

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#6B7280]">
            About Me
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Get To Know Me
          </h2>
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">

          {/* About Image */}
          <div className="flex-shrink-0">
            <div className="h-80 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-[#F8F9FA] shadow-sm sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]">
              <img
                src={abdullahImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="max-w-xl text-center md:text-left">

            <h3 className="text-2xl font-semibold text-[#111827]">
              About Me
            </h3>

            <p className="mt-5 leading-7 text-[#6B7280]">
              I'm Abdullah Mahmood, a Frontend and MERN Stack Developer
              passionate about building modern, responsive and user-friendly
              web applications.
            </p>

            <p className="mt-4 leading-7 text-[#6B7280]">
              I enjoy turning ideas into clean and functional digital
              experiences. I work with technologies like React, JavaScript,
              Node.js, Express and MongoDB while continuously improving my
              development skills through real-world projects.
            </p>

            {/* Download CV */}
            <div className="mt-8">
              <a
                href="/cv.pdf"
                download
                className="inline-block rounded-lg bg-[#111827] px-7 py-3 font-medium text-white transition hover:bg-[#374151]"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;


