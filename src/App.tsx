import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WrappedV2 from "./pages/WrappedV2";
import WrappedWealthBuilders from "./pages/WrappedWealthBuilders";
import WrappedCapitalInvestors from "./pages/WrappedCapitalInvestors";
import WrappedFinancialExplorers from "./pages/WrappedFinancialExplorers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<WrappedV2 />} />
          <Route path="/wealth-builders" element={<WrappedWealthBuilders />} />
          <Route path="/capital-investors" element={<WrappedCapitalInvestors />} />
          <Route path="/financial-explorers" element={<WrappedFinancialExplorers />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
