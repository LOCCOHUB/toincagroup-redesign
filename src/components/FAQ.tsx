import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: '¿Por qué TOINCA?',
      answer: 'Porque nuestra fortaleza está en la experiencia. Desde 1986 hemos estado suministrando equipamiento y servicios de calidad a la industria alimentaria, construyendo relaciones duraderas con nuestros clientes.',
    },
    {
      question: '¿Qué nos ha hecho crecer?',
      answer: 'El rigor y la excelencia en nuestro trabajo. Nos comprometemos a ofrecer soluciones de alta calidad y un servicio excepcional, lo que nos ha permitido crecer y expandir nuestra oferta a lo largo de los años.',
    },
    {
      question: '¿Qué beneficios obtengo si contacto con TOINCA?',
      answer: 'Te escuchamos, detectamos de inmediato tu necesidad y te contestamos y servimos con rapidez. Nuestro enfoque personalizado garantiza que recibas exactamente lo que necesitas para tu negocio.',
    },
    {
      question: '¿Qué servicios ofrecemos?',
      answer: 'Agilidad en el seguimiento de los presupuestos y rapidez en el suministro de tu decisión de compra. Ofrecemos una gama completa de servicios, desde suministro de equipamiento hasta servicio técnico especializado.',
    },
    {
      question: 'Plazos de entrega',
      answer: 'Además de tienda profesional con horario ininterrumpido de 8.30 h a 19.30 h., disponemos de un amplio stock con servicio de reparto propio en un radio de 100 Km, garantizando entregas rápidas y eficientes.',
    },
    {
      question: '¿Garantías?',
      answer: 'Garantizamos la calidad de nuestros productos, pues solamente colaboramos con proveedores rigurosos, especialistas y reconocidos, con los que mantenemos una plena confianza mutua y que siempre nos dan seguridad por su apoyo.',
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-lg text-gray-600">
            Respondemos a las dudas más comunes sobre nuestros productos y servicios
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div data-aos="fade-up" data-aos-delay="150" className="divide-y divide-gray-200 rounded-xl bg-white shadow-lg">
            {faqItems.map((item, index) => (
              <div key={index} className="relative overflow-hidden">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="mr-8 font-semibold">{item.question}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200">
                    <svg
                      className={`h-5 w-5 text-[#de3542] transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-12 text-center">
          <p className="mb-4 text-lg text-gray-600">¿No encuentra respuesta a su pregunta?</p>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-lg bg-[#de3542] px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-[#de3542] focus:ring-offset-2"
          >
            Contáctanos
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Portfolio de productos */}
        <div data-aos="fade-up" className="mt-16 rounded-xl bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-center text-xl font-bold text-gray-900">Nuestro portfolio de productos</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-bold text-[#de3542]">Área Alimentaria</h4>
              <ul className="list-inside list-disc text-gray-600">
                <li>Maquinaria</li>
                <li>Equipamiento e Instalaciones</li>
                <li>Utillaje</li>
                <li>Consumibles</li>
                <li>Contenedores</li>
                <li>Vestuario y calzado</li>
                <li>Servicio Técnico</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-bold text-[#de3542]">Área de Laboratorio</h4>
              <ul className="list-inside list-disc text-gray-600">
                <li>Equipos</li>
                <li>Aparatos</li>
                <li>Dispositivos</li>
                <li>Fungibles</li>
                <li>Servicio Técnico</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-bold text-[#de3542]">Protección TopDogMfg</h4>
              <p className="text-gray-600">
                Distribuidores exclusivos de prendas de alto rendimiento y durabilidad para uso en contacto con Alimentos. Made in Canadá.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;