function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive and user-friendly websites for different types of businesses and projects.",
    },
    {
      title: "Frontend Development",
      description:
        "Creating clean and responsive user interfaces using React, JavaScript and Tailwind CSS.",
    },
    {
      title: "MERN Development",
      description:
        "Developing full-stack web applications using MongoDB, Express, React and Node.js.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#6B7280]">
            What I Do
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
            My Services
          </h2>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6 md:flex-row">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-1 rounded-xl border border-gray-200 bg-[#F8F9FA] p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#111827]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[#6B7280]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;

