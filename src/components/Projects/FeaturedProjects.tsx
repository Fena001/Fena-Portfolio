import { ExternalLink, Github } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      year: "2025",
      title: "Flow State Extension",
      description:
        "A productivity Chrome Extension built with React.js and Manifest V3. Implements the declarativeNetRequest API for privacy-preserving website blocking and the Offscreen Document API for persistent background audio.",
      tags: ["React.js", "Chrome API", "Service Workers", "Manifest V3"],
      links: {
        github: "https://github.com/Fena001",
        external: "#"
      }
    },
    {
      year: "2025",
      title: "Omeglex",
      description:
        "A random audio calling app built with Kotlin and Jetpack Compose. engineered real-time peer-to-peer audio communication using WebRTC and managed secure user authentication via Firebase.",
      tags: ["Kotlin", "Jetpack Compose", "WebRTC", "Firebase", "MVVM"],
      links: {
        github: "https://github.com/Fena001",
        external: "#"
      }
    },
    {
      year: "2025",
      title: "SplitMoney",
      description:
        "An expense tracker that simplifies group debts. I designed a custom 'Debt Simplification' algorithm that minimizes the total number of transactions required to settle balances within a group.",
      tags: ["Android", "Java/Kotlin", "Algorithms", "MVVM"],
      links: {
        github: "https://github.com/Fena001",
        external: "#"
      }
    }
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-950/75 px-6 py-5 backdrop-blur md:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">
          Projects
        </h2>
      </div>

      <div className="group/list">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group/item relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover/item:bg-neutral-800/50 lg:group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/item:drop-shadow-lg"></div>

            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2"
              aria-label={project.year}
            >
              {project.year}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-white">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline font-medium leading-tight text-white hover:text-green focus-visible:text-green group/link text-base"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {project.title}
                    <span className="inline-block ml-1 shrink-0 text-neutral-400 group-hover/link:text-green">
                      <ExternalLink size={14} />
                    </span>
                  </span>
                </a>
              </h3>

              <p className="mt-2 text-sm leading-normal text-neutral-400">
                {project.description}
              </p>

              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li key={tag} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green">
                      {tag}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center">
                <a
                  href={project.links.github}
                  className="text-neutral-300 hover:text-white relative z-20"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://github.com/Fena001"
          className="inline-flex items-center font-medium leading-tight text-white hover:underline group"
        >
          <span className="mr-1">View Full Project Archive</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
