function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#6B7280]">
            My Skills
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Technologies I Use
          </h2>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="w-full rounded-xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:w-[220px]"
            >
              <h3 className="text-lg font-medium text-[#111827]">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
