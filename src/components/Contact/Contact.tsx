import { CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const availability = [
    "Internship Opportunities",
    "Collaborative Projects",
    "Open Source Contributions",
    "Freelance Development"
  ];

  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center md:text-left">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-950/75 px-6 py-5 backdrop-blur md:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h2>
      </div>

      <div className="py-12">
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-lg text-neutral-400 max-w-xl mb-8">
          I’m currently looking for new opportunities in Android and Web Engineering. 
          Whether you have a question about my projects or just want to say hi, my inbox is always open!
        </p>

        {/* Primary Action Button */}
        <a 
          href="mailto:fenachangela2005@gmail.com" 
          className="inline-block border border-green text-green px-8 py-4 rounded hover:bg-green/10 transition-colors font-mono text-sm mb-12"
        >
          Send Me A Message
        </a>

        {/* Currently Available For Section */}
        <div className="bg-[#112240] p-6 rounded-lg border border-neutral-800 max-w-lg">
          <h3 className="text-white font-medium mb-4 flex items-center gap-2">
            <span className="text-green">●</span> Currently Available For:
          </h3>
          <ul className="space-y-3">
            {availability.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-neutral-400 text-sm">
                <CheckCircle2 size={16} className="text-green shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="max-w-md pb-16 text-sm text-neutral-500 sm:pb-0 mt-24">
      </footer>
    </section>
  );
};

export default Contact;