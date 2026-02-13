import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          alt="Abstract organic coral forms" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
          Um espaço seguro para você <span className="text-primary italic">existir</span> com autenticidade.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Na Coral Psicologia, construímos um ambiente de escuta e cuidado para diferentes momentos da vida, com atendimentos presenciais e online.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-coral-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            Agende sua consulta
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg rounded-full border-primary/20 hover:bg-secondary/50 text-foreground transition-all duration-300"
          >
            Conheça o projeto
          </Button>
        </div>
      </div>
    </section>
  );
};