import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Building2,
  User,
  FileText
} from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="text-center mb-12">
          <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your investment journey? We're here to help you make informed financial decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Building2 className="w-6 h-6 mr-3 text-primary" />
                  Office Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Anand Sharadchandra Pathak<br />
                      Proprietor of Shrinidhi Capital<br />
                      Office No. 24, 1 Seat 4th Floor,<br />
                      City Vista B Building, Fountain Road,<br />
                      Kharadi, Haveli, Pune, 411014
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a 
                      href="tel:+919209177791" 
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      +91 92091 77791
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:info@shrinidhicapital.com" 
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      info@shrinidhicapital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  Regulatory Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">SEBI Registration</h3>
                  <p className="text-muted-foreground">Registration No: INH000020970</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Service Type</h3>
                  <p className="text-muted-foreground">Investment Research & Advisory Services</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> Registration granted by SEBI and certification from NISM 
                    in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Button 
                    className="w-full justify-start h-auto p-4"
                    variant="outline"
                    onClick={() => window.open('tel:+919209177791')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Call Us Now</div>
                      <div className="text-sm text-muted-foreground">Speak with our research team</div>
                    </div>
                  </Button>

                  <Button 
                    className="w-full justify-start h-auto p-4"
                    variant="outline"
                    onClick={() => window.open('mailto:info@shrinidhicapital.com')}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm text-muted-foreground">Send us your queries</div>
                    </div>
                  </Button>

                  <Button 
                    className="w-full justify-start h-auto p-4"
                    onClick={() => {
                      const servicesSection = document.querySelector('[data-section="services"]');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = '/#services';
                      }
                    }}
                  >
                    <User className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">View Our Services</div>
                      <div className="text-sm opacity-90">Explore trading plans</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How do I subscribe to your services?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can subscribe to our trading services by clicking on any "Subscribe Now" button 
                      on our services section or by contacting us directly.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What are your research methodologies?</h4>
                    <p className="text-sm text-muted-foreground">
                      We use a combination of technical analysis and fundamental research to provide 
                      comprehensive market insights and trading recommendations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do you provide investment advice?</h4>
                    <p className="text-sm text-muted-foreground">
                      We provide research and analysis for educational purposes. All investment decisions 
                      should be made after careful consideration of your financial situation and risk tolerance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 shadow-sm">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Market Risk Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  Investment in securities market are subject to market risks. 
                  Read all the related documents carefully before investing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;