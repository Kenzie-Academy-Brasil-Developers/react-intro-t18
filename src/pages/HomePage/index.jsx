import { BannerSection } from "../../components/sections/BannerSection";
import { CategorySection } from "../../components/sections/CategorySection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NewsletterSection } from "../../components/sections/NewsletterSection";
import { ProductsSection } from "../../components/sections/ProductsSection";

//Fragment - TAG FANTASMA
//<></> - Essa sintaxe NÃO pode receber uma chave
//<Fragment></Fragment> - Essa sintaxe PODE receber uma chave

export const HomePage = () => {
   return (
      <>
         <Header />
         <main>
            <BannerSection />
            <CategorySection />
            <ProductsSection />
            <NewsletterSection />
         </main>
         <Footer />
      </>
   );
};
