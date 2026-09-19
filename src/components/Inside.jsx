import { ClipboardList, Clock3, ShieldCheck } from 'lucide-react';
import { ASSET_PATH } from '../constants';
import { SectionHeader } from './SectionHeader';

const previews = [
  ['amostra-ingredientes.webp', 'Ingredientes e medidas'],
  ['amostra-passo-a-passo.webp', 'Passo a passo'],
  ['amostra-metodo.webp', 'Método organizado'],
];
const highlights = [
  [ClipboardList, 'Ingredientes precisos', 'Quantidades e rendimento aproximado por receita.'],
  [Clock3, 'Tempo por altitude', 'Instruções de processamento conforme a altitude.'],
  [ShieldCheck, 'Cuidados em destaque', 'O que não alterar, como armazenar e quando descartar.'],
];

export function Inside({ data }) {
  return <section id="por-dentro" className="bg-[#edf0e3] py-20 sm:py-28"><div className="container-page"><SectionHeader kicker="VEJA ANTES DE COMPRAR" description={data.insideText}>{data.insideTitle}</SectionHeader><div className="mt-10 grid grid-cols-3 items-end gap-2 sm:gap-5">{previews.map(([image, title], index) => <figure key={image} className={`relative overflow-hidden rounded-xl bg-white p-1.5 pb-3 shadow-[0_16px_38px_rgba(35,54,38,.12)] sm:rounded-[19px] sm:p-3 sm:pb-5 ${index === 1 ? 'lg:-translate-y-4' : ''}`}><img src={`${ASSET_PATH}${image}`} loading="lazy" decoding="async" alt={`Prévia de página do guia: ${title}`} width="550" height="832" className="aspect-[.67] w-full rounded-lg object-cover object-top" /><figcaption className="pt-2 text-center text-[10px] font-bold text-pine sm:pt-4 sm:text-[14px]">{title}</figcaption></figure>)}</div><div className="mt-11 grid gap-3 md:grid-cols-3">{highlights.map(([Icon, title, text]) => <div key={title} className="flex items-start gap-3 rounded-xl bg-white/85 p-5"><Icon className="mt-1 shrink-0 text-leaf" size={21} /><div><h3 className="text-sm font-bold text-pine">{title}</h3><p className="mt-1 text-[12px] leading-[1.7] text-ink/70">{text}</p></div></div>)}</div></div></section>;
}
