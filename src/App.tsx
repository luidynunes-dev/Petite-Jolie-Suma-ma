import { useState } from 'react';
import { Heart, ArrowRight, Eye, Zap, Sparkles, Gift, Truck, ArrowLeft } from 'lucide-react';
import { products } from './data';

export default function App() {
  const [view, setView] = useState<'home' | 'catalog'>('home');

  const handleWhatsAppClick = (productName?: string, productPrice?: number) => {
    let message = "Olá! Gostaria de falar com uma consultora sobre as bolsas da Petite Jolie Sumaúma.";
    if (productName && productPrice !== undefined) {
      message = `Olá, vim do catálogo e tenho interesse na ${productName} de R$ ${productPrice.toFixed(2).replace('.', ',')}.`;
    } else if (productName) {
      message = `Olá, vim do catálogo e tenho interesse na ${productName}.`;
    }
    const whatsappUrl = `https://wa.me/559294951875?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigateTo = (newView: 'home' | 'catalog') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] font-sans selection:bg-pink-100 selection:text-pink-600 text-neutral-900 pb-20">
      
      {/* HEADER */}
      <header className="py-6 px-4 max-w-5xl mx-auto grid grid-cols-3 items-center">
        <div className="justify-self-start hidden sm:block"></div>
        <div className="justify-self-center col-span-2 sm:col-span-1">
          <button onClick={() => navigateTo('home')}>
            <img 
              src="https://petitejolie.vtexassets.com/assets/vtex/assets-builder/petitejolie.petitejolieio/6.1.61/svg/logo-desk___fbe3757c82bfa1cca375c8a67dcec8d4.svg" 
              alt="Petite Jolie" 
              className="h-8 sm:h-10 w-auto"
            />
          </button>
        </div>
        <div className="justify-self-end">
          <button className="flex items-center gap-2 bg-white px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm font-medium border border-neutral-200 shadow-sm hover:border-pink-300 transition-colors whitespace-nowrap">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600 fill-pink-600" />
            Coleção 2026
          </button>
        </div>
      </header>

      {/* DYNAMIC VIEW */}
      {view === 'home' ? (
        <main className="max-w-2xl mx-auto px-4 mt-8 lg:mt-12 flex flex-col items-center text-center animate-in fade-in duration-500">
          
          <h1 className="text-[2.5rem] sm:text-6xl md:text-[4.5rem] font-serif leading-[1.1] tracking-tight text-neutral-900 mb-6">
            <span className="block mb-1">Encontre sua bolsa</span>
            <span className="block italic text-neutral-800 font-medium">perfeita</span>
            <span className="block text-[2rem] sm:text-5xl md:text-[3.5rem] mt-1 sm:mt-2">aqui na Petite Jolie.</span>
          </h1>
          
          <p className="text-neutral-500 text-lg md:text-xl max-w-sm mx-auto mb-10 leading-relaxed font-sans">
            Descubra a nova coleção com cores vibrantes e o estilo único que só a J-Lastic proporciona.
          </p>

          {/* FEATURED CAROUSEL CARD */}
          <div className="w-full bg-[#1A1A1A] rounded-[2rem] p-6 sm:p-10 mb-8 relative overflow-hidden text-left shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center border border-pink-500/50 text-pink-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 relative">
                <span className="absolute inset-0 bg-pink-500/10 rounded-full"></span>
                CURADORIA EXCLUSIVA
              </div>
              
              <h2 className="text-3xl sm:text-[2.5rem] font-serif text-white mb-2 tracking-tight leading-tight">
                 Modelos selecionados
                 <span className="block italic text-pink-500 mt-1">pra você arrasar</span>
              </h2>
              
              <p className="text-neutral-400 text-sm sm:text-base font-medium mb-8">
                Bolsas · Lançamentos · Acessórios
              </p>

              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className="relative flex-shrink-0 w-36 sm:w-40 aspect-square rounded-2xl overflow-hidden group">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                      <span className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-md line-clamp-1 shadow-sm text-center">
                        {product.name.split(' Petite Jolie ')[1] || product.name.replace(' Petite Jolie', '')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CTA */}
          <button 
            onClick={() => navigateTo('catalog')}
            className="w-full bg-[#E6005C] hover:bg-[#C2004D] text-white rounded-[1.25rem] py-5 text-base sm:text-lg font-bold tracking-wide transition-all transform hover:scale-[1.01] shadow-[0_8px_30px_-6px_rgba(230,0,92,0.5)] flex items-center justify-center gap-3 mb-6"
          >
            ENCONTRAR MINHA BOLSA
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* SECONDARY BUTTONS */}
          <div className="flex gap-4 w-full mb-12">
            <button 
              onClick={() => navigateTo('catalog')}
              className="flex-1 bg-white hover:bg-neutral-50 px-4 py-4 rounded-2xl border border-neutral-200 text-neutral-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4 text-neutral-600" />
              Ver catálogo
            </button>
            <button 
              onClick={() => navigateTo('catalog')}
              className="flex-1 bg-white hover:bg-neutral-50 px-4 py-4 rounded-2xl border border-neutral-200 text-neutral-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Zap className="w-4 h-4 text-[#E6005C]" fill="currentColor" />
              Lançamentos
            </button>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
            {[
              { icon: Sparkles, title: "J-LASTIC", sub: "exclusivo" },
              { icon: Gift, title: "EMBALAGEM", sub: "presente" },
              { icon: Truck, title: "ENTREGA", sub: "rápida" }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-neutral-200 shadow-sm">
                <feature.icon className="w-5 h-5 text-[#E6005C] mb-2 sm:mb-3" />
                <h3 className="font-bold text-[10px] sm:text-xs text-neutral-900 tracking-wider uppercase mb-0.5">{feature.title}</h3>
                <p className="text-[10px] sm:text-xs text-neutral-500">{feature.sub}</p>
              </div>
            ))}
          </div>

        </main>
      ) : (
        <main className="max-w-4xl mx-auto px-4 mt-8 lg:mt-12 w-full animate-in fade-in duration-500">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center text-neutral-500 font-bold hover:text-neutral-900 transition-colors bg-white px-4 py-2 border border-neutral-200 rounded-full hover:bg-neutral-50 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </button>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 flex items-center gap-2 m-0 flex-1 justify-center relative right-10">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Nossa Curadoria
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="aspect-square bg-neutral-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-pink-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                      Novo
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg text-neutral-900 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-pink-50 text-pink-700 text-xs font-bold px-2.5 py-1 rounded-md">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  {product.description && (
                    <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={() => handleWhatsAppClick(product.name, product.price)}
                      className="w-full py-3.5 bg-neutral-900 hover:bg-pink-600 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Quero esta bolsa
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
