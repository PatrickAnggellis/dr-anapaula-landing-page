import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselOptions
} from "@/components/ui/carousel";

// Interface para definir a estrutura dos slides
interface SlideProps {
  title: string;
  content: string;
  image: string;
}

const DoctorCarousel: React.FC = () => {
  // Dados dos slides - pode ser substituído por dados de uma API ou CMS
  const slides: SlideProps[] = [
    {
      title: "Dra. Maria Silva",
      content: `Especialista em medicina estética e pioneira no Método ExoAge. Com mais de 10 anos de experiência em procedimentos estéticos avançados, já realizou mais de 1000 procedimentos com excelência.
Participante da primeira turma de especialização em ExoAge, traz para seus pacientes o que há de mais moderno em rejuvenescimento facial.`,
      image: "/lovable-uploads/f3f39481-5478-40b5-9de1-737fdd2558d0.png"
    },
    {
      title: "Formação e Expertise",
      content: "Especialista em medicina estética pela renomada universidade internacional, com foco em técnicas regenerativas e rejuvenescimento facial. Certificada internacionalmente no Método ExoAge.",
      image: "/placeholder.svg"
    },
    {
      title: "Nossa Clínica",
      content: "Ambiente moderno e acolhedor, equipado com a mais alta tecnologia para proporcionar os melhores resultados em rejuvenescimento facial.",
      image: "/placeholder.svg"
    }
  ];

  // Opções do Carousel
  const carouselOptions: CarouselOptions = {
    align: "start",
    loop: true
  };

  return (
    <section 
      className="py-20 px-4 bg-white overflow-hidden" 
      aria-labelledby="doctor-carousel-title"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 
          id="doctor-carousel-title" 
          className="text-3xl md:text-4xl font-manrope font-bold text-exo-800 text-center mb-12"
        >
          Conheça Nossa Equipe
        </h2>
        
        <Carousel 
          className="w-full" 
          opts={carouselOptions}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="grid grid-cols-1 gap-8 items-center p-4">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-manrope font-bold text-exo-800">
                      {slide.title}
                    </h3>
                    <p className="text-lg text-exo-600 whitespace-pre-line">
                      {slide.content}
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default DoctorCarousel;