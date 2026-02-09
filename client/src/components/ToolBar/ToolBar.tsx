import React from 'react';
import { Plus, Search, Filter, LayoutGrid, List, Zap } from 'lucide-react';
import { CreateProjectDialog } from '../Modal/Modal';

export const ProjectToolbar = () => {
  return (
    <div className="w-full dark bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
      

      {/* Direita: Actions & View Switcher */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-zinc-800 pt-4 md:pt-0">
        
        {/* Toggle de Visualização (Grid vs List) */}
        <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800">
          <button className="p-1.5 rounded-md bg-zinc-800 text-cyan-500 shadow-sm">
            <LayoutGrid size={16} />
          </button>
          <button className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 transition-colors">
            <List size={16} />
          </button>
        </div>

        <div className="h-6 w-[1px] bg-zinc-800 hidden md:block"></div>

        {/* Botão de Criação Principal */}
        <CreateProjectDialog />
      </div>

      {/* Atalho flutuante discreto (Opcional) */}
      <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-zinc-600 absolute -bottom-6 right-4">
        <Zap size={10} />
        PRESS <kbd className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">N</kbd> FOR NEW
      </div>
    </div>
  );
};