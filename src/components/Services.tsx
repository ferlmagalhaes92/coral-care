import { 
  HeartHandshake, 
  Monitor, 
  MapPin, 
  BrainCircuit, 
  CloudSun, 
  Users, 
  Sparkles 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Psicoterapia individual",
    description: "Um espaço exclusivo para você se ouvir e se compreender.",
    icon: HeartHandshake,
  },
  {
    title: "Atendimento online",
    description: "Cuidado e acolhimento onde você estiver, com segurança.",
    icon: Monitor,
  },
  {
    title: "Atendimento presencial",
    description: "Um ambiente físico preparado para o seu conforto.",
    icon: MapPin,
  },
  {
    title: "Ansiedade e estresse",
    description: "Ferramentas para lidar com a pressão do dia a dia.",
    icon: CloudSun,
  },
  {
    title: "Depressão",
    description: "Acolhimento para momentos de dor e reconstrução de sentido.",
    icon: BrainCircuit,
  },
  {
    title: "Relacionamentos",
    description: "Compreensão de vínculos e dinâmicas interpessoais.",
    icon: Users,
  },
  {
    title: "Autoconhecimento",
    description: "Desenvolvimento pessoal e fortalecimento da autonomia.",
    icon: Sparkles,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-2 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Como podemos te apoiar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};