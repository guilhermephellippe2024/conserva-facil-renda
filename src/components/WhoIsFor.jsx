import { Check, ShieldAlert } from 'lucide-react';

export function WhoIsFor({ angle }) {
  const isIncome = angle === 'renda';
  const items = isIncome
    ? ['Aprender receitas e seguir as quantidades indicadas.', 'Registrar cada preparação com a ficha de conserva.', 'Consultar as exigências sanitárias e de rotulagem aplicáveis antes de comercializar.']
    : ['Escolher entre doces e salgadas.', 'Seguir receitas do nível fácil ao avançado.', 'Organizar os potes preparados com os bônus.'];

  return <section className="bg-[#eae4d5] py-18 sm:py-22"><div className="container-page grid gap-8 md:grid-cols-2 md:items-center"><div><p className="section-kicker">COMBINA COM VOCÊ?</p><h2 className="section-heading mt-3">{isIncome ? 'Uma habilidade para explorar com responsabilidade.' : 'Receitas para quem gosta de fazer em casa.'}</h2><p className="mt-5 text-[15px] leading-[1.8] text-ink/75">{isIncome ? 'Este guia é para quem quer conhecer formulações e praticar em casa antes de considerar uma atividade comercial. O conteúdo ensina preparo culinário — não promete faturamento.' : 'Este guia é para quem gosta de cozinhar, quer experimentar novos sabores e prefere seguir um passo a passo em vez de juntar instruções de vários lugares.'}</p></div><div className="rounded-[25px] bg-[#f9f8f3] p-6 shadow-sm sm:p-8"><p className="mb-5 font-display text-xl font-bold text-pine">{isIncome ? 'Antes de qualquer venda, vale saber:' : 'Você pode aproveitar o guia para:'}</p><ul className="space-y-4">{items.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-[1.7]"><Check size={18} className="mt-1 shrink-0 text-leaf" />{item}</li>)}</ul>{isIncome && <p className="mt-5 border-t border-[#d9dcd0] pt-4 text-[12px] leading-[1.7] text-ink/70"><ShieldAlert size={15} className="mr-1 inline text-orange" />O guia não substitui treinamento profissional, licença ou autorização sanitária; não inclui precificação, gestão ou estratégias de vendas.</p>}</div></div></section>;
}
