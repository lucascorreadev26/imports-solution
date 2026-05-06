import { Shield, Truck, CreditCard } from 'lucide-react';

const Hero = () => {
  return ( 
    <section className="bg-black min-h-80 text-white flex flex-col justify-center items-center px-4">
        <div className='flex flex-col gap-3 mt-4'>
            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-900/10 px-3 py-2 text-xs font-medium text-green-400 w-50">
                <p>Bem-vindo à Imports Solution</p>
            </span>
            <h1 className='text-3xl font-bold'>A melhor experiência iPhone <span className='text-green-500'>do Brasil</span></h1>
            <h3>iPhones 100% originais com garantia Apple. Entrega rápida, parcelamento facilitado e suporte especializado.</h3>
        </div>

        <div className='flex flex-col mt-8 gap-2 pb-5' > 
            <button className='bg-green-700 w-80 py-2 rounded-lg'>Ver Catálogo</button>
            <button className='bg-green-700 w-80 py-2 rounded-lg'>Conheça a Solution</button>
        </div>

        <div className='flex items-center justify-center gap-4 pb-4'>
            <p className='flex items-center justify-center gap-2 text-gray-400 text-[12px] leading-tight'> 
                <Shield className="w-4 h-4" />
                Garantia Apple
            </p>
            
            <p className='flex items-center justify-center gap-2 text-gray-400 text-[12px] leading-tight'>
                <Truck className="w-4 h-4" />
                Frete Grátis
            </p>

            <p className='flex items-center justify-center gap-2 text-gray-400 text-[12px] leading-tight'>
                <CreditCard className="w-4 h-4" />
                12x sem juros
            </p>
        </div>
    </section>
  )
}

export default Hero