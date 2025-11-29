import Image from "next/image";

export default function Home() {
  const whatsappLink = "https://wa.me/5511947266858";
  const whatsappMessage = "https://wa.me/5511947266858?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";
  const phoneNumber = "(11) 2851-1872";
  const whatsappNumber = "(11) 94726-6858";
  const email = "plannervidros@gmail.com";
  const instagram = "@plannervidros";
  const instagramLink = "https://instagram.com/plannervidros";
  const address = "Av. Tomás Rabelo e Silva, 221 – Freguesia do Ó, São Paulo – SP";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Av.+Tom%C3%A1s+Rabelo+e+Silva,+221+-+Freguesia+do+%C3%93,+S%C3%A3o+Paulo+-+SP";

  const services = [
    {
      title: "Box para Banheiro",
      description: "Box em vidro temperado com perfis de alumínio. Modelos de correr, abrir e incolor ou fumê.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    },
    {
      title: "Portas de Vidro",
      description: "Portas de correr, pivotantes e de abrir. Vidro temperado com ferragens de alta qualidade.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    },
    {
      title: "Janelas de Vidro",
      description: "Janelas em vidro temperado e alumínio. Melhor vedação, isolamento térmico e acústico.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    },
    {
      title: "Guarda-corpo",
      description: "Guarda-corpo em vidro para sacadas, escadas e mezaninos. Segurança com design moderno.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    },
    {
      title: "Espelhos Orgânicos",
      description: "Espelhos orgânicos e sob medida para banheiros, quartos e salões. Formatos exclusivos e modernos.",
      image: "/espelho-organico.webp",
    },
    {
      title: "Coberturas de Vidro",
      description: "Coberturas e toldos em vidro laminado para garagens, varandas e áreas gourmet.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    },
    {
      title: "Fechamentos",
      description: "Fechamento de varandas, sacadas e áreas externas. Aproveite melhor seu espaço.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    },
    {
      title: "Serralheria em Alumínio",
      description: "Portas, janelas e estruturas em alumínio. Durabilidade e acabamento impecável.",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    },
  ];

  const galleryItems = [
    { title: "Box de vidro", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80" },
    { title: "Guarda-corpo de vidro", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
    { title: "Porta pivotante", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" },
    { title: "Espelho orgânico", image: "/espelho-organico.webp" },
    { title: "Espelho decorativo", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80" },
    { title: "Cobertura de vidro", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" },
  ];

  const features = [
    { icon: "⚡", title: "Atendimento Rápido", desc: "Respondemos em minutos pelo WhatsApp" },
    { icon: "📐", title: "Sob Medida", desc: "Projetos personalizados para seu espaço" },
    { icon: "🛡️", title: "Garantia", desc: "Materiais certificados e mão de obra garantida" },
    { icon: "🚚", title: "Entrega e Instalação", desc: "Equipe própria para instalação profissional" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          {/* Top bar */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-gray-100">
            <div className="flex items-center gap-6 text-gray-600">
              <a href={`tel:+551128511872`} className="flex items-center gap-2 hover:text-teal-500 transition-colors">
                <span>📞</span> {phoneNumber}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <span>📱</span> {whatsappNumber}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-teal-500 transition-colors">
                <span>✉️</span> {email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                Instagram
              </a>
            </div>
          </div>
          {/* Main nav */}
          <div className="flex items-center justify-between py-2 md:py-4">
            <a href="#inicio" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-lg">P</span>
              </div>
              <div>
                <span className="text-base md:text-xl font-bold text-gray-800">Planner</span>
                <span className="text-base md:text-xl font-bold text-teal-500">Vidros</span>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Serviços</a>
              <a href="#galeria" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Galeria</a>
              <a href="#contato" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Contato</a>
            </nav>
            <a
              href={whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="hidden sm:inline">Orçamento Grátis</span>
              <span className="sm:hidden">Orçamento</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
            alt="Interior moderno com vidro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Atendimento imediato via WhatsApp
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Vidraçaria em Geral e Serralheria em Alumínio
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Box, portas, janelas, guarda-corpo, espelhos e muito mais.
              Projetos sob medida com qualidade e preço justo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-1 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Solicitar Orçamento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl transition-all text-lg"
              >
                Nossos Serviços
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Atendemos Freguesia do Ó e toda região de São Paulo</span>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-6 bg-gradient-to-r from-teal-500 to-teal-400">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 text-white py-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-teal-100 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Projeto de vidraçaria"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-800">100%</p>
                    <p className="text-gray-600">Clientes satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
                Qualidade e confiança em cada projeto
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A <strong>Planner Vidros</strong> é uma vidraçaria completa em São Paulo,
                especializada em vidros temperados, laminados e serralheria em alumínio.
                Com mais de uma década no mercado, já realizamos centenas de projetos
                residenciais e comerciais.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nosso diferencial é o atendimento personalizado: do primeiro contato
                até a instalação final, você conta com uma equipe dedicada a entregar
                o melhor resultado para seu espaço.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Vidros temperados e laminados</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Serralheria em alumínio</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Orçamento sem compromisso</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Instalação profissional</span>
                </div>
              </div>
              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Fale Conosco
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-lg">
              Trabalhamos com uma ampla variedade de soluções em vidro e alumínio
              para residências e empresas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <a
                    href={whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-500 hover:text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all"
                  >
                    Pedir orçamento
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Precisa de um orçamento?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato agora pelo WhatsApp e receba um orçamento
            gratuito em minutos. Sem compromisso!
          </p>
          <a
            href={whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-5 rounded-xl transition-all hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 text-xl"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Galeria de Projetos
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça alguns dos nossos trabalhos realizados em São Paulo.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-teal-300 text-sm">Ver projeto</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Contato</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
                Fale com a Planner Vidros
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Estamos prontos para atender você. Entre em contato por qualquer
                um dos nossos canais e solicite um orçamento sem compromisso.
              </p>
              <div className="space-y-4">
                <a href={whatsappMessage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors group border border-teal-100">
                  <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">WhatsApp</p>
                    <p className="text-teal-600 font-medium">{whatsappNumber}</p>
                  </div>
                </a>
                <a href={`tel:+551128511872`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-200">
                  <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">Telefone</p>
                    <p className="text-gray-600 font-medium">{phoneNumber}</p>
                  </div>
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-200">
                  <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">E-mail</p>
                    <p className="text-gray-600 font-medium">{email}</p>
                  </div>
                </a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors group border border-red-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">Instagram</p>
                    <p className="text-pink-600 font-medium">{instagram}</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-2xl p-8 h-full border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Nosso Endereço</p>
                    <p className="text-gray-600 mt-1">{address}</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4!2d-46.7!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0NsKwNDInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  Ver rota no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo e descrição */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Planner</span>
                  <span className="text-2xl font-bold text-teal-400">Vidros</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Vidraçaria e serralheria em alumínio em São Paulo.
                Qualidade, confiança e atendimento personalizado há mais de 10 anos.
              </p>
              <div className="flex gap-3">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
              <ul className="space-y-3">
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Box para Banheiro</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Portas e Janelas</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Guarda-corpo</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Espelhos sob Medida</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Coberturas de Vidro</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Serralheria em Alumínio</a></li>
              </ul>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#inicio" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Início</a></li>
                <li><a href="#sobre" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Serviços</a></li>
                <li><a href="#galeria" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Galeria</a></li>
                <li><a href="#contato" className="hover:text-teal-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Contato</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-white font-medium">{whatsappNumber}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p className="text-white font-medium">{phoneNumber}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="text-white font-medium text-sm">{email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Endereço</p>
                    <p className="text-white font-medium text-sm">{address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="text-teal-400">Planner Vidros</span> – Vidraçaria em Geral. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Feito com</span>
                <span className="text-red-500">❤</span>
                <span>em São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href={whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-teal-500 hover:bg-teal-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:scale-110 group"
        aria-label="Chamar no WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale conosco!
        </span>
      </a>
    </div>
  );
}
