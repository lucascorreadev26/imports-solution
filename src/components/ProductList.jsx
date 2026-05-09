import { products } from '../data/produtos';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';


const ProductList = () => {
  return (
    <section className='bg-black text-white border-none mt-12' >

        <Link className="bg-green-700 w-80 py-2 rounded-lg font-bold px-4 ml-6" to="/">Voltar ao início</Link>

        <h2 className='text-2xl font-bold text-center pt-6 pb-2 '>
          Catálogo iPhones
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