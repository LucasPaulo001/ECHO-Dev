import { Edit2, Trash2, GitCommit } from 'lucide-react';

interface EchoProps {
  title: string;
  time: string;
  content: string | undefined;
  tag: string[];
}

export const EchoCard = ({ title, time, content, tag }: EchoProps) => (
  <div className="relative group">
    {/* Indicador da Timeline */}
    <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform"></div>

    <div className="bg-[#111111] border border-white/5 p-6 rounded-xl hover:border-cyan-500/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <GitCommit size={12} className="text-cyan-500" /> {time}
          </div>
          <h3 className="text-lg font-bold text-zinc-100 mt-1">{title}</h3>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 text-zinc-500 hover:text-white transition-colors"><Edit2 size={14} /></button>
          <button className="p-2 text-zinc-500 hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
        </div>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">{content}</p>
      {
        tag.map((t, i) => (
          <div key={i} className="inline-flex px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/10 text-[10px] font-bold text-cyan-500 uppercase tracking-tighter">
            #{t}
          </div>
        ))
      }

    </div>
  </div>
);