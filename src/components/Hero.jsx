import { Shield, Truck, CreditCard, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import iphonesApresentacao from '../assets/iphonesApresentacao.webp'

const Hero = () => {
  return ( 
    <section className='flex w-full justify-center items-center gap-20'>
        <div className="bg-black text-white lg:w-120 flex flex-col items-center justify-center lg:items-start lg:justify-start px-4 mt-5">

            <div className='flex flex-col gap-3 mt-4'>
                <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-900/10 px-3 py-2 text-xs font-medium text-green-400 w-50">
                    <p>Bem-vindo à Imports Solution</p>
                </span>
                    <h1 className= 'text-3xl md:text-4xl font-bold'>A melhor experiência iPhone <span className='text-green-500'>do Brasil</span></h1>
                    <h3>iPhones 100% originais com garantia Apple. Entrega rápida, parcelamento facilitado e suporte especializado.</h3>
            </div>

            <div className='flex flex-col md:flex-row mt-8 gap-3 pb-5' > 
                <Link className='bg-green-700 w-55 py-2 rounded-lg font-bold flex flex-row gap-4 justify-center shadow-[0_0_15px_rgba(34,197,94,0.35)] hover:bg-black hover:text-white hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300' to="/CatalogoIphones">
                    Ver Catálogo
                    <ShoppingBag className="w-6 h-6" />
                </Link>
                
                <Link className="border'bg-green-700 w-55 py-2 rounded-lg font-bold flex flex-row gap-2 justify-center shadow-[0_0_15px_rgba(34,197,94,0.35)] hover:bg-green-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300" to="/AboutSolution">
                    Conheça a Solution
                    <ArrowRight className="w-6 h-6" />
                </Link>
            </div>

            <div className='flex items-center  gap-4 pb-4'>
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
                    Em até 18x
                </p>
            </div>
        </div>

        <div className='h-80 hidden lg:block'>
            <img src={iphonesApresentacao} alt="Iphones de Apresentação" />
        </div>
    </section>
  )
}

export default Hero