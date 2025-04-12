import React from "react";

const Contact = () => {
  return (
    <section id="contacto" className="relative py-16 md:py-24">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>

      {/* Círculos decorativos en rojo muy suave */}
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-[#fde5e7] opacity-70 blur-3xl"></div>
      <div className="absolute left-0 top-20 -z-10 h-64 w-64 -translate-x-1/3 rounded-full bg-[#fde5e7] opacity-70 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Contáctanos
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-lg text-gray-600">
            Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución perfecta para tu negocio
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Información de contacto */}
            <div data-aos="fade-right" className="space-y-8">
              <div className="space-y-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900">Información de contacto</h3>
                <p className="max-w-md text-gray-600">
                  Estamos a tu disposición para resolver cualquier duda o consulta que puedas tener.
                  Nuestro equipo de profesionales te atenderá de manera personalizada.
                </p>
              </div>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fde5e7]">
                    <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Dirección</h4>
                    <p className="mt-1 text-gray-600">P.I. EL CERRO, C. de Guadarrama, 6, 40006 Segovia</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fde5e7]">
                    <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                    <p className="mt-1 text-gray-600">+34 921 41 21 41</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fde5e7]">
                    <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">toinca@toinca.com</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fde5e7]">
                    <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Horario</h4>
                    <p className="mt-1 text-gray-600">Lunes a Viernes, 8:30h - 19:00h</p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.5342727942023!2d-4.112999410054895!3d40.93296769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd413efdbb517ff3%3A0x7ab690392e2ee985!2sToinca!5e1!3m2!1ses!2ses!4v1742895405078!5m2!1ses!2ses"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Toinca"
                ></iframe>
              </div>
            </div>

            {/* Enviar correo */}
            <div data-aos="fade-left" className="mt-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900">¿Listo para contactarnos?</h3>
              <p className="text-gray-600">Envíanos un correo y te responderemos lo antes posible.</p>
              <div className="mt-6">
                <a
                  href="mailto:toinca@toinca.com"
                  className="inline-flex items-center justify-center rounded-md bg-[#de3542] px-5 py-3 text-base font-medium text-white shadow-lg transition-colors hover:brightness-90"
                >
                  Enviar correo
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;