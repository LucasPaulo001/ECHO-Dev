"use client"

import { useAuthContext } from '@/contexts/AuthContext';
import { User } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {


    const { user } = useAuthContext();

    return (
        <nav className="border-b border-white/5 bg-[#0f0f0f]/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <h1 className="text-xl font-bold tracking-tighter text-white">
                        <Link href="/">ECHO<span className="text-cyan-500">.</span>Dev</Link>
                    </h1>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-500">
                        <Link href="/my-projects" className="hover:text-white transition-colors">Meus Projetos</Link>
                        <a href="#" className="hover:text-white transition-colors">Explore</a>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 text-zinc-400">
                        <User size={16} />
                    </div>
                    <span className="text-sm font-medium text-zinc-200">{user?.name}</span>
                </div>
            </div>
        </nav>
    )
};