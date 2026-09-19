import { ChevronDown, Leaf } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const commonQuestions = [
  ['O que eu recebo?', 'O guia principal em PDF com 15 receitas ilustradas, mais três PDFs bônus: Controle da despensa, Ficha da minha conserva e Botulismo em conservas.'],
  ['Posso ler pelo celular?', 'Sim. O material está em formato PDF, que pode ser aberto no celular, tablet ou computador com um leitor compatível.'],
  ['O preço inclui tudo?', 'Sim. O valor anunciado nesta página é R$ 14,90 pelo guia e pelos três bônus apresentados. Confira as condições definitivas no checkout.'],
];

export function Faq({ data }) {
  return <section id="duvidas" className="py-20 sm:py-28"><div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-18"><div><SectionHeader kicker="AINDA FICOU ALGUMA DÚVIDA?">Perguntas frequentes.</SectionHeader><p className="mt-6 text-sm leading-[1.85] text-ink/70">Preferimos deixar claro o que o guia contém — e o que ele não promete.</p><div className="mt-7 hidden rounded-[22px] bg-lime p-6 lg:block"><Leaf size={27} className="text-leaf" /><p className="mt-4 font-display text-[22px] font-bold leading-snug text-pine">Cozinhar também é aprender a cuidar de cada detalhe.</p></div></div><div className="space-y-3">{[...data.faq, ...commonQuestions].map(([question, answer]) => <details key={question} className="faq-item group rounded-[17px] border border-[#e4e1d5] bg-white px-5 py-1 sm:px-7"><summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[14px] font-bold text-pine sm:text-[16px]">{question}<ChevronDown size={20} className="faq-arrow shrink-0 text-orange" /></summary><p className="pb-5 pr-5 text-[13px] leading-[1.85] text-ink/70 sm:text-sm">{answer}</p></details>)}</div></div></section>;
}
