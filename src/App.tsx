import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import Home from "./pages/Home";
import DisclaimerERA from "./pages/DisclaimerERA";
import StandardDisclosure from "./pages/StandardDisclosure";
import InvestorGrievance from "./pages/InvestorGrievance";
import InvestorCharter from "./pages/InvestorCharter";
import AdvertisementDisclaimer from "./pages/AdvertisementDisclaimer";
import RefundPolicy from "./pages/RefundPolicy";
import UserConsent from "./pages/UserConsent";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import DosAndDonts from "./pages/DosAndDonts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disclaimer-era" element={<DisclaimerERA />} />
          <Route path="/standard-disclosure" element={<StandardDisclosure />} />
          <Route path="/investor-grievance" element={<InvestorGrievance />} />
          <Route path="/investor-charter" element={<InvestorCharter />} />
          <Route path="/advertisement-disclaimer" element={<AdvertisementDisclaimer />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/user-consent" element={<UserConsent />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/dos-donts" element={<DosAndDonts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
