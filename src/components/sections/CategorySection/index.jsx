import { CategoryCard } from "./CategoryCard";
import Categoria1 from "../../../assets/Categoria1.png";
import Categoria2 from "../../../assets/Categoria2.png";

//CategoryCard();
//Props - valores de Javascript

export const CategorySection = () => {
   return (
      <section>
         <div className="container">
            <h2 className="title2">Categorias</h2>
            <ul>
               <CategoryCard title="Sapatos" img={Categoria1} />
               <CategoryCard title="Bolsas" img={Categoria2} />
            </ul>
         </div>
      </section>
   );
};

//CategoryCard("Sapatos", "#");
//CategoryCard("Bolsas", "#");
