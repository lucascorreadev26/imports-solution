import { useState } from "react";
import { Link } from "react-router-dom";


//import imagens


const Header = () => {
    
    const [menuAberto, setMenuAberto] = useState(false);

    return (

    <header  className="bg-black text-white h-25 border-b border-gray-700 relative z-50" >
        
        <nav  className="max-w-6xl mx-auto px-4 flex items-center justify-between" >
            <Link to="/">
                <img 
                    src={`${import.meta.env.BASE_URL}logo.png`} 
                    alt="Logo loja Imports" 
                    className="w-30 h-30" 
                />
            </Link>

            <ul className="hidden md:flex gap-8 bg-black text-white absolute top-full left-0 w-full z-50" >
                <li><Link to="/">Início</Link></li>
                <li><Link to="/CatalogoIphones">Produtos</Link></li>
                <li><Link to="#">Sobre</Link></li>
                <li><Link to="#">Contato</Link></li>
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

                <Link to="/">Início</Link>
                <Link to="/CatalogoIphones">Catálogo</Link>
                <Link to="/AboutSolution">Sobre</Link>
                <Link to="/">Contato</Link>

            </div>  



        )}

    </header>
  )
}

export default Header;