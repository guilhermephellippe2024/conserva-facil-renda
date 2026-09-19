import { BookOpen, ClipboardCheck, ClipboardList } from 'lucide-react';
import { ASSET_PATH } from '../constants';
import { MainCTA } from './MainCTA';

const icons = [BookOpen, ClipboardCheck, ClipboardList];

export function Method({ data }) {
  return <section id="como-funciona" className="overflow-hidden bg-pine py-20 text-white sm:py-28"><div className="container-page grid gap-15 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-22">
    <div className="relative mx-auto w-full max-w-[480px] rounded-[28px] bg-[#dfe7c9] p-6 sm:p-9"><span aria-hidden="true" className="absolute -left-6 -top-6 size-24 rounded-full border-2 border-[#b6d39a]/60" /><img className="mx-auto max-h-[520px] w-auto rounded-[10px] shadow-2xl" loading="lazy" decoding="async" src={`${ASSET_PATH}amostra-metodo.webp`} alt="Prévia da página do método com orientações de preparo" width="550" height="832" /><span className="absolute -bottom-5 right-3 rounded-2xl bg-orange px-5 py-3 font-display text-lg font-bold text-white shadow-lg sm:-right-4">5 passos, um caminho.</span></div>
    <div><p className="mb-4 text-[11px] font-extrabold tracking-[.18em] text-[#bdd4a6]">O MÉTODO CONSERVA FÁCIL</p><h2 className="font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.1] font-bold tracking-[-.04em]">{data.methodTitle}</h2><p className="mt-5 text-[15px] leading-[1.85] text-white/70">O guia reúne o processo em uma sequência fácil de consultar. Veja como você usa esse material na prática.</p><div className="mt-10 space-y-7">{data.steps.map(([title, text], index) => { const Icon = icons[index]; return <div className="flex items-start gap-5" key={title}><span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#dce9c6] text-pine"><Icon size={23} /></span><div className="border-b border-white/13 pb-6"><span className="mb-1 block text-[10px] font-extrabold tracking-[.16em] text-[#bdd4a6]">PASSO 0{index + 1}</span><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-1.5 text-sm leading-[1.8] text-white/70">{text}</p></div></div>; })}</div><MainCTA className="mt-4 w-full sm:w-auto">Ver o guia completo</MainCTA></div>
  </div></section>;
}
