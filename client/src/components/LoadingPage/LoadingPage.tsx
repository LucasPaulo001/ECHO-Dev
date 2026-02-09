
"use client"
import React from 'react';

export const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* Container do Logo e Efeito de Eco */}
      <div className="relative flex items-center justify-center">
        
        {/* Ondas de "Echo" */}
        <div className="absolute h-24 w-24 rounded-full border border-cyan-500/50 animate-ping opacity-20"></div>
        <div className="absolute h-32 w-32 rounded-full border border-purple-500/30 animate-[ping_1.5s_linear_infinite] opacity-10"></div>
        <div className="absolute h-40 w-40 rounded-full border border-cyan-500/20 animate-[ping_2s_linear_infinite] opacity-5"></div>

        {/* Logo Central */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl font-black tracking-tighter text-white">
            ECHO<span className="text-cyan-500">.</span>
          </h1>
          
          {/* Barra de progresso minimalista */}
          <div className="mt-4 h-[2px] w-24 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-full origin-left animate-loading-bar bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* Texto de Status */}
      <p className="mt-8 animate-pulse font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
        Initializing Environment...
      </p>
    </div>
  );
};

export default LoadingPage;