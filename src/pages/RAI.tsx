import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const topics = [
  "Luto",
  "Adoecimento físico",
  "Conflitos no trabalho",
  "Angústias existenciais",
  "Sintomas de pânico",
  "Dificuldades familiares",
];

const RAI = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            RAI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O RAI é um atendimento em sessão única que tem o objetivo de acolher demandas emergenciais e pontuais, aliviando sofrimentos agudos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="bg-card rounded-2xl p-10 border border-border/40 space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">Tópicos</h2>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-all duration-300">
              Quero agendar
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
