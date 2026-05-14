import { Link } from "react-router-dom"

import FotoFachada from '../assets/fachada.jpeg'

const AboutSolution = () => {
  return (
    <section className="text-white lg:flex lg:flex-col lg:text-center " >
        <div className="pt-12 px-8 ">
            <Link className="bg-green-700 w-80 py-2 rounded-lg font-bold px-4" to="/">Voltar ao início</Link>
            <h2 className="text-2xl font-bold mt-12 mb-2">Conheça a Imports Solution</h2>
            <p>A Imports Solution nasceu com o propósito de oferecer tecnologia, confiança e um atendimento de qualidade para quem busca smartphones e produtos premium. Trabalhamos com foco em proporcionar uma experiência segura, transparente e prática, sempre trazendo os melhores modelos e condições para nossos clientes.</p>
        </div>

        <div className="px-8 pb-12 lg:flex lg:flex-col lg:text-center lg:items-center lg:justify-center">
            <h2 className="text-2xl font-bold mt-4 mb-2 pt-16" >Loja Física</h2>
            <p>Nossa loja física foi criada para oferecer um atendimento próximo, seguro e personalizado, proporcionando a melhor experiência para cada cliente que busca tecnologia, confiança e qualidade.</p>
            <p className="text-xs font-bold text-gray-400 mt-6 flex flex-row items-center gap-2">Estr. de Paciência, 3105 Rio de Janeiro, RJ 23580-250</p>
            <img src={FotoFachada} alt="Foto da Fachada da Loja Imports Solution" 
            className="w-svw mt-2 lg:w-80"/>
        </div>
    </section>
  )
}

export default AboutSolution