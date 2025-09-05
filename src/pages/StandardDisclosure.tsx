import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building2, Users, Shield } from "lucide-react";

const StandardDisclosure = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Regulatory Compliance
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Standard Disclosure
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive disclosure of business operations, affiliations, and regulatory compliance
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Building2 className="w-6 h-6 mr-3 text-accent" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Corporate Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Company Name:</span> Shrinidhi Capital</p>
                    <p><span className="font-medium">Business:</span> Investment Research & Advisory</p>
                    <p><span className="font-medium">Incorporation:</span> [Year of Incorporation]</p>
                    <p><span className="font-medium">CIN:</span> [Corporate Identification Number]</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Registration Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">SEBI Reg No:</span> INH000000000</p>
                    <p><span className="font-medium">Category:</span> Research Analyst</p>
                    <p><span className="font-medium">Validity:</span> Till December 2025</p>
                    <p><span className="font-medium">NISM Certified:</span> Yes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Users className="w-6 h-6 mr-3 text-accent" />
                Key Personnel & Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary-foreground mb-4">Research Team</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Chief Research Officer: [Name]</p>
                    <p className="text-sm text-muted-foreground">Qualifications: MBA Finance, CFA, 15+ years experience</p>
                  </div>
                  <div>
                    <p className="font-medium">Senior Research Analysts: [Names]</p>
                    <p className="text-sm text-muted-foreground">NISM Certified Research Analysts with sector expertise</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Associates & Affiliations</h4>
                <div className="space-y-2 text-sm">
                  <p>• Professional associations with industry bodies</p>
                  <p>• Strategic partnerships with financial institutions</p>
                  <p>• Technology partnerships for research platforms</p>
                  <p>• Academic collaborations for research enhancement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Financial Interests & Conflicts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-3">Conflict of Interest Disclosure</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>Securities Holdings:</strong> The research analyst and associates may hold positions 
                    in securities recommended in research reports. All such holdings are disclosed as per SEBI regulations.
                  </p>
                  <p>
                    <strong>Investment Banking:</strong> Shrinidhi Capital does not engage in investment banking 
                    activities that may create conflicts with research recommendations.
                  </p>
                  <p>
                    <strong>Brokerage Services:</strong> We do not provide brokerage services, ensuring 
                    independence of research recommendations from trading revenue.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-success/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-success mb-2">Research Independence</h4>
                  <p className="text-sm text-muted-foreground">
                    Our research is conducted independently without influence from any external parties or financial interests.
                  </p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-foreground mb-2">Compensation Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    Research analyst compensation is not linked to specific investment banking revenues or transactions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Shield className="w-6 h-6 mr-3 text-accent" />
                Compliance Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SEBI (Research Analysts) Regulations, 2014 compliance</li>
                    <li>• Regular NISM certification renewals</li>
                    <li>• Adherence to code of conduct for research analysts</li>
                    <li>• Proper disclosure of material information</li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multi-level research validation process</li>
                    <li>• Independent review of recommendations</li>
                    <li>• Regular audit of research methodologies</li>
                    <li>• Continuous monitoring of recommendation performance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg mt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Contact Information:</strong> For any queries regarding this disclosure or compliance matters, 
                  please contact our compliance officer at compliance@shrinidhicapital.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default StandardDisclosure;