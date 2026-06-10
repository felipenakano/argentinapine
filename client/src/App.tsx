// ArgentinaPine.com — App Router
// Design: Timber Atlas — Premium B2B Trade Portal
// Routes: EN (no prefix), VI (/vi), FIL (/fil), ZH (/zh)

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider } from "./contexts/LangContext";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Species from "./pages/Species";
import SpeciesDetail from "./pages/SpeciesDetail";
import Sourcing from "./pages/Sourcing";
import SourcingDetail from "./pages/SourcingDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Build routes for a given language prefix
function buildRoutes(prefix: string) {
  const p = prefix; // e.g. "", "/vi", "/fil", "/zh"
  return (
    <>
      <Route path={p === "" ? "/" : p} component={Home} />
      <Route path={`${p}/products`} component={Products} />
      <Route path={`${p}/products/:slug`} component={ProductDetail} />
      <Route path={`${p}/species`} component={Species} />
      <Route path={`${p}/species/:slug`} component={SpeciesDetail} />
      <Route path={`${p}/sourcing`} component={Sourcing} />
      <Route path={`${p}/sourcing/:slug`} component={SourcingDetail} />
      <Route path={`${p}/blog`} component={Blog} />
      <Route path={`${p}/blog/:slug`} component={BlogPost} />
      <Route path={`${p}/about`} component={About} />
      <Route path={`${p}/contact`} component={Contact} />
    </>
  );
}

function Router() {
  return (
    <Switch>
      {buildRoutes("")}
      {buildRoutes("/vi")}
      {buildRoutes("/fil")}
      {buildRoutes("/zh")}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <LangProvider>
            <Router />
          </LangProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
