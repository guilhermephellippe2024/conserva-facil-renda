import { CheckCircle2 } from 'lucide-react';
import { bonus } from '../content';
import { ASSET_PATH } from '../constants';
import { SectionHeader } from './SectionHeader';

export function Bonuses({ angle }) {
  return <section id="bonus" className="py-20 sm:py-28"><div className="container-page"><div className="mx-auto max-w-[710px] text-center"><SectionHeader center kicker="MAIS ORGANIZAÇÃO, NO MESMO PACOTE" description="Além das 15 receitas, você recebe três PDFs complementares. Nenhum deles é cobrado à parte.">3 bônus para acompanhar seus preparos.</SectionHeader></div><div className="mt-11 grid gap-5 md:grid-cols-3">{bonus.map((item, index) => <article key={item.name} className="overflow-hidden rounded-[24px] border border-[#e5e1d5] bg-white"><div className="flex h-[210px] items-center justify-center bg-[#e9eddf] p-5 sm:h-[245px]"><img loading="lazy" decoding="async" src={`${ASSET_PATH}${item.img}`} width="293" height="443" alt={`Prévia do PDF bônus: ${item.name}`} className="h-full w-auto rounded-[3px] object-contain shadow-[2px_7px_18px_rgba(20,40,30,.17)]" /></div><div className="p-6"><p className="mb-3 text-[11px] font-extrabold tracking-[.14em] text-orange">BÔNUS 0{index + 1}</p><h3 className="font-display text-xl font-bold text-pine">{item.name}</h3><p className="mt-3 text-sm leading-[1.8] text-ink/70">{item[angle === 'renda' ? 'income' : 'home']}</p></div></article>)}</div><div className="mt-7 flex items-center justify-center gap-2 text-sm font-bold text-leaf"><CheckCircle2 size={19} /> São exatamente estes 3 bônus.</div></div></section>;
}
