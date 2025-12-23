import { content } from "../../config/content";

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Projects</h2>
      </div>

      <div className="group/list">
        {content.projects.map((project, i) => (
          <div key={i} className="group/item relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2" aria-label={project.date}>
              {project.date}
            </header>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-lightest-slate">
                <div>
                  <a className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green group/link text-base" href={project.links.github} target="_blank" rel="noreferrer" aria-label={project.title}>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 md:block"></span>
                    <span>{project.title} <span className="inline-block">→</span></span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate">
                {project.description}
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <li key={tech} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;