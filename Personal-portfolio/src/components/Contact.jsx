function Contact() {
  return (
    <section id="contact" className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-3xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#6B7280]">
            Contact Me
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Let's Work Together
          </h2>
        </div>

        {/* Contact Form */}
        <form className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-[#111827]"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#111827]"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-[#111827]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#111827]"
            />
          </div>

          {/* Message */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-[#111827]"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#111827]"
            />
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="rounded-lg bg-[#111827] px-6 py-3 font-medium text-white transition hover:bg-[#374151]"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;