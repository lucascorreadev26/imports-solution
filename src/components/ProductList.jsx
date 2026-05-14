import { useState } from 'react';
import { products } from '../data/produtos';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [filtro, setFiltro] = useState('todos');

  const produtosFiltrados = products.filter((product) => {
    const nome = product.name.toLowerCase();

    if (filtro === 'todos') return true;

    if (filtro === 'iphone 13 a 11 pro max') {
      return (
        nome.includes('iphone 13') ||
        nome.includes('iphone 12') ||
        nome.includes('iphone 11 pro max')
      );
    }

    if (filtro === 'acessorios') {
      return (
        nome.includes('airpods') ||
        nome.includes('apple pencil') ||
        nome.includes('localizador airtag')
      );
    }

    return nome.includes(filtro);
  });

  return (
    <section className='bg-black text-white border-none mt-12'>

      <Link 
        className="bg-green-700 w-80 py-2 rounded-lg font-bold px-4 ml-6 lg:hidden" 
        to="/"
      >
        Voltar ao início
      </Link>

      <h2 className='text-2xl font-bold text-center pt-6 pb-2'>
        Catálogo iPhones
      </h2>

      <p className='text-center text-gray-400 mb-6'>
        Todos os modelos com garantia e entrega grátis.
      </p>

      <div className="flex justify-center mb-10">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-2"
        >
          <option value="todos">Todos os modelos</option>
          <option value="iphone 17">iPhones 17</option>
          <option value="iphone 16">iPhones 16</option>
          <option value="iphone 15">iPhones 15</option>
          <option value="iphone 14">iPhones 14</option>
          <option value="iphone 13 a 11 pro max">
            iPhones 13 a 11 Pro Max
          </option>
          <option value="ipad">iPads</option>
          <option value="macbook">Macbooks</option>
          <option value="acessorios">Acessorios</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {produtosFiltrados.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductList;