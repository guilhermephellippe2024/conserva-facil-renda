import { ArrowDown, BookOpen, ClipboardList, ShieldAlert } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const icons = [BookOpen, ClipboardList, ShieldAlert];

export function Problem({ data }) {
  return <section className="py-20 sm:py-28" id="problema"><div className="container-page">
    <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end lg:gap-20"><SectionHeader kicker={data.problemEyebrow}>{data.problemTitle}</SectionHeader><p className="border-l-[3px] border-orange pl-6 text-base leading-[1.9] text-ink/75 sm:text-lg">{data.problemText}</p></div>
    <div className="mt-12 grid gap-4 md:grid-cols-3">{data.pains.map(([title, text], index) => { const Icon = icons[index]; return <article key={title} className="rounded-[23px] border border-[#e4dfd1] bg-white p-6 shadow-[0_16px_35px_rgba(32,49,29,.035)] sm:p-8"><span className="mb-7 flex size-12 items-center justify-center rounded-2xl bg-[#f8e9d8] text-orange"><Icon size={23} /></span><h3 className="font-display text-xl font-bold text-pine">{title}</h3><p className="mt-3 text-sm leading-[1.8] text-ink/70">{text}</p></article>; })}</div>
    <div className="mt-9 text-center"><a href="#como-funciona" className="inline-flex items-center gap-2 text-sm font-bold text-leaf underline decoration-[#aac79b] underline-offset-4">Existe um jeito mais organizado de começar <ArrowDown size={16} /></a></div>
  </div></section>;
}
