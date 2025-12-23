const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-950/75 px-6 py-5 backdrop-blur md:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">
          About
        </h2>
      </div>

      <div className="text-lg leading-relaxed space-y-4">
        <p>
          My journey into software development began in 2023 at{" "}
          <strong className="font-medium text-white">
            VVP Engineering College
          </strong>
          , fueled by one question:{" "}
          <span className="italic">
            how do apps actually work behind the scenes?
          </span>
        </p>

        <p>
          Since then, I’ve built real-time communication apps, implemented
          debt-simplification algorithms, and developed performance-focused web
          tools, gaining hands-on experience across both mobile and web
          platforms.
        </p>

        <p>
          I currently specialize in connecting{" "}
          <span className="text-purple-400">
            Android development (Kotlin)
          </span>{" "}
          with modern{" "}
          <span className="text-blue-400">
            frontend engineering (React)
          </span>
          , focusing on writing clean, scalable code and delivering intuitive
          user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
