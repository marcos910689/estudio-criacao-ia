"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  Video, 
  Mic, 
  Users, 
  Palette, 
  Wand2, 
  Crown,
  ArrowRight,
  CheckCircle2,
  Zap,
  Star,
  TrendingUp
} from "lucide-react";

export default function Home() {
  // Array de recursos/funcionalidades principais do Império Estúdio
  const features = [
    {
      icon: Palette,
      title: "Editor Visual Completo",
      description: "Crie artes profissionais com nosso editor estilo Canva. Arraste, solte e personalize tudo."
    },
    {
      icon: Sparkles,
      title: "Geração com IA",
      description: "Transforme ideias em artes e vídeos incríveis usando comandos de texto simples."
    },
    {
      icon: Video,
      title: "Vídeos Automáticos",
      description: "Gere vídeos completos com roteiro, narração e personagens em minutos."
    },
    {
      icon: Mic,
      title: "Banco de Vozes IA",
      description: "Escolha entre vozes femininas, masculinas, infantis e profissionais para seus projetos."
    },
    {
      icon: Users,
      title: "Personagens e Mascotes",
      description: "Crie avatares realistas e mascotes exclusivos para sua marca."
    },
    {
      icon: Wand2,
      title: "Ferramentas Profissionais",
      description: "Remova fundos, melhore resolução, colorize e aplique filtros avançados."
    }
  ];

  // Planos de preços disponíveis
  const plans = [
    {
      name: "Free",
      price: "Grátis",
      description: "Perfeito para começar",
      features: [
        "Acesso a templates básicos",
        "Editor visual completo",
        "Exportação em HD",
        "3 vozes IA",
        "Marca d'água"
      ]
    },
    {
      name: "Pro Mensal",
      price: "R$ 99,99/mês",
      description: "Para criadores profissionais",
      features: [
        "Templates ilimitados",
        "Todas as vozes IA premium",
        "Geração de vídeos ilimitada",
        "Personagens exclusivos",
        "Sem marca d'água",
        "Suporte prioritário"
      ],
      popular: true // Marca este plano como o mais popular
    },
    {
      name: "Pro Anual",
      price: "R$ 839,90/ano",
      description: "Melhor custo-benefício",
      features: [
        "Tudo do Pro Mensal",
        "30% de desconto",
        "Conteúdos exclusivos mensais",
        "Criação personalizada",
        "Acesso antecipado a novidades"
      ]
    }
  ];

  // Casos de uso para diferentes públicos-alvo
  const useCases = [
    { icon: "🏪", title: "Lojas e Negócios", desc: "Crie anúncios e promoções diárias" },
    { icon: "📱", title: "Influenciadores", desc: "Conteúdo profissional para redes sociais" },
    { icon: "🎯", title: "Agências", desc: "Campanhas completas para clientes" },
    { icon: "🚀", title: "Empreendedores", desc: "Marketing visual sem complicação" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navbar - Fixo no topo com backdrop blur */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-blue-900/50 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo e nome da marca */}
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Império Estúdio
            </span>
          </div>
          
          {/* Menu de navegação (oculto em mobile) */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Recursos</a>
            <a href="#plans" className="text-gray-300 hover:text-blue-400 transition-colors">Planos</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre</a>
          </nav>
          
          {/* Botões de ação */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-blue-950/30">
              Entrar
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30">
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Seção principal de destaque */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="container mx-auto text-center max-w-5xl">
          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-800/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Plataforma completa de criação com IA</span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Seu Estúdio Criativo
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Completo com IA
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Crie artes, vídeos, personagens e conteúdos profissionais em minutos. 
            Tudo que você precisa para dominar as redes sociais e vender mais.
          </p>

          {/* CTAs principais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg px-8 py-6 group shadow-xl shadow-blue-500/30">
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-700 text-blue-400 hover:bg-blue-950/30 hover:border-blue-600 text-lg px-8 py-6">
              Ver Demonstração
            </Button>
          </div>

          {/* Benefícios rápidos */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Casos de uso por público-alvo */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-950/30 to-black border-blue-900/30 p-6 text-center hover:border-blue-700/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="font-bold text-blue-300 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-400">{useCase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Recursos principais */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="container mx-auto max-w-6xl">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recursos <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Poderosos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tudo que você precisa para criar conteúdo profissional
            </p>
          </div>

          {/* Grid de recursos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-950/30 to-black border-blue-900/30 p-6 hover:border-blue-700/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-300 mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Generation Section - Destaque para geração de vídeos */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo textual */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-800/50 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Geração Automática</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Vídeos Profissionais em <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Minutos</span>
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Selecione seu nicho, escolha um personagem, defina a voz e o tema. 
                Nossa IA cria automaticamente o roteiro, áudio e vídeo completo para você.
              </p>
              
              {/* Lista de benefícios */}
              <ul className="space-y-3 mb-8">
                {[
                  "Roteiros otimizados para conversão",
                  "Avatares realistas e personagens animados",
                  "Múltiplas vozes profissionais",
                  "Exportação em alta qualidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30">
                Criar Meu Primeiro Vídeo
              </Button>
            </div>
            
            {/* Placeholder visual para vídeo */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-950/50 to-black border-2 border-blue-800/50 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-blue-500/20">
                <Video className="w-20 h-20 text-blue-600" />
              </div>
              {/* Badge de resultado */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg shadow-blue-500/50">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                +300% engajamento
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Planos e preços */}
      <section id="plans" className="py-20 px-4 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="container mx-auto max-w-6xl">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planos para <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Todos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          {/* Grid de planos */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-950/50 to-black border-2 border-blue-600 relative shadow-2xl shadow-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-950/30 to-black border-blue-900/30'
              }`}>
                {/* Badge "Mais Popular" */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-blue-500/50">
                    Mais Popular
                  </div>
                )}
                
                {/* Nome e descrição do plano */}
                <h3 className="text-2xl font-bold text-blue-300 mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                
                {/* Preço */}
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{plan.price}</span>
                </div>
                
                {/* Lista de recursos incluídos */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botão de ação */}
                <Button className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-blue-950/50 hover:bg-blue-900/50 text-blue-300 border border-blue-800/50'
                } font-semibold`}>
                  {plan.name === "Free" ? "Começar Grátis" : "Assinar Agora"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Chamada final para ação */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <Crown className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Criar Conteúdo <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Imperial?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se a milhares de criadores que já transformaram seu negócio com o Império Estúdio
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg px-12 py-6 shadow-xl shadow-blue-500/30">
            Começar Gratuitamente Agora
          </Button>
        </div>
      </section>

      {/* Footer - Rodapé com links e informações */}
      <footer className="py-12 px-4 bg-black border-t border-blue-900/30">
        <div className="container mx-auto max-w-6xl">
          {/* Grid de colunas do footer */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Coluna 1: Branding */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Império Estúdio</span>
              </div>
              <p className="text-gray-500 text-sm">
                Seu estúdio criativo completo com inteligência artificial.
              </p>
            </div>
            
            {/* Coluna 2: Produto */}
            <div>
              <h4 className="font-bold text-blue-300 mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tutoriais</a></li>
              </ul>
            </div>
            
            {/* Coluna 3: Empresa */}
            <div>
              <h4 className="font-bold text-blue-300 mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            {/* Coluna 4: Legal */}
            <div>
              <h4 className="font-bold text-blue-300 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-blue-900/30 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Império Estúdio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
