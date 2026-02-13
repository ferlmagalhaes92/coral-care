import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "A Coral Psicologia me ajudou a compreender melhor meus sentimentos e enfrentar momentos difíceis com mais clareza.",
    author: "Paciente",
  },
  {
    content: "Sinto-me verdadeiramente acolhida em cada sessão. É um espaço onde posso ser eu mesma sem julgamentos.",
    author: "Paciente",
  },
  {
    content: "O atendimento online funciona perfeitamente para minha rotina, mantendo a mesma qualidade e conexão do presencial.",
    author: "Paciente",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F1EC] relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Relatos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/50 border-none shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-8 px-6 pb-6 relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
                <p className="text-foreground/80 italic text-lg leading-relaxed mb-6 pt-6 relative z-10 font-display">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-primary/40" />
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {testimonial.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};