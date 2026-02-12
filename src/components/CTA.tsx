import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          Cuidar da sua saúde mental é um passo importante.
        </h2>
        
        <p className="text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
          Estamos aqui para caminhar com você nessa jornada de autoconhecimento.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-lg transition-all duration-300 font-medium"
        >
          Agende sua consulta
        </Button>
      </div>
    </section>
  );
};