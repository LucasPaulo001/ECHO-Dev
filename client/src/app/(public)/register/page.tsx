"use client";

import React, { useState } from "react";
import { Github, Mail, Lock, User, AtSign, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";

const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string[]>([]);

  const { Register } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validando inputs
    setError([]);
    if (!name) {
      setError((prev) => [...prev, "Nome é obrigatório. "]);
      return;
    }
    if (!userName) {
      setError((prev) => [...prev, "Nome de usuário é obrigatório. "]);
      return;
    }
    if (!email) {
      setError((prev) => [...prev, "Email é obrigatório. "]);
      return;
    }
    if (!password) {
      setError((prev) => [...prev, "Senha é obrigatória. "]);
      return;
    }

    await Register(name, userName, email, password);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 selection:bg-cyan-500/30">
      <div className="max-w-md w-full space-y-6 bg-[#111111] p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10">
        {/* Header/Logo */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-white">
            ECHO<span className="text-cyan-500 text-5xl">.</span>Dev
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Junte-se à nova geração de desenvolvedores.
          </p>
        </div>

        <ul>
          {error.map((err, i) => (
            <li className="text-red-500 list-disc" key={i}>
              {err}
            </li>
          ))}
        </ul>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-3">
            {/* Campo Nome */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nome completo"
                className="block w-full pl-10 pr-3 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Campo Nome de Usuário */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AtSign className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Username (ex: dev_echo)"
                className="block w-full pl-10 pr-3 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Campo E-mail */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-mail profissional"
                className="block w-full pl-10 pr-3 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Campo Senha */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Senha (mín. 8 caracteres)"
                className="block w-full pl-10 pr-3 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>
          </div>

          <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-black bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all">
            CRIAR CONTA
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Divisor */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#111111] px-2 text-zinc-500">
              Ou use seu Github
            </span>
          </div>
        </div>

        {/* Social Register */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-900 transition-colors font-medium text-sm">
          <Github className="h-5 w-5" />
          Registrar com GitHub
        </button>

        <p className="text-center text-sm text-zinc-500 pt-2">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="text-white hover:underline decoration-cyan-500 underline-offset-4 font-medium transition-all"
          >
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
