import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const phoneBusiness = 5521992659609; 

    const message = `Olá, tenho interesse no ${product.name} no valor de ${product.price}!`
    
    const linkWhatsapp = `https://wa.me/${phoneBusiness}?text=${encodeURIComponent(message)}`;


  return (
    <section className="flex items-center justify-center mb-12 " >

        <div className="flex flex-col items-center w-90 rounded-3xl border border-zinc-700/50 bg-zinc-900/60 backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
            <div>
                <img className="w-80" src={product.image} alt={product.name} />
                <h2 className="text-xl font-medium mt-4 tracking-wide">{product.name}</h2>
                <p className=" text-gray-400 text-xs mt-1">{product.description}</p>
                <h3 className="font-bold text-2xl mt-2" >{product.price}</h3>
                <p className=" text-gray-400 text-xs">{product.priceInstallment}</p>
            </div>


            <button className="bg-green-700 w-80 py-2 rounded-lg mt-8">
                <Link className="flex flex-row justify-center gap-4 font-bold" to={linkWhatsapp} target="_blank">
                    Comprar
                     <FaWhatsapp className="text-2xl" />
                </Link>
            </button>

        </div>

    </section>
  )
}

export default ProductCard


