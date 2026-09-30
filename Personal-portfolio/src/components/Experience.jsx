function Experience() {
  const timeline = [
    {
      year: "2026",
      title: "Frontend Developer / Internship",
      description: "Working on React, Tailwind CSS and real-world frontend projects.",
    },
    {
      year: "2024",
      title: "Software Engineering",
      description: "Started Software Engineering studies and focused on web development.",
    },
    {
      year: "2022",
      title: "Intermediate",
      description: "Completed Intermediate education with Pre-Medical background.",
    },
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#6B7280]">
            My Journey
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Experience / Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="flex gap-6"
            >
              {/* Year */}
              <div className="w-20 flex-shrink-0 text-right">
                <span className="font-semibold text-[#111827]">
                  {item.year}
                </span>
              </div>

              {/* Timeline Line + Dot */}
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-[#111827]" />

                {index !== timeline.length - 1 && (
                  <div className="h-24 w-px bg-gray-300" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="text-xl font-semibold text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-[#6B7280]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;