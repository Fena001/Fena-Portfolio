import { motion } from "framer-motion";

const Terminal = () => {
  return (
    <div className="w-full rounded-xl shadow-2xl overflow-hidden bg-[#0d1117] border border-slate/10 font-mono text-xs sm:text-sm">
    
      <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-slate/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-slate/40 text-xs">fena_skills.json</span>
      </div>

      <div className="p-6 text-slate leading-relaxed">
        
        <div>
          <span className="text-purple-400">"Mobile_Engineering"</span>: <span className="text-yellow-400">{"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"core"</span>: [<span className="text-green-400">"Kotlin"</span>, <span className="text-green-400">"Java"</span>, <span className="text-green-400">"Jetpack Compose"</span>],
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"architecture"</span>: [<span className="text-green-400">"MVVM"</span>, <span className="text-green-400">"Clean Architecture"</span>],
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"android_tools"</span>: [<span className="text-green-400">"Room"</span>, <span className="text-green-400">"Retrofit"</span>, <span className="text-green-400">"Jetpack Navigation"</span>]
        </div>
        <div className="text-yellow-400">{"},"}</div>

        <div className="mt-4">
          <span className="text-purple-400">"Web_Engineering"</span>: <span className="text-yellow-400">{"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"frontend"</span>: [<span className="text-green-400">"React.js"</span>, <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"Tailwind CSS"</span>],
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"platforms"</span>: [<span className="text-green-400">"Chrome Extensions (MV3)"</span>, <span className="text-green-400">"Web Apps"</span>]
        </div>
        <div className="text-yellow-400">{"},"}</div>

        <div className="mt-4">
          <span className="text-purple-400">"Backend_Engineering"</span>: <span className="text-yellow-400">{"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"languages"</span>: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Node.js (Basic)"</span>],
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"cloud_&_db"</span>: [<span className="text-green-400">"AWS (EC2, S3, RDS)"</span>, <span className="text-green-400">"Firebase"</span>, <span className="text-green-400">"PostgreSQL"</span>],
        </div>
        <div className="pl-6">
          <span className="text-blue-400">"concepts"</span>: [<span className="text-green-400">"REST APIs"</span>, <span className="text-green-400">"Auth"</span>, <span className="text-green-400">"DB Normalization"</span>]
        </div>
        <div className="text-yellow-400">{"}"}</div>
        
        <div className="mt-4 flex items-center gap-2">
           <span className="text-green-400">➜</span>
           <span className="text-cyan-400">~</span>
           <motion.span 
             animate={{ opacity: [0, 1, 0] }}
             transition={{ repeat: Infinity, duration: 0.8 }}
             className="w-2 h-4 bg-slate/50 block"
           />
        </div>
      </div>
    </div>
  );
};

export default Terminal;