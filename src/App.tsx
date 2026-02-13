import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Equipe from "./pages/Equipe";
import GruposTerapeuticos from "./pages/GruposTerapeuticos";
import Palestras from "./pages/Palestras";
import RAI from "./pages/RAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/coral-care">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/grupos-terapeuticos" element={<GruposTerapeuticos />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/rai" element={<RAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
