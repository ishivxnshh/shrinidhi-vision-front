import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Users, FileText, Award, Target } from "lucide-react";

const InvestorCharter = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <Award className="w-4 h-4 mr-2" />
            Investor Rights
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Investor Charter
          </h1>
          <p className="text-xl text-muted-foreground">
            Your rights, our commitments, and the foundation of our client relationship
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Our Vision for Investors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <h4 className="font-bold text-xl mb-4">Mission Statement</h4>
                <p className="text-lg leading-relaxed">
                  To empower investors through transparent, ethical, and professional research services 
                  that enable informed investment decisions and long-term wealth creation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-accent mb-2">Transparency</h5>
                  <p className="text-sm text-muted-foreground">
                    Clear disclosure of methodology, risks, and potential conflicts of interest
                  </p>
                </div>
                <div className="bg-success/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-success mb-2">Integrity</h5>
                  <p className="text-sm text-muted-foreground">
                    Ethical practices and unbiased research recommendations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <CheckCircle2 className="w-6 h-6 mr-3 text-accent" />
                Your Rights as an Investor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Right to Fair Treatment",
                    description: "You have the right to be treated fairly and without discrimination, regardless of the size of your investment or portfolio."
                  },
                  {
                    title: "Right to Transparency",
                    description: "You are entitled to clear, accurate, and timely information about our research methodology, potential risks, and any conflicts of interest."
                  },
                  {
                    title: "Right to Suitability",
                    description: "You have the right to receive investment recommendations that are suitable for your financial situation, investment objectives, and risk tolerance."
                  },
                  {
                    title: "Right to Privacy",
                    description: "Your personal and financial information will be kept confidential and used only for legitimate business purposes."
                  },
                  {
                    title: "Right to Grievance Redressal",
                    description: "You have the right to lodge complaints and expect prompt, fair resolution of any grievances or disputes."
                  },
                  {
                    title: "Right to Education",
                    description: "You are entitled to receive educational materials and guidance to enhance your understanding of investments and markets."
                  }
                ].map((right, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-muted/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-success mb-2">{right.title}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{right.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Shield className="w-6 h-6 mr-3 text-accent" />
                Our Commitments to You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Service Standards</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-primary mb-2">Research Quality</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Evidence-based research methodology</li>
                      <li>• Regular review and updates</li>
                      <li>• Independent analysis and opinions</li>
                      <li>• Clear risk assessments</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-2">Client Service</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Timely response to queries</li>
                      <li>• Professional communication</li>
                      <li>• Regular market updates</li>
                      <li>• Educational support materials</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold text-accent mb-4">Ethical Standards</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">
                      We will not engage in activities that create conflicts with our research recommendations
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">
                      All material information affecting our recommendations will be disclosed
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">
                      We maintain strict confidentiality of client information and research processes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Users className="w-6 h-6 mr-3 text-accent" />
                Your Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary-foreground mb-4">Client Responsibilities</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-secondary pl-4">
                    <h5 className="font-medium text-secondary">Due Diligence</h5>
                    <p className="text-sm text-muted-foreground">
                      Conduct your own research and analysis before making investment decisions
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium text-primary">Risk Assessment</h5>
                    <p className="text-sm text-muted-foreground">
                      Understand and assess the risks associated with your investment decisions
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-medium text-accent">Information Accuracy</h5>
                    <p className="text-sm text-muted-foreground">
                      Provide accurate information about your financial situation and investment objectives
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-success pl-4">
                    <h5 className="font-medium text-success">Timely Communication</h5>
                    <p className="text-sm text-muted-foreground">
                      Inform us promptly of any changes in your circumstances or investment objectives
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <FileText className="w-6 h-6 mr-3 text-accent" />
                Regulatory Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-success/10 p-6 rounded-lg">
                <h4 className="font-semibold text-success mb-4">Compliance Assurance</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Investor Charter is prepared in accordance with SEBI (Research Analysts) Regulations, 2014 
                  and other applicable regulations. It forms an integral part of our commitment to regulatory compliance 
                  and investor protection.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-success">Regulatory Authority:</span>
                    <p className="text-muted-foreground">Securities and Exchange Board of India (SEBI)</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Governing Regulations:</span>
                    <p className="text-muted-foreground">Research Analysts Regulations, 2014</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Last Updated:</span>
                    <p className="text-muted-foreground">January 2024</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Review Frequency:</span>
                    <p className="text-muted-foreground">Annual or as required by regulations</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This charter is available in multiple languages and can be accessed 
                  on our website. For any clarifications or updates, please contact our compliance team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InvestorCharter;