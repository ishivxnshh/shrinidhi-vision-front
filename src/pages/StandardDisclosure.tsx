import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building2, Users, Shield } from "lucide-react";

const StandardDisclosure = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="text-center mb-12">
          <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Regulatory Compliance
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Standard Disclosure
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive disclosure of business operations, affiliations, and regulatory compliance
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Building2 className="w-6 h-6 mr-3 text-primary" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Corporate Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Proprietor:</span> Anand Sharadchandra Pathak</p>
                    <p><span className="font-medium">Company Name:</span> Shrinidhi Capital</p>
                    <p><span className="font-medium">Business:</span> Investment Research & Advisory</p>
                    <p><span className="font-medium">Office Address:</span> Office No. 24, 1 Seat 4th Floor, City Vista B Building, Fountain Road, Kharadi, Haveli, Pune, 411014</p>
                    <p><span className="font-medium">Incorporation:</span> 2025</p>
                    <p><span className="font-medium">CIN:</span> U74999MH2025PTC023569</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Registration Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">SEBI Reg No:</span> INH000020970</p>
                    <p><span className="font-medium">Category:</span> Research Analyst</p>
                    <p><span className="font-medium">Email:</span> info@shrinidhicapital.com</p>
                    <p><span className="font-medium">Phone:</span> +91 92091 77791</p>
                    <p><span className="font-medium">Validity:</span> Till December 2028</p>
                    <p><span className="font-medium">NISM Certified:</span> Yes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Users className="w-6 h-6 mr-3 text-primary" />
                Key Personnel & Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/20 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-4">Research Team</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Proprietor & Research Analyst: Anand Sharadchandra Pathak</p>
                    <p className="text-sm text-muted-foreground">Certified Research Analyst with extensive market experience</p>
                  </div>
                  <div>
                    <p className="font-medium">Research Methodology:</p>
                    <p className="text-sm text-muted-foreground">Technical analysis combined with fundamental research for comprehensive market insights</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-4">Associates & Affiliations</h4>
                <div className="space-y-2 text-sm">
                  <p>• SEBI registered research analyst</p>
                  <p>• Compliance with SEBI research analyst regulations</p>
                  <p>• Professional market research and analysis services</p>
                  <p>• Independent research without external influences</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground">Financial Interests & Conflicts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/20 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-3">Conflict of Interest Disclosure</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>Securities Holdings:</strong> The research analyst may hold positions 
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
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Research Independence</h4>
                  <p className="text-sm text-muted-foreground">
                    Our research is conducted independently without influence from any external parties or financial interests.
                  </p>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Compensation Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    Research analyst compensation is not linked to specific investment banking revenues or transactions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Shield className="w-6 h-6 mr-3 text-primary" />
                Compliance Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Regulatory Compliance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SEBI (Research Analysts) Regulations, 2014 compliance</li>
                    <li>• Regular certification renewals and updates</li>
                    <li>• Adherence to code of conduct for research analysts</li>
                    <li>• Proper disclosure of material information</li>
                  </ul>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Quality Assurance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comprehensive research validation process</li>
                    <li>• Independent review of recommendations</li>
                    <li>• Regular audit of research methodologies</li>
                    <li>• Continuous monitoring of recommendation performance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg mt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Contact Information:</strong> For any queries regarding this disclosure or compliance matters, 
                  please contact us at info@shrinidhicapital.com or call +91 92091 77791
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