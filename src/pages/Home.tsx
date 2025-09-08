import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  Target,
  Award,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-financial.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroImage})`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 text-sm font-medium hero-float">
              Welcome To Shrinidhi Capital
            </Badge>
            
            <h1 className="text-hero font-bold text-gradient-primary max-w-4xl mx-auto leading-tight">
              Where Experience Meets Insights
            </h1>
            
            <p className="text-display text-accent font-semibold max-w-3xl mx-auto">
              Experience The Edge In Technical Analysis & Investment Research
            </p>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Empowering investors with comprehensive research, strategic insights, and professional guidance 
              to navigate the complex world of financial markets with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="hero-glow text-lg px-8 py-4 group interactive-glow"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Explore Our Research
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.location.href = '/disclaimer-era'}
              >
                View Disclaimers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-8 bg-gradient-to-r from-success/20 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="backdrop-premium p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-accent mb-2">Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    Registration granted by SEBI and certification from NISM in no way guarantee 
                    performance of the intermediary or provide any assurance of returns to investors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-premium p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-accent mb-2">Need Your Attention</h3>
                  <p className="text-sm text-muted-foreground">
                    Investment in securities market are subject to market risks. 
                    Read all the related documents carefully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-gradient-primary mb-4">
              WHY SHRINIDHI CAPITAL?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence, combined with deep market expertise and 
              cutting-edge research methodologies, makes us your ideal investment partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Exclusive Research",
                description: "Using our enriched experience to find quality businesses at fundamentally reasonable value, to help our subscribers in wealth creation through strategic investment opportunities."
              },
              {
                icon: BarChart3,
                title: "Multi-Cap Strategy",
                description: "We offer a unique Multi-Cap Strategy, helping our subscribers diversify their investments across large, mid, and small-cap segments for optimal portfolio balance."
              },
              {
                icon: Target,
                title: "Competitive Pricing",
                description: "Shrinidhi Capital focuses on providing subscribers with premium quality services at competitively low prices, ensuring maximum value for your investment in our research."
              },
              {
                icon: Clock,
                title: "24×7 In-depth Analysis",
                description: "We work round the clock to offer quality stock recommendations at attractive valuations, providing continuous market monitoring and timely investment insights."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="premium-card group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-gradient-accent mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background" data-section="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-gradient-primary mb-4">
              Our Trading Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our specialized trading plans designed to match your investment style and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Swing Trading",
                description: "Strategic medium-term positions with optimal entry and exit points for maximum profit potential.",
                link: "https://superprofile.bio/vig/68b97713ce502e0013d89aa9"
              },
              {
                title: "Equity Intraday",
                description: "Dynamic day trading strategies with real-time analysis and quick profit opportunities.",
                link: "https://superprofile.bio/vig/68b97866ce502e0013d8c011"
              },
              {
                title: "Index Trading",
                description: "Diversified index-based trading with reduced risk and consistent market exposure.",
                link: "https://superprofile.bio/vig/68b9780dce502e0013d8b632"
              }
            ].map((service, index) => (
              <Card key={index} className="premium-card group cursor-pointer hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient-accent mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    className="hero-glow w-full group"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Best */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-gradient-primary mb-4">
              What Makes Us Your Best Choice?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach combines serious investing principles with innovative 
              research methodologies to deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  icon: Award,
                  title: "SERIOUS INVESTING",
                  description: "We believe in disciplined, research-driven investment approaches that focus on long-term wealth creation rather than short-term speculation. Our methodology emphasizes fundamental analysis, risk management, and sustainable growth strategies."
                },
                {
                  icon: Users,
                  title: "CLIENT-CENTRIC APPROACH", 
                  description: "Every investment recommendation is tailored to meet our clients' specific financial goals, risk tolerance, and investment horizon. We provide personalized service and maintain transparent communication throughout the investment journey."
                },
                {
                  icon: Shield,
                  title: "REGULATORY COMPLIANCE",
                  description: "We maintain the highest standards of regulatory compliance and ethical practices. Our research and recommendations are backed by thorough due diligence and adhere to all SEBI guidelines and industry best practices."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gradient-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="backdrop-premium p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                Our Commitment
              </h3>
              <div className="space-y-4">
                {[
                  "Transparent research methodology",
                  "Timely market updates and insights", 
                  "Risk-adjusted return optimization",
                  "Professional investment guidance",
                  "Comprehensive portfolio analysis",
                  "24/7 customer support"
                ].map((commitment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-premium p-12 rounded-3xl">
            <h2 className="text-display font-bold text-gradient-primary mb-6">
              Ready to Begin Your Investment Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied investors who trust Shrinidhi Capital 
              for their investment research and portfolio management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hero-glow text-lg px-8 py-4 group"
                onClick={() => {
                  const servicesSection = document.querySelector('[data-section="services"]');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.location.href = '/standard-disclosure'}
              >
                Read Our Policies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;