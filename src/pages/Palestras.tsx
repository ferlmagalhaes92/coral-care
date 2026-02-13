import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Building2, GraduationCap, ArrowRight } from "lucide-react";

const palestras = [
  {
    title: "Saúde Mental no Trabalho",
    description: "Palestra voltada para empresas e equipes que desejam promover um ambiente de trabalho mais saudável e acolhedor.",
    audience: "Empresas e organizações",
    icon: Building2,
  },
  {
    title: "Inteligência Emocional",
    description: "Como identificar, compreender e gerenciar emoções de forma saudável no cotidiano pessoal e profissional.",
    audience: "Público geral",
    icon: Mic,
  },
  {
    title: "Ansiedade na Juventude",
    description: "Reflexões e ferramentas práticas para jovens e educadores lidarem com a ansiedade no contexto escolar e universitário.",
    audience: "Instituições de ensino",
    icon: GraduationCap,
  },
];

const Palestras = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Palestras
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Levamos a psicologia para além do consultório. Nossas palestras abordam temas relevantes de forma acessível e acolhedora.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {palestras.map((palestra, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <palestra.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">
                    {palestra.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {palestra.description}
                  </p>
                  <p className="text-sm font-display font-medium text-primary">
                    {palestra.audience}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Solicitar palestra
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

export default Palestras;
