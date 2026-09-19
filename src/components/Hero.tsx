import { BookOpen, CheckCircle2, Leaf, PackageCheck, Smartphone } from 'lucide-react';
import { ASSET_PATH, BASE_PRICE } from '../constants';
import { MainCTA } from './MainCTA';

type HeroTypes = {
    data: any,
    angle: 'renda' | 'casa'
};

export function Hero({ data, angle }: HeroTypes) {
  return <section id="inicio" className="hero-bg relative overflow-hidden border-b border-[#e9e5d6]">
    <div aria-hidden="true" className="pointer-events-none absolute right-[-13rem] top-[-12rem] size-[34rem] rounded-full border border-pine/5" />
    <div className="container-page relative grid gap-12 pb-17 pt-13 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
      <div className="relative z-10 max-w-[615px]">
        <p className="section-kicker mb-6 flex items-center gap-2"><Leaf size={15} strokeWidth={2.5} />{data.eyebrow}</p>
        <h1 className="font-display text-[clamp(2.9rem,5.8vw,5.25rem)] leading-[1.045] font-bold tracking-[-.06em] text-pine">{data.titleBefore} <span className="highlight-script">{data.titleAccent}</span> {data.titleAfter}</h1>
        <p className="mt-6 max-w-[540px] text-base leading-[1.8] text-ink/75 sm:text-[18px]">{data.description}</p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <MainCTA className="w-full sm:w-auto">{data.cta}</MainCTA>
          <a href="#por-dentro" className="btn-outline w-full px-6 py-4 text-sm sm:w-auto"><BookOpen size={18} /> Ver o conteúdo</a>
        </div>
        <p className="mt-6 flex items-start gap-2 text-[13px] leading-relaxed text-pine/70"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-leaf" />{data.heroNote}</p>
        <div className="mt-9 flex flex-wrap gap-4 border-t border-pine/12 pt-6 text-[12px] font-semibold text-pine/75"><span className="inline-flex items-center gap-2"><BookOpen size={16} />15 receitas</span><span className="inline-flex items-center gap-2"><PackageCheck size={16} />3 bônus em PDF</span><span className="inline-flex items-center gap-2"><Smartphone size={16} />Material digital</span></div>
      </div>
      <div className="relative mx-auto flex h-[510px] w-full max-w-[490px] items-center justify-center sm:h-[640px] lg:h-[590px]" aria-label="Prévia da capa e das páginas do guia Método Conserva Fácil">
        <div className="absolute left-0 top-8 h-[75%] w-[72%] -rotate-[11deg] rounded-[27px] border-[9px] border-white bg-white shadow-2xl sm:left-1 sm:top-12" aria-hidden="true"><img className="size-full rounded-[17px] object-cover" src={`${ASSET_PATH}amostra-ingredientes.webp`} width="550" height="832" decoding="async" alt="" /></div>
        <div className="absolute right-0 top-1/2 h-[76%] w-[73%] -translate-y-1/2 rotate-[7deg] rounded-[23px] border-[8px] border-white bg-white shadow-xl" aria-hidden="true"><img className="size-full rounded-[14px] object-cover" src={`${ASSET_PATH}amostra-passo-a-passo.webp`} width="550" height="832" decoding="async" alt="" /></div>
        <img className="book-cover relative z-10 h-[85%] w-auto max-w-[78%] rounded-[6px] object-contain ring-1 ring-black/5" src={`${ASSET_PATH}capa.webp`} width="560" height="847" loading="eager" fetchPriority="high" alt="Capa do guia Método Conserva Fácil, com potes de cenoura, pepino, pimentas e doce" />
        <div className="absolute bottom-1 right-0 z-20 rounded-2xl border border-white/20 bg-pine px-5 py-4 text-white shadow-xl sm:bottom-5 sm:right-[-14px]"><span className="block text-[10px] font-bold tracking-[.16em] text-lime">GUIA + 3 BÔNUS</span><span className="font-display text-[29px] font-bold">R$ {BASE_PRICE}</span></div>
      </div>
    </div>
    <div aria-hidden="true" className="relative -mb-1 h-[22px] bg-[radial-gradient(ellipse_at_50%_100%,#eaf0d8_0%,#eaf0d8_48%,transparent_49%)] bg-[length:44px_22px]" />
  </section>
}
