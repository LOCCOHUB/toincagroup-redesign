const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              TOINCA<span className="text-[#de3542]">GROUP</span>
            </h2>
            <p className="max-w-xs text-gray-400">
              Suministros integrales para la industria alimentaria desde 1986. Calidad, experiencia y servicio
              personalizado.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Industria Alimentaria', href: '#industria-alimentaria' },
                { label: 'Área de Laboratorio', href: '#laboratorio' },
                { label: 'Protección Top Dog', href: '#protección' },
                { label: 'Servicio Técnico', href: '#servicio-técnico' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="inline-block text-gray-400 transition-colors hover:text-[#de3542]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">P.I. EL CERRO, C. de Guadarrama, 6, 40006 Segovia</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+34 921 41 21 41</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">toinca@toinca.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 py-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Toinca Group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;