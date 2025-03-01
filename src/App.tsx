import { useEffect } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import Header from "@/components/Header";
import DoctorCarousel from "@/components/DoctorCarousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Medal, Award, Check, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <WelcomeModal />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-exo-600 bg-exo-50 rounded-full fade-in">
              Método Exclusivo de Rejuvenescimento
            </span>
            <h1 className="text-4xl md:text-6xl font-manrope font-bold text-exo-800 fade-in">
              Transforme Sua Pele com o<br />Método ExoAge
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-exo-600 fade-in">
              Descubra o poder da medicina regenerativa com o método mais avançado em rejuvenescimento facial
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 fade-in">
              <a
                href="#agendar"
                className="w-full sm:w-auto px-8 py-3 bg-exo-800 text-white rounded-lg font-medium hover:bg-exo-700 transition-colors"
              >
                Agende sua Avaliação
              </a>
              <a
                href="#método"
                className="w-full sm:w-auto px-8 py-3 border border-exo-200 text-exo-800 rounded-lg font-medium hover:bg-exo-50 transition-colors"
              >
                Conheça o Método
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Método ExoAge Section */}
      <section className="py-20 px-4 bg-white" id="método">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 mb-6">
              Método ExoAge: Revolucionando o Rejuvenescimento
            </h2>
            <p className="text-lg text-exo-600 max-w-3xl mx-auto">
              Uma abordagem exclusiva que combina ciência avançada e tecnologia de ponta para resultados extraordinários
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel p-6 rounded-xl fade-in">
              <Medal className="w-12 h-12 text-exo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Primeira Turma</h3>
              <p className="text-exo-600">Participação exclusiva na primeira turma de especialização ExoAge</p>
            </div>
            <div className="glass-panel p-6 rounded-xl fade-in">
              <Star className="w-12 h-12 text-exo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expertise Diferenciada</h3>
              <p className="text-exo-600">Profissionais altamente capacitados com formação internacional</p>
            </div>
            <div className="glass-panel p-6 rounded-xl fade-in">
              <Award className="w-12 h-12 text-exo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Método Exclusivo</h3>
              <p className="text-exo-600">Protocolo personalizado baseado em medicina regenerativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Carousel Section */}
        <DoctorCarousel />

      {/* Serviços Section */}
      <section className="py-20 px-4 bg-exo-50" id="serviços">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 text-center mb-12 fade-in">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ExoAge",
                description: "Tratamento exclusivo de rejuvenescimento com tecnologia avançada",
                featured: true,
              },
              {
                title: "Peelings Químicos",
                description: "Renovação celular e melhoria da textura da pele",
              },
              {
                title: "Mesoterapia",
                description: "Nutrição profunda e revitalização da pele",
              },
              {
                title: "Microagulhamento",
                description: "Estímulo natural da produção de colágeno",
              },
              {
                title: "Bioestimuladores",
                description: "Rejuvenescimento profundo e duradouro",
              },
              {
                title: "Toxina Botulínica",
                description: "Suavização de linhas de expressão",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`p-6 transition-all hover:shadow-lg fade-in ${
                  service.featured ? "border-2 border-exo-600" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-exo-600 mb-4">{service.description}</p>
                {service.featured && (
                  <Badge className="bg-exo-600">Tratamento Exclusivo</Badge>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Escolher Section */}
      <section className="py-20 px-4 bg-white" id="por-que-escolher">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 text-center mb-12 fade-in">
            Por Que Escolher o Método ExoAge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-exo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
                  <p className="text-exo-600">Transformações visíveis desde as primeiras sessões</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-exo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tecnologia Avançada</h3>
                  <p className="text-exo-600">Equipamentos de última geração para resultados superiores</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tratamento Personalizado</h3>
                  <p className="text-exo-600">Protocolo adaptado às necessidades individuais</p>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-xl fade-in">
              <blockquote className="text-lg italic text-exo-600 mb-4">
                "O Método ExoAge transformou minha pele completamente. Os resultados superaram todas as minhas expectativas!"
              </blockquote>
              <p className="font-semibold">Maria Silva</p>
              <p className="text-sm text-exo-500">Cliente há 6 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Expertise Section */}
      <section className="py-20 px-4 bg-exo-50" id="expertise">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 mb-6">
                Nossa Expertise
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Medal className="w-6 h-6 text-exo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Primeira Turma ExoAge</h3>
                    <p className="text-exo-600">Certificação internacional em medicina regenerativa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-exo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">+1000 Procedimentos</h3>
                    <p className="text-exo-600">Experiência comprovada em rejuvenescimento facial</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-xl text-center fade-in">
              <h3 className="text-2xl font-semibold mb-4">Certificações</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/50 rounded-lg">
                  <p className="font-semibold">ExoAge</p>
                  <p className="text-sm text-exo-600">Certificação Internacional</p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg">
                  <p className="font-semibold">Medicina Estética</p>
                  <p className="text-sm text-exo-600">Pós-graduação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Resultados */}
      <section className="py-20 px-4 bg-white" id="resultados">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 text-center mb-12 fade-in">
            Resultados Transformadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="overflow-hidden fade-in">
                <div className="relative aspect-[4/3] bg-exo-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-exo-600">Antes / Depois {index}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold mb-2">Resultado após {index * 2} sessões</p>
                  <p className="text-sm text-exo-600">
                    "Resultados incríveis com o Método ExoAge! Superou minhas expectativas."
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-exo-50" id="faq">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 text-center mb-12 fade-in">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4 fade-in">
            {[
              {
                question: "O que �� o Método ExoAge?",
                answer: "O Método ExoAge é um tratamento exclusivo de rejuvenescimento facial que combina medicina regenerativa e tecnologia avançada para resultados superiores e duradouros."
              },
              {
                question: "Quanto tempo dura cada sessão?",
                answer: "As sessões do Método ExoAge têm duração média de 60 a 90 minutos, dependendo do protocolo personalizado desenvolvido para cada paciente."
              },
              {
                question: "Quando verei os resultados?",
                answer: "Os primeiros resultados são visíveis após a primeira sessão, com melhorias progressivas ao longo do tratamento. Resultados completos são observados após 3-4 sessões."
              },
              {
                question: "Existe tempo de recuperação?",
                answer: "O tempo de recuperação é mínimo, permitindo o retorno às atividades normais no mesmo dia. Pode haver uma leve vermelhidão que desaparece em 24-48 horas."
              },
              {
                question: "O tratamento é doloroso?",
                answer: "O procedimento é realizado com anestesia local e técnicas minimamente invasivas, garantindo máximo conforto durante todo o processo."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Seção de Contato Melhorada */}
      <section className="py-20 px-4 bg-white" id="contato">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 text-center mb-12 fade-in">
            Entre em Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 rounded-xl fade-in">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-exo-800 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-exo-200 focus:ring-2 focus:ring-exo-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-exo-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-exo-200 focus:ring-2 focus:ring-exo-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-exo-800 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg border border-exo-200 focus:ring-2 focus:ring-exo-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-exo-800 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-exo-200 focus:ring-2 focus:ring-exo-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button className="w-full bg-exo-800 text-white py-3 rounded-lg font-medium hover:bg-exo-700 transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="space-y-8 fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-4">Localização</h3>
                <div className="aspect-[4/3] bg-exo-100 rounded-lg mb-4">
                  {/* Aqui você pode adicionar um mapa real usando Google Maps ou outra solução */}
                  <div className="w-full h-full flex items-center justify-center text-exo-600">
                    Mapa da Localização
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-exo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-exo-600">Rua Example, 123 - São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-exo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-exo-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-exo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-exo-600">contato@exoage.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
};

export default App;