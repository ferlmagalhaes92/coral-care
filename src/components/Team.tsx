import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Foto de grupo */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&crop=faces"
                  alt="Equipe Coral Psicologia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </div>

            {/* Conteúdo textual */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-3 block">
                Nossa equipe
              </span>

              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5 leading-snug">
                Profissionais comprometidos com o seu cuidado
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A Coral Psicologia é formada por psicólogos com formações complementares, unidos pelo mesmo propósito: oferecer um espaço seguro, ético e acolhedor para cada pessoa que chega até nós.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10">
                Cada profissional traz sua especialidade e sensibilidade única, garantindo que você encontre o suporte certo para o seu momento de vida — seja em atendimento individual, em grupo ou em palestras e workshops.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
                <div>
                  <p className="text-3xl font-serif text-primary font-semibold">6</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Psicólogos</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div>
                  <p className="text-3xl font-serif text-primary font-semibold">3</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Especialidades</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div>
                  <p className="text-3xl font-serif text-primary font-semibold">100%</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Registro CRP ativo</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-coral-600 text-white rounded-full px-8 group"
                asChild
              >
                <Link to="/equipe">
                  Conheça a equipe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
