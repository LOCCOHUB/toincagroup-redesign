import { useState } from 'react';

const LabSection = () => {
  const [activeTab, setActiveTab] = useState('equipos');

  const tabs = [
    { id: 'equipos', label: 'Equipos y Aparatos' },
    { id: 'medicion', label: 'Medición y Pesaje' },
    { id: 'fungibles', label: 'Fungibles y Reactivos' },
  ];

  const tabContent = {
    equipos: {
      title: 'Con garantía de calidad y fiabilidad',
      description:
        'El criterio de Toinca es ser fieles a nuestros proveedores para obtener su mejor consideración y repercutirla en beneficio de nuestros clientes.',
      image: 'https://ext.same-assets.com/2935114617/877085767.jpeg',
      features: [
        'Distribuimos los equipos más robustos',
        'Instalamos y damos formación de uso',
        'Servicio técnico especializado',
        'Garantía de calidad en todos nuestros productos',
      ],
    },
    medicion: {
      title: '¿Qué necesita medir? ¿Qué necesita pesar?',
      description:
        'Disponemos de dispositivos para cualquier medición y balanzas para cualquier peso y precisión. Consúltenos, respuesta rápida garantizada.',
      image: 'https://ext.same-assets.com/2935114617/3923404722.jpeg',
      features: [
        'Balanzas de precisión',
        'Sistemas de medición avanzados',
        'Calibración profesional',
        'Equipos certificados',
      ],
    },
    fungibles: {
      title: 'Extensa gama de fungibles, Reactivos y Filtros',
      description:
        'Para su consumo diario seleccionamos los mejores productos. Si necesita muestras, no hay problema, eso le dará seguridad.',
      image: 'https://ext.same-assets.com/2935114617/1196752221.jpeg',
      features: [
        'Reactivos de alta calidad',
        'Filtros para laboratorio',
        'Muestras disponibles',
        'Productos certificados',
      ],
    },
  };

  return (
    <section id="control-seguridad" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div data-aos="fade-up" className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
            ÁREA DE LABORATORIO
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Especialistas en distribución de equipos y aparatos
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-lg text-gray-600">
            En Toinca nos esmeramos en colaborar con marcas líderes del mercado, para ofrecer a nuestros clientes
            equipos y dispositivos confiables.
          </p>
        </div>

        <div className="mt-12">
          {/* Tabs navigation */}
          <div data-aos="fade-up" className="mx-auto mb-8 flex max-w-2xl flex-wrap justify-center space-x-2 rounded-lg bg-gray-100 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div data-aos="fade-up" data-aos-delay="200" className="mt-8 overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="grid items-stretch md:grid-cols-2">
              <div className="relative order-2 min-h-[300px] overflow-hidden bg-indigo-50 md:order-1">
                <img
                  src={tabContent[activeTab as keyof typeof tabContent].image}
                  alt="Laboratorio equipamiento"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
              </div>
              <div className="order-1 flex flex-col justify-center space-y-6 p-6 md:order-2 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900">{tabContent[activeTab as keyof typeof tabContent].title}</h3>
                <p className="text-gray-600">{tabContent[activeTab as keyof typeof tabContent].description}</p>
                <ul className="space-y-3">
                  {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <a
                    href="#contacto"
                    className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-indigo-700"
                  >
                    Pedir presupuesto
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clientes y partners */}
        <div data-aos="fade-up" className="mt-16 rounded-xl bg-gray-50 p-8 shadow-md">
          <p className="mb-6 text-center text-sm font-medium uppercase text-gray-500">
            Nuestros clientes
          </p>
          <div className="text-center text-gray-600">
            <p className="mx-auto max-w-4xl">
              Salud Pública CyL, Sanidad Animal CyL, Consejería de Agricultura y Ganadería-Bienestar Animal,
              Instituto Tecnológico Agrario CyL, Hospitales y otros Laboratorios Privados confían en nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;