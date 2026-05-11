import ProductList from "./ProductList"
import { products } from '../data/produtos';
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const ProductFeatured = () => {
return (
    <section className='bg-black text-white border-none mt-12 flex flex-col justify-center items-center' >

        <h2 className='text-2xl font-bold text-center pt-6 pb-2 '>
          Aparelhos em Destaque
        </h2>
        <p className='text-center text-gray-400 mb-10'>Todos os modelos com garantia e entrega grátis.</p>

        <Link className="bg-green-700 w-55 py-2 rounded-lg font-bold px-4 flex flex-row gap-2 ml-6" to="/CatalogoIphones">
        Catálogo Completo <ArrowRight className="w-6 h-6" />
        </Link>

        <div className="mt-8 lg:flex flex-row gap-12">
            {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

    </section>
  )
};

export default ProductFeatured