import Terminal from "../Terminal"; 

const Skills = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-950/75 px-6 py-5 backdrop-blur md:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Skills</h2>
      </div>
      <Terminal />
    </section>
  );
};
export default Skills;