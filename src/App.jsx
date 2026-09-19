import { angles } from './content';
import { Bonuses } from './components/Bonuses';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Inside } from './components/Inside';
import { Method } from './components/Method';
import { MobileOfferBar } from './components/MobileOfferBar';
import { Offer } from './components/Offer';
import { Problem } from './components/Problem';
import { Recipes } from './components/Recipes';
import { WhoIsFor } from './components/WhoIsFor';
import { getCheckoutHref } from './utils/checkout';

export default function App({ angle }) {
  const data = angles[angle];
  const checkoutHref = getCheckoutHref(angle);

  return (
    <div>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3" href="#conteudo">Pular para o conteúdo</a>
      <Header data={data} />
      <main id="conteudo">
        <Hero data={data} angle={angle} />
        <Problem data={data} />
        <Method data={data} />
        <Recipes />
        <Inside data={data} />
        <Bonuses angle={angle} />
        <WhoIsFor angle={angle} />
        <Offer data={data} checkoutHref={checkoutHref} />
        <Faq data={data} />
      </main>
      <Footer angle={angle} />
      <MobileOfferBar />
    </div>
  );
}
