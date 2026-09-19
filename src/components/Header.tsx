import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Brand } from './Brand';

interface HeaderProps {
    data: any
}

export function Header({ data }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="bg-pine py-2.5 text-center text-[10px] font-bold tracking-[.17em] text-[#e8f0dc] sm:text-[11px]">GUIA DIGITAL ILUSTRADO <span className="mx-1.5 text-[#b7d3a7]">✳</span> 15 RECEITAS <span className="mx-1.5 text-[#b7d3a7]">✳</span> 3 BÔNUS</div>
    <header className="sticky top-0 z-40 border-b border-[#e9e6dc] bg-[#faf9f4]/95 backdrop-blur-lg">
      <div className="container-page flex h-[76px] items-center justify-between gap-4">
        <Brand />
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-[13px] font-semibold text-ink/75 lg:flex">
          <a className="hover:text-pine" href="#como-funciona">Como funciona</a>
          <a className="hover:text-pine" href="#receitas">Receitas</a>
          <a className="hover:text-pine" href="#bonus">Os 3 bônus</a>
          <a className="hover:text-pine" href="#duvidas">Dúvidas</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#oferta" className="hidden rounded-full bg-pine px-5 py-3 text-xs font-bold text-white transition hover:bg-deep sm:inline-flex">Conhecer a oferta <ArrowRight size={15} className="ml-1.5" /></a>
          <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="menu-mobile" className="flex size-11 items-center justify-center rounded-xl border border-pine/20 text-pine lg:hidden">{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {open && <nav id="menu-mobile" aria-label="Navegação para celular" className="container-page flex flex-col gap-1 border-t border-[#e9e6dc] py-3 font-semibold lg:hidden">{[['Como funciona', '#como-funciona'], ['Receitas', '#receitas'], ['Os 3 bônus', '#bonus'], ['Dúvidas', '#duvidas'], ['Ver oferta', '#oferta']].map(([label, href]) => <a key={href} className="rounded-lg p-3 hover:bg-lime" onClick={() => setOpen(false)} href={href}>{label}</a>)}</nav>}
    </header>
  </>;
}
