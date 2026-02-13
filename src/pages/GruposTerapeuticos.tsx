import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Sprout, ShieldCheck, ArrowRight } from "lucide-react";

const grupos = [
  {
    title: "Grupo de Ansiedade",
    description: "Espaço para compartilhar experiências e desenvolver estratégias coletivas para lidar com a ansiedade no dia a dia.",
    icon: Heart,
    schedule: "Quintas-feiras, 19h–20h30",
  },
  {
    title: "Grupo de Autoconhecimento",
    description: "Encontros voltados para a exploração da identidade pessoal, valores e propósito de vida.",
    icon: Sprout,
    schedule: "Terças-feiras, 18h–19h30",
  },
  {
    title: "Grupo de Relacionamentos",
    description: "Reflexões sobre vínculos afetivos, comunicação assertiva e dinâmicas interpessoais saudáveis.",
    icon: Users,
    schedule: "Segundas-feiras, 19h–20h30",
  },
  {
    title: "Grupo de Acolhimento",
    description: "Um espaço seguro e sem julgamentos para pessoas que estão passando por momentos difíceis e precisam de apoio emocional.",
    icon: ShieldCheck,
    schedule: "Quartas-feiras, 18h–19h30",
  },
];

const GruposTerapeuticos = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Grupos Terapêuticos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Os grupos terapêuticos são espaços de escuta e troca, onde cada participante pode compartilhar suas vivências com acolhimento e sigilo profissional.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <p className="text-sm font-display font-medium text-primary">
                    {grupo.schedule}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Quero participar
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
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
