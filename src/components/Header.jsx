import { useState } from "react";
import { Link } from "react-router-dom";


//import imagens


const Header = () => {
    
    const [menuAberto, setMenuAberto] = useState(false);

    return (

    <header  className="bg-black text-white h-25 border-b border-gray-700 relative z-50" >
        
        <nav  className="max-w-6xl sm:px-4 flex flex-row items-center justify-between" >
            <Link to="/" className="lg:ml-50">
                <img 
                    src={`${import.meta.env.BASE_URL}logo.png`} 
                    alt="Logo loja Imports" 
                    className="w-30 h-30" 
                />
            </Link>

            <ul className="hidden md:flex  items-center gap-8 text-white lg:gap-20" >
                <li><Link to="/">Início</Link></li>
                <li><Link to="/CatalogoIphones">Produtos</Link></li>
                <li><Link to="/AboutSolution">Sobre</Link></li>
                <li><Link to="/">Contato</Link></li>
            </ul>

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