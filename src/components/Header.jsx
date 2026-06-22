import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";


//import imagens


const Header = () => {
    
    const [menuAberto, setMenuAberto] = useState(false);

    return (

    <header className="bg-black text-white border-b border-gray-700 relative z-50">
        
        <nav className="max-w-screen-2xl mx-auto px-6 h-30 flex items-center">
            <div className="flex-1">
                <Link to="/" className="flex items-center">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.webp`}
                        alt="Logo Loja Imports Solution"
                        className="h-30 w-30 mt-4"
                    />

                    <p className="title-logo hidden lg:block whitespace-nowrap">Imports Solution</p>
                </Link>
            </div>

            <ul className="hidden md:flex flex-1 justify-center items-center gap-10 text-white ml-16 md:ml-0">
                <li className="whitespace-nowrap hover:text-green-500"><Link to="/">Início</Link></li>
                <li className="whitespace-nowrap hover:text-green-500"><Link to="/CatalogoIphones">Produtos</Link></li>
                <li className="whitespace-nowrap hover:text-green-500"><Link to="/AboutSolution">Sobre Nós</Link></li>
                <li className="whitespace-nowrap hover:text-green-500"><Link to="/AboutSolution">Nossa Loja</Link></li>
                <li className="whitespace-nowrap hover:text-green-500"><Link to="/">Dúvidas</Link></li>
                <li className="whitespace-nowrap hover:text-green-500"><Link to="/">Contato</Link></li>
            </ul>

            <div className="hidden md:flex flex-1 justify-end">
                <button className="relative text-2xl hover:text-green-400 transition">
                    <Link to="/CatalogoIphones" >
                        <HiOutlineShoppingBag />
                    </Link>

                    {/* Quantidade */}
                    <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                     1
                    </span>
                </button>
            </div>

            <button className="md:hidden text-3xl mb-5 mr-4" onClick={() => setMenuAberto(!menuAberto)}>
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

                <Link to="/" onClick={() => setMenuAberto(false)}>Início</Link>
                <Link to="/CatalogoIphones" onClick={() => setMenuAberto(false)}>Catálogo</Link>
                <Link to="/AboutSolution" onClick={() => setMenuAberto(false)}>Sobre</Link>
                <Link to="/" onClick={() => setMenuAberto(false)}>Contato</Link>

            </div>  



        )}

    </header>
  )
}

export default Header;