import React from 'react';
import { Plus, Github, Globe, Lock, MoreVertical, Edit2, Trash2 } from 'lucide-react';

export const ProjectFeed = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans">
      {/* Navbar Minimalista */}
      <nav className="border-b border-white/5 bg-[#0f0f0f]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold tracking-tighter text-white">
              ECHO<span className="text-cyan-500">.</span>Dev
            </h1>
            <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">My Projects</a>
              <a href="#" className="hover:text-white transition-colors">Explore</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[1px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold">LD</div>
            </div>
            <span className="text-sm font-medium text-zinc-200">Lucas Dev</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Coluna Principal: Project Activity */}
        <div className="lg:col-span-8 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-3xl font-bold text-white tracking-tight">ECHO Dev Platform</h2>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 uppercase">
                    <Lock size={10} /> Private
                  </span>
                </div>
                <p className="text-zinc-500">A devlog platform to track project progress and decisions.</p>
              </div>
              <div className="flex gap-2">
                 <button className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors">
                  <Github size={18} />
                </button>
                <button className="px-4 py-2.5 rounded-lg bg-cyan-500 text-black font-bold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Plus size={18} /> Add Echo
                </button>
              </div>
            </div>

            {/* Timeline de Echos */}
            <div className="space-y-4 border-l border-zinc-800 ml-4 pl-8 relative">
              {[
                { title: "JWT Authentication Implemented", time: "2 hours ago", content: "Implemented JWT authentication for user login. Basic auth system is done!", tag: "auth" },
                { title: "Initial Project Setup Complete", time: "Yesterday", content: "Set up the basic structure for the ECHO Dev platform. Excited to start logging progress!", tag: "setup" }
              ].map((echo, i) => (
                <div key={i} className="relative group">
                  {/* Dot da Timeline */}
                  <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
                  
                  <div className="bg-[#111111] border border-white/5 p-6 rounded-xl hover:border-white/10 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{echo.time}</span>
                        <h3 className="text-lg font-bold text-zinc-100 mt-1">{echo.title}</h3>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-zinc-500 hover:text-cyan-500"><Edit2 size={14}/></button>
                        <button className="p-1.5 text-zinc-500 hover:text-red-500"><Trash2 size={14}/></button>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{echo.content}</p>
                    <span className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-500 uppercase tracking-widest">
                      #{echo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Detalhes */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#111111] border border-white/5 rounded-xl p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Project Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Owner</span>
                <span className="text-zinc-200">Lucas Dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Repository</span>
                <a href="#" className="text-cyan-500 hover:underline">github.com/lucas/echo</a>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-white/5 rounded-xl p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Next.js 14', 'Tailwind', 'Prisma'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default ProjectFeed;