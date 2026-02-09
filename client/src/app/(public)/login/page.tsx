"use client"

import React, { useState } from 'react';
import { Github, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContext';

const LoginPage = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string[]>([]);

  const { Login } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validando inputs
    setError([]);

    if(!email) {setError((prev) => [...prev, "Email é obrigatório. "]); return};
    if(!password) {setError((prev) => [...prev, "Senha é obrigatória. "]); return};

    await Login(email, password);

  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 selection:bg-cyan-500/30">

      <div className="max-w-md w-full space-y-8 bg-[#111111] p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10">
        
        {/* Header/Logo */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-white">
            ECHO<span className="text-cyan-500 text-5xl">.</span>Dev
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Bem-vindo de volta ao centro de comando.
          </p>
        </div>

        <ul>
          {error.map((err, i) => (
            <li className='text-red-500 list-disc' key={i}>{err}</li>
          ))}
        </ul>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-mail"
                className="block w-full pl-10 pr-3 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Senha"
                className="block w-full pl-10 pr-3 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center text-zinc-400 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-zinc-800 bg-zinc-900 text-cyan-500 focus:ring-0" />
              Lembrar de mim
            </label>
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors font-medium">Esqueceu a senha?</a>
          </div>

          <button type='submit' className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-black bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all">
            ENTRAR
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Divisor */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#111111] px-2 text-zinc-500">Ou continue com</span>
          </div>
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-900 transition-colors font-medium">
          <Github className="h-5 w-5" />
          GitHub
        </button>

        <p className="text-center text-sm text-zinc-500">
          Não tem conta?{' '}
          <Link suppressHydrationWarning href="/register" className="text-white hover:underline decoration-cyan-500 underline-offset-4">Crie uma agora</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;