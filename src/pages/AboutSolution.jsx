import { Link } from "react-router-dom"

import FotoFachada from '../assets/fachada.jpeg'

const AboutSolution = () => {
  return (
    <section className="text-white" >
        <div className="pt-12 px-8 ">
            <Link className="bg-green-700 w-80 py-2 rounded-lg font-bold px-4" to="/">Voltar ao início</Link>
            <h2 className="text-2xl font-bold mt-12 mb-2">Conheça a Imports Solution</h2>
            <p>A Imports Solution atua há mais de 5 anos no mercado, oferecendo tecnologia, confiança e atendimento de qualidade para milhares de clientes.
            Ao longo da nossa trajetória, já atendemos mais de 15 mil clientes, sempre com foco em proporcionar a melhor experiência na compra de smartphones e produtos premium.</p>
            <p className="mt-4">Trabalhamos com transparência, compromisso e dedicação para entregar produtos de qualidade, preços competitivos e um atendimento próximo e personalizado.
            Mais do que vender celulares, buscamos conectar pessoas à tecnologia de forma segura, moderna e confiável.</p>
        </div>

        <div className="px-8 pb-12">
            <h2 className="text-2xl font-bold mt-4 mb-2 pt-16" >Loja Física</h2>
            <p>Nossa loja física foi criada para oferecer um atendimento próximo, seguro e personalizado, proporcionando a melhor experiência para cada cliente que busca tecnologia, confiança e qualidade.</p>
            <img src={FotoFachada} alt="Foto da Fachada da Loja Imports Solution" 
            className="w-svw mt-8"/>
        </div>
    </section>
  )
}

export default AboutSolution