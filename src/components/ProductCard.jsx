import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const phoneBusiness = 5521992659609;

  const message = `Olá, tenho interesse no ${product.name} na cor ${selectedColor.name} no valor de ${selectedColor.price}!`;

  const linkWhatsapp = `https://wa.me/${phoneBusiness}?text=${encodeURIComponent(message)}`;

  return (
    <section className="flex items-center justify-center mb-12">
      <div className="flex flex-col items-center w-80 rounded-3xl pb-4 border border-zinc-700/50 bg-zinc-900/60 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
        <div className="flex flex-col items-center">
          
         <div className="flex justify-center items-center w-80 h-80">
          <img
            key={selectedColor.image}
            src={selectedColor.image}
            alt={product.name}
            className="w-full object-contain animate-fade-zoom"
          />
         </div>
          
          <div className="w-75 flex flex-col pl-3 pr-3">
            <h2 className="text-xl font-medium tracking-wide">{product.name}</h2>
            <p className="text-gray-400 text-xs mt-1">{product.description}</p>

            {/* CORES */}
            <div className="flex items-center gap-2 mt-2">
              {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-4 h-4 rounded-full border transition-all duration-300 ease-in-out
                ${
                  selectedColor.name === color.name
                  ? "border-white scale-110"
                  : "border-zinc-600"
                }
                `}
                style={{ backgroundColor: color.color }}
                title={color.name}
              />

              ))}
            </div>
            <p className="text-gray-400 text-xs mt-2">Dinheiro ou Pix</p>
            <h3 className="font-bold text-2xl ">{selectedColor.price}</h3>
            <p className="text-gray-400 text-xs">{selectedColor.priceInstallment}</p>
          </div>
        </div>

        <Link
          className="flex flex-row justify-center gap-4 font-bold bg-green-700 w-70 py-2 rounded-lg mt-8  hover:bg-black hover:text-white hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300"
          to={linkWhatsapp}
          target="_blank"
        >
          Comprar
          <FaWhatsapp className="text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;