import { content } from "../../config/content";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 sm:px-10">
      <div>
        <p className="text-green font-mono text-sm mb-5 ml-1">{content.hero.intro}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-lightest-slate mb-4 tracking-tight">
          {content.hero.name}
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-slate mb-8 tracking-tight">
          {content.hero.tagline}
        </h2>
        <p className="max-w-xl text-slate text-lg leading-relaxed mb-12">
          {content.hero.summary}
        </p>
        <a
          href="#projects"
          className="border border-green text-green px-6 py-4 rounded hover:bg-green/10 transition-colors font-mono text-sm"
        >
          Check out my course work!
        </a>
      </div>
    </section>
  );
};

export default Hero;