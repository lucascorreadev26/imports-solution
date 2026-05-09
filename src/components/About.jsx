import { Shield, Truck, CreditCard, Smartphone, Headset } from 'lucide-react';

const About = () => {
  return (
    <section className=' bg-neutral-900 flex flex-col justify-center items-center text-center pt-8 pb-16' > 

        <h2  className="text-2xl font-bold mt-4 tracking-wide text-white mt-12" >Por que escolher a Imports Solution?</h2>
        
        <div className='w-80 flex flex-col gap-4'>

            <div className="border-b border-y-neutral-500 pb-4 mt-4">
                <h2 className="text-xl font-medium mt-4 tracking-wide text-white flex flex-row gap-2 items-center">
                <Shield className="w-6 h-6 text-green-700" />
                    Garantia Total
                </h2>
                <p className=" text-gray-400 mt-1">Todos os produtos com garantia e suporte técnico especializado</p>
            </div>

            <div className="border-b border-y-neutral-500 pb-4">
                <h2 className="text-xl font-medium mt-4 tracking-wide text-white flex flex-row gap-2 items-center">
                    <Smartphone className="w-6 h-6 text-green-700" />
                    Tecnologia de Ponta
                </h2>
                <p className=" text-gray-400 mt-1">Modelos com as melhores especificações e recursos inovadores.</p>
            </div>

            <div className="pb-4">
                <h2 className="text-xl font-medium mt-4 tracking-wide text-white flex flex-row gap-2 items-center">
                <Headset className="w-6 h-6 text-green-700" />
                    Atendimento Especializado
                </h2>
                <p className=" text-gray-400 mt-1">Equipe especializada e dedicada para atender você.</p>
            </div>
        </div>
        
    </section>
  )
}

export default About