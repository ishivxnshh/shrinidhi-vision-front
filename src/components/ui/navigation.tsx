import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2, TrendingUp, Shield, FileText } from "lucide-react";

const navigationItems = [
  {
    label: "Disclaimer For ERA",
    href: "/disclaimer-era",
    icon: Shield
  },
  {
    label: "Standard Disclosure",
    href: "/standard-disclosure",
    icon: FileText
  },
  {
    label: "Investor Grievance",
    href: "/investor-grievance",
    icon: TrendingUp
  },
  {
    label: "Investor Charter",
    href: "/investor-charter",
    icon: Building2
  },
  {
    label: "Advertisement Disclaimer",
    href: "/advertisement-disclaimer",
    icon: Shield
  },
  {
    label: "Refund Policy",
    href: "/refund-policy",
    icon: FileText
  },
  {
    label: "User Consent",
    href: "/user-consent",
    icon: Shield
  },
  {
    label: "Grievance Redressal Process",
    href: "/grievance-redressal",
    icon: TrendingUp
  },
  {
    label: "Standard Do's & Don'ts",
    href: "/dos-donts",
    icon: FileText
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    icon: Shield
  }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="backdrop-premium fixed top-0 left-0 right-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hero-float">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-primary">
                Shrinidhi Capital
              </span>
              <span className="text-xs text-muted-foreground">
                Investment Research Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    className={`
                      relative group transition-all duration-300
                      ${isActive 
                        ? "bg-primary/20 text-primary shadow-glow" 
                        : "hover:bg-primary/10 hover:text-primary"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="text-xs font-medium">{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary rounded-full" />
                    )}
                  </Button>
                </Link>
              );
            })}
            
            {/* More Menu for remaining items */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Menu className="w-4 h-4 mr-2" />
                  <span className="text-xs">More</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 backdrop-premium">
                <div className="flex flex-col space-y-2 mt-8">
                  <h2 className="text-lg font-semibold text-gradient-primary mb-4">
                    Policy Documents
                  </h2>
                  {navigationItems.slice(5).map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <Link 
                        key={item.href} 
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={`
                            w-full justify-start transition-all duration-300
                            ${isActive 
                              ? "bg-primary/20 text-primary shadow-glow" 
                              : "hover:bg-primary/10 hover:text-primary"
                            }
                          `}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {item.label}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 backdrop-premium">
                <div className="flex flex-col space-y-2 mt-8">
                  <h2 className="text-lg font-semibold text-gradient-primary mb-4">
                    Navigation
                  </h2>
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <Link key={item.href} to={item.href}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={`
                            w-full justify-start transition-all duration-300
                            ${isActive 
                              ? "bg-primary/20 text-primary shadow-glow" 
                              : "hover:bg-primary/10 hover:text-primary"
                            }
                          `}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {item.label}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};