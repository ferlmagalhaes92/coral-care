import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, ArrowRight } from "lucide-react";

const grupos = [
  {
    title: "Grupo focado em Desenvolvimento de Inteligência Emocional",
    description:
      "Um lugar onde se conversa sobre como lidar com motivações, tomada de decisões, habilidades de regulação e outros tópicos voltados para um melhor relacionamento com suas próprias emoções.",
    schedule: "Quartas-feiras",
    icon: Brain,
    confirmed: true,
  },
  {
    title: "Grupo focado em Casos de Cuidado Paliativo",
    description:
      "Um ambiente para identificação, acolhimento e compartilhamento de ideias e vivências de pessoas próximas ou pessoas em cuidado paliativo.",
    schedule: "Sextas-feiras",
    icon: Heart,
    confirmed: false,
  },
];

const GruposTerapeuticos = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Grupo Terapêutico
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No Grupo Terapêutico você trabalha a aceitação e o autoconhecimento por meio da relação com o outro.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {grupos.map((grupo, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <grupo.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">
                    {grupo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {grupo.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {grupo.schedule}
                    {!grupo.confirmed && (
                      <span className="ml-2 text-xs text-muted-foreground font-normal">(em breve)</span>
                    )}
                  </p>
                  {grupo.confirmed && (
                    <Button
                      variant="outline"
                      className="rounded-full border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Quero participar
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GruposTerapeuticos;
