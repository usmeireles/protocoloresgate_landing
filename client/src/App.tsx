import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Privacidade from "./pages/Privacidade";
import Cookies from "./pages/Cookies";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/privacidade"} component={Privacidade} />
      <Route path={"/cookies"} component={Cookies} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Protocolo Resgate - Landing Page
// Design: Minimalismo Corporativo com Geometria Dinâmica
// Tema: Escuro (preto profundo #0A0E27 com acentos azul e ouro)
// Tipografia: Montserrat (display) + Inter (body) + IBM Plex Mono (dados)

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
