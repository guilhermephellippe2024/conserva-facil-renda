import { ArrowUpRight } from 'lucide-react';
import { Brand } from './Brand';

type FooterTypes = {
    angle: 'casa' | 'renda';

};

export function Footer({ angle }: FooterTypes) {
    return (
        <footer
            className="bg-[#112b20] pb-23 pt-14 text-white sm:pb-12"
        >
            <div className="container-page">
                <div className="grid gap-7 border-b border-white/15 pb-11 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <Brand inverted />
                        <p className="mt-5 max-w-[460px] text-[13px] leading-[1.8] text-white/60">
                            Pequenas conservas, grandes momentos. Receitas, organização e cuidado com o preparo em um só lugar.
                        </p>
                    </div>
                    <a
                        href="#inicio"
                        className="inline-flex items-center gap-2 text-[13px] font-bold text-lime"
                    >
                        Voltar ao topo <ArrowUpRight size={17} />
                    </a>
                </div>
                <div className="flex flex-col justify-between gap-5 py-7 text-[11px] leading-[1.8] text-white/55 md:flex-row">
                    <p>© {new Date().getFullYear()} Método Conserva Fácil. Página de apresentação do produto.
                    </p>
                    <p className="max-w-[490px]">
                        {angle === 'renda' ? 'Material culinário e educativo. Não constitui autorização para vender alimentos nem promessa de renda. Verifique requisitos sanitários e de rotulagem aplicáveis.' : 'Material culinário e educativo. Siga integralmente as orientações de segurança e os métodos de processamento de cada receita.'}
                    </p>
                </div>
                <p className="text-[10px] leading-[1.7] text-white/40">
                    Antes de publicar, inclua os dados reais do vendedor, política de privacidade, termos e canal de atendimento de acordo com sua operação e a plataforma de checkout.
                </p>
            </div>
        </footer>
    );
}
