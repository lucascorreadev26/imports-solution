import { useState } from "react";


//import imagens


const Header = () => {
    
    const [menuAberto, setMenuAberto] = useState(false);

    return (

    <header  className="bg-black text-white h-25 border-b border-gray-700 relative z-50" >
        
        <nav  className="max-w-6xl mx-auto px-4 flex items-center justify-between" >
            <a href="./index.html">
                <img src="/logo.png" alt="Logo loja Imports" className="w-30 h-30" />
            </a>

            <ul className="hidden md:flex gap-8 bg-black text-white absolute top-full left-0 w-full z-50" >
                <li><a href="#">Início</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>

        <button className="md:hidden text-3xl mb-5" onClick={() => setMenuAberto(!menuAberto)}>
            ☰
        </button>

        </nav>

        {menuAberto && (

              <div className="fixed inset-0 bg-black z-50 flex flex-col gap-5 pt-20 pl-8 text-2xl">

                <button
                className="absolute top-6 right-6 text-3xl"
                onClick={() => setMenuAberto(false)}
                >
                ✕
                </button>

                <a href="#inicio">Início</a>
                <a href="#produtos">Catálogo</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>

            </div>  



        )}

    </header>
  )
}

export default Header;