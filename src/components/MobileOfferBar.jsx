import { ArrowRight } from 'lucide-react';
import { BASE_PRICE } from '../constants';

export function MobileOfferBar() {
  return <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-4 border-t border-[#e7e0d1] bg-[#fffcf4]/97 px-4 py-3 shadow-[0_-6px_26px_rgba(25,60,44,.10)] backdrop-blur-md sm:hidden"><div className="flex flex-col"><span className="text-[10px] font-bold text-ink/65">Guia + 3 bônus</span><span className="font-display text-[23px] font-bold leading-tight text-pine">R$ {BASE_PRICE}</span></div><a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-[12px] font-extrabold text-white">Ver oferta <ArrowRight size={16} /></a></div>;
}
