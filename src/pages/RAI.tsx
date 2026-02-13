import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Lightbulb, Target, ArrowRight } from "lucide-react";

const RAI = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            R.A.I
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Rede de Apoio Integrado — um programa que conecta acolhimento psicológico, orientação e acompanhamento contínuo para quem mais precisa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <BrainCircuit className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground">Acolhimento</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Escuta ativa e acompanhamento inicial para identificar as necessidades de cada pessoa.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground">Direcionamento</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Encaminhamento para o tipo de atendimento mais adequado, seja individual, em grupo ou social.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground">Acompanhamento</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suporte contínuo para garantir que cada pessoa receba o cuidado necessário ao longo do processo.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 bg-card rounded-2xl p-10 border border-border/40">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Como funciona?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              O R.A.I é um programa da Coral Psicologia que integra diferentes formas de atendimento em uma rede de apoio completa. A partir de uma primeira conversa, identificamos o melhor caminho para o seu cuidado — sempre com ética, respeito e responsabilidade.
            </p>
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-all duration-300"
            >
              Quero saber mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RAI;
