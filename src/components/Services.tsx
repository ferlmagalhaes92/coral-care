import { HeartHandshake, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Terapia Individual",
    description: "A terapia individual é um espaço seguro para compreender suas emoções, organizar pensamentos e desenvolver novas formas de lidar com a vida.",
    topics: ["Ansiedade", "Depressão", "Autoconhecimento", "Luto", "Relacionamentos", "Sobrecarga emocional", "Burnout"],
    icon: HeartHandshake,
  },
  {
    title: "Terapia Infantil",
    description: "O atendimento infantil busca oferecer um espaço seguro e lúdico onde os pequenos podem expressar suas emoções, medos e descobertas.",
    topics: ["Ansiedade", "Dificuldade em lidar com frustrações", "Agressividade", "Timidez Excessiva", "Rigidez cognitiva", "Dificuldades de aprendizagem ou comportamento escolar"],
    icon: Sparkles,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-2 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Como podemos te apoiar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm group"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Tópicos:</p>
                  <p className="text-sm text-muted-foreground">
                    {service.topics.join("; ")}
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