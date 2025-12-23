
import { content } from "../../config/content";

const Skills = () => {
  return (
    <section id="skills" className="py-20 max-w-3xl mx-auto px-6 sm:px-10">
       <div className="flex items-center mb-10">
        <span className="text-green font-mono text-xl mr-2">03.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate">
          Skills & Technologies
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full ml-5 max-w-[200px]"></div>
      </div>
      
      <div className="text-slate text-lg">
        <p className="mb-6">Here are a few technologies I've been working with recently:</p>
        <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
          {content.skills.map((skill, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green">▹</span> {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;