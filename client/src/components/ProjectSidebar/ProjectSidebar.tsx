import { Github, Lock } from 'lucide-react';

export const ProjectSidebar = () => (
  <aside className="space-y-6">
    <div className="bg-[#111111] border border-white/5 rounded-xl p-6">
      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Project Details</h3>
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">Owner</span>
          <span className="text-zinc-200">Lucas Dev</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-zinc-500">Repository</span>
          <a href="#" className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2 truncate">
            <Github size={14} /> github.com/lucas/echo-dev
          </a>
        </div>
      </div>
    </div>

    <div className="bg-[#111111] border border-white/5 rounded-xl p-6">
      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Stack</h3>
      <div className="flex flex-wrap gap-2">
        {['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'].map(tech => (
          <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] text-zinc-400 font-mono">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </aside>
);