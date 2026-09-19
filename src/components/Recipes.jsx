import { recipes } from '../content';
import { ASSET_PATH } from '../constants';
import { SectionHeader } from './SectionHeader';


export function Recipes() {
  const selected = ['cenoura', 'pepino', 'morango', 'pimentoes'].map(id => recipes.find(recipe => recipe.image === `${id}.webp`));

  return (
    <section id="receitas" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeader kicker="UM POUCO DO QUE VOCÊ VAI ENCONTRAR">
            15 receitas para explorar, do salgado ao doce.
          </SectionHeader>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-pine/15 bg-white px-4 py-2 text-xs font-bold text-pine">
              11 salgadas
            </span>
            <span className="rounded-full border border-pine/15 bg-white px-4 py-2 text-xs font-bold text-pine">
              4 doces
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {selected.map(item =>
            <article
              key={item.name}
              className="overflow-hidden rounded-[20px] border border-[#e9e2d3] bg-white shadow-sm"
            >
              <img
                loading="lazy"
                decoding="async" width="500" height="380"
                src={`${ASSET_PATH}${item.image}`}
                alt={`Fotografia ilustrativa da receita ${item.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                className="p-4 sm:p-5"
              >
                <h3 className="mt-3 font-display text-[16px] leading-tight font-bold text-pine sm:text-[20px]">{item.name}</h3>
              </div>
            </article>
          )}
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {['Salgada', 'Doce'].map(kind =>
            <div
              key={kind}
              className="rounded-[26px] border border-[#e7e1d3] bg-white p-6 sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between border-b border-[#e7e1d3] pb-5">
                <h3 className="font-display text-2xl font-bold text-pine">
                  {kind === 'Salgada' ? 'Conservas salgadas' : 'Conservas doces'}
                </h3>
                <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-bold text-pine"
                >
                  {recipes.filter(recipe => recipe.kind === kind).length} receitas
                </span>
              </div>
              <ul className="recipe-list">
                {recipes.filter(recipe => recipe.kind === kind).map(recipe =>
                  <li key={recipe.name} className="text-[13px] leading-snug text-ink">
                    <span className="mr-2 inline-block size-1.5 translate-y-[-2px] rounded-full bg-leaf" />
                    {recipe.name}
                  </li>
                )}</ul>
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-[12px] leading-relaxed text-ink/60">Os rendimentos variam por receita; algumas preparações resultam em vários potes. Consulte as medidas antes de começar.</p>
      </div>
    </section>
  )
}
