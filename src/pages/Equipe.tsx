import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Play, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dra. Ana Silva",
    role: "Psicóloga Clínica — CRP 06/12345",
    bio: "Especialista em psicoterapia individual com foco em ansiedade, autoconhecimento e saúde emocional. Acredita no poder da escuta qualificada como ferramenta de transformação pessoal.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    videoUrl: null,
  },
  {
    name: "Dr. Pedro Mendes",
    role: "Psicólogo — CRP 06/23456",
    bio: "Atua com terapia cognitivo-comportamental voltada para depressão, estresse e dificuldades nos relacionamentos. Defensor de um espaço terapêutico acolhedor e sem julgamentos.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    videoUrl: null,
  },
  {
    name: "Dra. Camila Rocha",
    role: "Psicóloga — CRP 06/34567",
    bio: "Focada em grupos terapêuticos e dinâmicas interpessoais. Trabalha com a construção de vínculos saudáveis e o fortalecimento da autonomia emocional.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    videoUrl: null,
  },
  {
    name: "Dr. Lucas Ferreira",
    role: "Psicólogo — CRP 06/45678",
    bio: "Experiência com atendimento online e presencial, atuando em questões de identidade, transições de vida e desenvolvimento pessoal.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    videoUrl: null,
  },
  {
    name: "Dra. Juliana Costa",
    role: "Psicóloga — CRP 06/56789",
    bio: "Dedicada à saúde mental infantojuvenil e orientação familiar. Busca criar conexões seguras para crianças e adolescentes em seus processos de crescimento.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    videoUrl: null,
  },
  {
    name: "Dr. Rafael Oliveira",
    role: "Psicólogo — CRP 06/67890",
    bio: "Atua com palestras e workshops sobre saúde emocional no ambiente corporativo. Apaixonado por levar a psicologia para além do consultório.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    videoUrl: null,
  },
];

const Equipe = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      {/* Hero banner */}
      <section className="pt-28 pb-16 bg-secondary/30">
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

                  {/* Video placeholder */}
                  <div className="pt-2">
                    {member.videoUrl ? (
                      <video
                        src={member.videoUrl}
                        controls
                        className="w-full rounded-lg"
                        preload="metadata"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-muted/60 rounded-lg flex flex-col items-center justify-center gap-2 border border-border/30">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Play className="w-5 h-5 text-primary ml-0.5" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Vídeo de apresentação em breve
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Contact button */}
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    Entre em contato com {member.name.split(" ")[0]}. {member.name.split(" ").slice(1).join(" ")}
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Button>
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
