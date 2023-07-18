import { CategoryCard } from "./CategoryCard"

//CategoryCard();
//Props - valores de Javascript

export const CategorySection = () => {
    return (
        <section>
            <h2 className="title2">Categorias</h2>
            <ul>
                <CategoryCard title="Sapatos" img="#" />
                <CategoryCard title="Bolsas" img="#" />
            </ul>
        </section>
    )
}

//CategoryCard("Sapatos", "#");
//CategoryCard("Bolsas", "#");