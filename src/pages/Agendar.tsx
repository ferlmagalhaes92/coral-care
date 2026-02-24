import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, User, ChevronRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const professionals = [
  {
    name: "Dra. Ana Silva",
    role: "Psicóloga Clínica",
    crp: "CRP 06/12345",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Pedro Mendes",
    role: "Psicólogo",
    crp: "CRP 06/23456",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dra. Camila Rocha",
    role: "Psicóloga",
    crp: "CRP 06/34567",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Lucas Ferreira",
    role: "Psicólogo",
    crp: "CRP 06/45678",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dra. Juliana Costa",
    role: "Psicóloga",
    crp: "CRP 06/56789",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Rafael Oliveira",
    role: "Psicólogo",
    crp: "CRP 06/67890",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

type Step = "choice" | "professional-select" | "confirmed";
type Path = "social" | "professional";

const Agendar = () => {
  const [step, setStep] = useState<Step>("choice");
  const [path, setPath] = useState<Path | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);

  const handleChooseSocial = () => {
    setPath("social");
    setStep("confirmed");
  };

  const handleChooseProfessional = () => {
    setPath("professional");
    setStep("professional-select");
  };

  const handleSelectProfessional = (name: string) => {
    setSelectedProfessional(name);
    setStep("confirmed");
  };

  const whatsappMessage =
    path === "social"
      ? "Olá! Gostaria de entrar na fila do atendimento social da Coral Psicologia."
      : `Olá! Gostaria de agendar uma consulta com ${selectedProfessional} da Coral Psicologia.`;

  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />

      <div className="min-h-screen flex items-center pt-16">
        <div className="container px-4 md:px-6 mx-auto py-20">

          {/* ── Etapa 1: Escolha do caminho ── */}
          {step === "choice" && (
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-4">
                Agendar consulta
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4 leading-snug">
                Como você prefere iniciar<br className="hidden sm:block" /> seu atendimento?
              </h1>
              <p className="text-muted-foreground mb-12 max-w-md mx-auto">
                Escolha a opção que melhor se encaixa no que você está buscando agora.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Opção 1 — Fila social */}
                <button
                  onClick={handleChooseSocial}
                  className="group text-left p-8 rounded-2xl border-2 border-border/50 hover:border-primary/40 bg-card hover:bg-primary/5 transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-serif text-foreground mb-2">Atendimento Social</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Entre na fila e seja direcionado ao profissional disponível, sem precisar escolher.
                  </p>
                  <div className="mt-6 flex items-center text-primary text-sm font-medium">
                    Entrar na fila
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* Opção 2 — Escolher profissional */}
                <button
                  onClick={handleChooseProfessional}
                  className="group text-left p-8 rounded-2xl border-2 border-border/50 hover:border-primary/40 bg-card hover:bg-primary/5 transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-serif text-foreground mb-2">Escolher Profissional</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prefiro escolher com quem quero iniciar meu processo terapêutico.
                  </p>
                  <div className="mt-6 flex items-center text-primary text-sm font-medium">
                    Ver profissionais
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* ── Etapa 2: Seleção de profissional ── */}
          {step === "professional-select" && (
            <div className="max-w-3xl mx-auto animate-fade-in">
              <button
                onClick={() => setStep("choice")}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>

              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3 leading-snug">
                  Com qual profissional você<br className="hidden sm:block" /> gostaria de se consultar?
                </h1>
                <p className="text-muted-foreground">
                  Selecione um dos nossos profissionais abaixo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {professionals.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => handleSelectProfessional(p.name)}
                    className={cn(
                      "group flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200",
                      "border-border/50 hover:border-primary/40 bg-card hover:bg-primary/5 hover:shadow-sm",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                  >
                    <img
                      src={p.photo}
                      alt={`Foto de ${p.name}`}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-serif text-foreground text-sm font-semibold leading-snug">
                        {p.name}
                      </p>
                      <p className="text-[12px] text-primary mt-0.5">{p.role}</p>
                      <p className="text-[12px] text-muted-foreground">{p.crp}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Etapa 3: Confirmação ── */}
          {step === "confirmed" && (
            <div className="max-w-lg mx-auto text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-3xl font-serif text-foreground mb-3">
                {path === "social"
                  ? "Tudo certo!"
                  : `Ótima escolha!`}
              </h1>

              <p className="text-muted-foreground mb-2">
                {path === "social"
                  ? "Você optou pela fila do atendimento social."
                  : `Você escolheu ${selectedProfessional}.`}
              </p>
              <p className="text-muted-foreground mb-10">
                Clique abaixo para finalizar pelo WhatsApp e um de nossos profissionais entrará em contato.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-coral-600 text-white rounded-full px-8"
                  asChild
                >
                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar pelo WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary/20"
                  asChild
                >
                  <Link to="/">Voltar ao início</Link>
                </Button>
              </div>

              {path === "professional" && (
                <button
                  onClick={() => {
                    setStep("professional-select");
                    setSelectedProfessional(null);
                  }}
                  className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Trocar profissional
                </button>
              )}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Agendar;
