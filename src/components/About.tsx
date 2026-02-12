export const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-1 rounded-full bg-primary/30 mb-8 mx-auto" />
          
          <h2 className="text-3xl md:text-4xl font-serif text-foreground animate-fade-in-delay">
            Sobre a Coral Psicologia
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            <p>
              A Coral Psicologia é um projeto dedicado ao cuidado da saúde mental por meio de atendimentos éticos, personalizados e baseados em escuta atenta. Acreditamos que cada história é única e merece ser acolhida com respeito e responsabilidade técnica.
            </p>
            
            <p>
              Nosso trabalho é centrado na construção de um espaço seguro, onde cada pessoa possa refletir, elaborar suas experiências e fortalecer sua autonomia.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative organic shape */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};