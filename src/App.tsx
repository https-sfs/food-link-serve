import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Intro from "./pages/Intro";
import SelectRole from "./pages/SelectRole";
import Donor from "./pages/Donor";
import Volunteer from "./pages/Volunteer";
import HungerPins from "./pages/HungerPins";
import Impact from "./pages/Impact";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/hunger-pins" element={<HungerPins />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
