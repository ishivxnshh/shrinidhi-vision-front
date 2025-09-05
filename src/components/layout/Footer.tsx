import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const policyLinks = [
  { label: "Disclaimer For ERA", href: "/disclaimer-era" },
  { label: "Standard Disclosure", href: "/standard-disclosure" },
  { label: "Investor Grievance", href: "/investor-grievance" },
  { label: "Investor Charter", href: "/investor-charter" },
  { label: "Advertisement Disclaimer", href: "/advertisement-disclaimer" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "User Consent", href: "/user-consent" },
  { label: "Grievance Redressal Process", href: "/grievance-redressal" },
  { label: "Standard Do's & Don'ts", href: "/dos-donts" },
  { label: "Privacy Policy", href: "/privacy-policy" }
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center hero-float">
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-primary">
                  Shrinidhi Capital
                </h3>
                <p className="text-sm text-muted-foreground">
                  Investment Research Associates
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-accent mb-4">Contact Information</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">+91 98123 45678</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">info@shridhicapital.com</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground font-medium mb-2">
                SEBI Research Analyst
              </p>
              <p className="text-xs text-muted-foreground">
                Registration No. INH000018400
              </p>
            </div>
          </div>

          {/* Policy Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-accent mb-6">Policy Documents</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {policyLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  • {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SEBI Office Address */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-accent mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              SEBI Office Address
            </h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Securities and Exchange Board of India</p>
              <p>SEBI Bhavan, Plot No. C4-A,</p>
              <p>'G' Block, Bandra-Kurla Complex,</p>
              <p>Bandra (E), Mumbai – 400 051</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2024 Shrinidhi Capital. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap items-center text-xs text-muted-foreground space-x-6">
              <Link to="/disclaimer-era" className="hover:text-accent transition-colors">
                Disclaimer For ERA
              </Link>
              <Link to="/standard-disclosure" className="hover:text-accent transition-colors">
                Standard Disclosure
              </Link>
              <Link to="/investor-grievance" className="hover:text-accent transition-colors">
                Investor Grievance
              </Link>
              <Link to="/investor-charter" className="hover:text-accent transition-colors">
                Investor Charter
              </Link>
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};