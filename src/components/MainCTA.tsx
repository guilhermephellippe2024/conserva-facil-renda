import { ArrowRight } from 'lucide-react';

type MainCTATypes = {
    children: any,
    className?: string
};

export function MainCTA({ children, className = '' }: MainCTATypes) {
    return (
        <a
            className={`btn-primary px-7 py-4 text-sm sm:text-base ${className}`}
            href="#oferta"
        >
            {children}
            <ArrowRight size={19} strokeWidth={2.5} />
        </a>
    );
}
