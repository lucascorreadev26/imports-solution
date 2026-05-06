import { products } from '../data/produtos';
import ProductCard from '../components/ProductCard';


const ProductList = () => {
  return (
    <section className='bg-black text-white border-none mt-12' >

        <h2 className='text-2xl font-bold text-center pt-6 pb-2 '>
          Aparelhos em Destaque
        </h2>
        <p className='text-center text-gray-400 mb-12'>Todos os modelos com garantia e entrega grátis.</p>

        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

    </section>
  )
}

export default ProductList