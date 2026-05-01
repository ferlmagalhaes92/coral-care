import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Rennan Alves",
    role: "Psicólogo — Abordagem Centrada na Pessoa",
    bio: "Atua com escuta empática e não diretiva, criando um espaço seguro para que cada pessoa possa se reconectar com sua própria capacidade de crescimento e autoconhecimento.",
    photo: "/equipe/rennan-alves.jpeg",
    videoUrl: null,
  },
  {
    name: "Amanda França",
    role: "Psicóloga — TCC",
    bio: "Trabalha com Terapia Cognitivo-Comportamental, auxiliando pessoas a identificar e transformar padrões de pensamento que impactam o bem-estar emocional e a qualidade de vida.",
    photo: "/equipe/amanda-franca.jpeg",
    videoUrl: null,
  },
  {
    name: "Sergio Augusto",
    role: "Psicólogo — Gestalt-terapia",
    bio: "Utiliza a Gestalt-terapia para trabalhar o aqui e agora, favorecendo o autoconhecimento, a integração das experiências e o desenvolvimento de relações mais autênticas.",
    photo: "/equipe/sergio-augusto.jpeg",
    videoUrl: null,
  },
  {
    name: "Mariana Viana",
    role: "Psicóloga — Psicanálise",
    bio: "Trabalha na perspectiva psicanalítica, explorando os processos inconscientes que moldam comportamentos, afetos e vínculos, em um espaço de escuta e elaboração.",
    photo: "/equipe/mariana-viana.jpeg",
    videoUrl: null,
  },
  {
    name: "Iolanda Ketelen",
    role: "Psicóloga — TCC",
    bio: "Com base na Terapia Cognitivo-Comportamental, apoia pessoas no enfrentamento de ansiedade, depressão e outros desafios emocionais, promovendo mudanças concretas no cotidiano.",
    photo: "/equipe/iolanda-ketelen.jpeg",
    videoUrl: null,
  },
  {
    name: "Fabrício Rezende",
    role: "Psicólogo — TCC",
    bio: "Atua com TCC no suporte a questões emocionais e comportamentais, construindo junto ao paciente estratégias práticas para uma vida com mais equilíbrio e saúde mental.",
    photo: "/equipe/fabricio-rezende.jpeg",
    videoUrl: null,
  },
  {
    name: "André Henrique",
    role: "Psicólogo — Gestalt-terapia",
    bio: "Por meio da Gestalt-terapia, trabalha a consciência das experiências presentes, acolhendo a singularidade de cada pessoa em seu processo de transformação e cuidado de si.",
    photo: "/equipe/andre-henrique.jpeg",
    videoUrl: null,
  },
];

const Equipe = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      {/* Hero banner */}
      <section className="pt-40 md:pt-28 pb-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Nossa Equipe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Conheça os profissionais que fazem parte da Coral Psicologia. Cada um com sua história, formação e compromisso com o cuidado da saúde mental.
          </p>

          <div className="max-w-xl mx-auto bg-background/70 backdrop-blur-sm rounded-xl p-5 border border-border/40">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground/80 text-left leading-relaxed">
                Você pode escolher um profissional específico para iniciar o atendimento ou, se preferir, seguir com o <strong className="text-foreground">atendimento social</strong> e ser direcionado ao profissional disponível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/40"
              >
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-4">
                  {/* Name & role */}
                  <div>
                    <h2 className="text-xl font-serif text-foreground">{member.name}</h2>
                    <p className="text-sm text-primary font-display font-medium mt-1">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                    {member.bio}
                  </p>

                  {/* Contact */}
                  <div className="pt-1">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a
                        href={`https://wa.me/5521967389597?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta com ${member.name} da Coral Psicologia.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Entre em contato
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Equipe;
