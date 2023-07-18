// TODO COMPONENTE DEVE INICIAR COM LETRA MAIÚSCULA!

import { ProductCard } from "./ProductCard"

export const ProductsSection = () => {
    return(
        <section>
            <h2 className="title2">Produtos em destaque</h2>
            <ul>
                <ProductCard title="Blazer Branco Elegante" img="#" price={490} />
                <ProductCard title="Sapatos Amarelos" img="#" price={490} />
            </ul>
        </section>
    )
}