import { Github, Linkedin, Mail } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const StickyHeader = ({ activeSection }: { activeSection: string }) => {
  const navItems = ['about', 'skills', 'projects', 'contact'];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <a href="/">Fena Changela</a>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
          Mobile & Web Engineer
        </h2>

        <p className="mt-4 max-w-xs leading-normal text-neutral-400">
          I build accessible Android apps and high-performance web systems for the future.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`group flex items-center py-3 ${
                    activeSection === item ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  <span
                    className={`mr-4 h-px bg-neutral-600 transition-all group-hover:w-16 group-hover:bg-white ${
                      activeSection === item ? 'w-16 bg-white' : 'w-8'
                    }`}
                  ></span>

                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://github.com/Fena001"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/fena-changela-743876291/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="mailto:fenachangela2005@gmail.com"
          className="text-neutral-400 hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>

        <div className="ml-4">
          <MagneticButton
            variant="secondary"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
