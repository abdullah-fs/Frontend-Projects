function Projects() {
  const projects = [
    {
      title: "Restaurant Landing Page",
      image: "/assets/project-1.jpg",
    },
    {
      title: "Product Landing Page",
      image: "/assets/project-2.jpg",
    },
    {
      title: "Personal Portfolio",
      image: "/assets/project-3.jpg",
    },
  ];

  return (
    <section id="projects" className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#6B7280]">
            My Work
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6 md:flex-row">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111827]">
                  {project.title}
                </h3>

                <a
                  href="#"
                  className="mt-5 inline-block rounded-lg bg-[#111827] px-5 py-2.5 font-medium text-white transition hover:bg-[#374151]"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;