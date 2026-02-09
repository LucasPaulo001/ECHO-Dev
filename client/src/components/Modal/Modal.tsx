"use client"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, FolderPlus, Loader2 } from 'lucide-react'
import { RegisterProjectAPI } from '@/api/project'
import { useAuthContext } from '@/contexts/AuthContext'

export function CreateProjectDialog() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    tags: [''],
    isPublic: false,
    status: 'peending'
  })

  const { token } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await RegisterProjectAPI(token, formData.title, formData.description, formData.status, formData.tags, formData.isPublic, formData.link);
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-cyan-400 font-bold gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Plus size={18} />
          NOVO PROJETO
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border-zinc-800 text-zinc-100 selection:bg-cyan-500/30">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-500">
              <FolderPlus size={24} />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight">Criar Novo Projeto</DialogTitle>
            <DialogDescription className="text-zinc-500">
              Configure o seu novo workspace de documentação.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-6">
            {/* Título */}
            <div className="grid gap-2">
              <Label htmlFor="title" className="text-zinc-400 ml-1">Título do Projeto</Label>
              <Input
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ex: API Gateway Core"
                className="bg-zinc-900/50 border-zinc-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
              />
            </div>

            {/* Link Repositório */}
            <div className="grid gap-2">
              <Label htmlFor="link" className="text-zinc-400 ml-1">Link para o repositório</Label>
              <Input
                id="link"
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://github.com/usuario/projeto"
                className="bg-zinc-900/50 border-zinc-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
              />
            </div>

            {/* Descrição */}
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-zinc-400 ml-1">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Sobre o que é este projeto?"
                className="bg-zinc-900/50 border-zinc-800 focus:border-cyan-500/50 min-h-[100px] resize-none placeholder:text-zinc-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Tags */}
              <div className="grid gap-2">
                <Label htmlFor="tags" className="text-zinc-400 ml-1">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",") })}
                  placeholder="react, node"
                  className="bg-zinc-900/50 border-zinc-800 focus:border-cyan-500/50 placeholder:text-zinc-700"
                />
              </div>

              {/* Status */}
              <div className="grid gap-2">
                <Label htmlFor="status" className="text-zinc-400 ml-1">Visibilidade</Label>
                <Select
                  defaultValue={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger className="bg-zinc-900/50 border-zinc-800 focus:ring-cyan-500/50">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111111] border-zinc-800 text-zinc-300">
                    <SelectItem value="peending">Pendente</SelectItem>
                    <SelectItem value="completed">Finalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter className="pt-4 border-t border-zinc-800/50">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all px-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "CRIAR PROJETO"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}