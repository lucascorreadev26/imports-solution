import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-white flex flex-col justify-center items-center bg-neutral-900 pt-8" >
        <section className="flex flex-col gap-6 pl-8 lg:flex-row lg:gap-20">
            <div>
                <h2 className="text-xl font-bold">Imports Solution</h2>
                <p className="text-xs font-bold text-gray-400 pt-2 lg:w-70">Sua loja especializada em iPhones premium. Oferecemos os melhores modelos com garantia e atendimento de qualidade.</p>
                <p className="text-xs font-bold text-gray-400 pt-2">CNPJ: 61.865.279/0001-60</p>
            </div>

            <div>
                <h2 className="text-xl font-bold">Localização</h2>
                <p className="text-xs font-bold text-gray-400 pt-2 flex flex-row items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-700" />
                    Estr. de Paciência, 3105 Rio de Janeiro, RJ 23580-250
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold">Contatos</h2>
                <p className="text-xs font-bold text-gray-400 pt-2 flex flex-row items-center gap-2">
                    <Phone className="w-4 h-4 text-green-700" />
                    (021) 99265-9609
                </p>
                <p className="text-xs font-bold text-gray-400 pt-2 flex flex-row items-center gap-2">
                    <Mail className="w-4 h-4 text-green-700"/>
                    importsolution@gmail.com
                </p>

                <p className="text-xs font-bold text-gray-400 pt-2">
                    <a
                        href="https://www.instagram.com/importssolution"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                    >
                        <FaInstagram className="w-4 h-4 text-green-700" />
                        @importssolution
                    </a>
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold">Horário</h2>
                <p className="text-xs font-bold text-gray-400 pt-2 flex flex-row items-center gap-2">
                    <Clock className="w-4 h-4 text-green-700"/>
                    Seg - Sex: 09h às 18h
                </p>
                <p className="text-xs font-bold text-gray-400 pt-2 pl-6">Sábado: 09h às 16h</p>
                <p className="text-xs font-bold text-gray-400 pt-2 pl-6">Domingo: Fechado</p>
            </div>
        </section>

        <section className="flex flex-col justify-center items-center pt-8 pb-2"  > 
                <p className="text-sm font-bold text-gray-400 pt-2" >&copy; Imports Solution. Todos os direitos reservados.</p>
                <p className="text-sm font-bold text-gray-400 pt-2">Desenvolvido por <Link className=" hover:text-green-700 transition" to="https://www.linkedin.com/in/lucascorreadev/" target="_blank">Lucas Corrêa</Link></p>
        </section>


    </footer>
  )
}

export default Footer