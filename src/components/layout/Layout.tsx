import { ReactNode } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ParticleBackground } from "@/components/three/ParticleBackground";
import { Footer } from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

export const Layout = ({ children, showParticles = true }: LayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col">
      {showParticles && <ParticleBackground />}
      <Navigation />
      <main className="relative z-10 pt-16 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};