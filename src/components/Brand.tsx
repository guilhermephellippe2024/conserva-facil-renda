import { Sprout } from 'lucide-react';

type BrandTypes = {
    inverted?: boolean
};

export function Brand({ inverted = false }: BrandTypes) {
    return <a href="#inicio" aria-label="Método Conserva Fácil, voltar ao início" className="inline-flex shrink-0 items-center gap-2.5 no-underline">
        <span className={`flex size-10 items-center justify-center rounded-2xl ${inverted ? 'bg-white/12 text-lime' : 'bg-pine text-lime'}`}><Sprout size={25} strokeWidth={2.1} /></span>
        <span className={`flex flex-col leading-[1.06] ${inverted ? 'text-white' : 'text-pine'}`}>
            <span className="font-display text-[17px] font-bold">Método Conserva</span>
            <span className="font-display text-[20px] font-bold tracking-tight">Fácil <span className="text-orange">✳</span></span>
        </span>
    </a>;
}
