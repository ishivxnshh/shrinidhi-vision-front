import { ReactNode } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ParticleBackground } from "@/components/three/ParticleBackground";

interface LayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

export const Layout = ({ children, showParticles = true }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {showParticles && <ParticleBackground />}
      <Navigation />
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
};