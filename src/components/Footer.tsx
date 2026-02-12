export const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Coral Psicologia
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Um espaço de escuta, acolhimento e transformação.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Coral Psicologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};