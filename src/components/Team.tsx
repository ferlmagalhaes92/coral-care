import psychologistImg from "@/assets/psychologist-1.jpg";

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Quem conduz o projeto
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 translate-x-2 translate-y-2" />
              <img 
                src={psychologistImg} 
                alt="Psicóloga" 
                className="w-full h-full object-cover rounded-full shadow-lg relative z-10"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                Dra. Ana Silva
              </h3>
              <p className="text-primary font-medium mb-4 font-display text-lg">
                CRP 06/12345
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Psicóloga com atuação em saúde emocional, ansiedade e desenvolvimento pessoal. Trabalho pautado na ética, escuta qualificada e construção de vínculo terapêutico, sempre buscando oferecer um ambiente acolhedor e transformador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};