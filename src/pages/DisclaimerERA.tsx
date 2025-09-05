import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, FileText } from "lucide-react";

const DisclaimerERA = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Legal Document
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Disclaimer For ERA
          </h1>
          <p className="text-xl text-muted-foreground">
            Important legal disclaimers and regulatory information for Shrinidhi Capital
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <AlertTriangle className="w-6 h-6 mr-3 text-accent" />
                General Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are exemplary and are not recommendatory.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Shrinidhi Capital is registered with SEBI as a Research Analyst under SEBI (Research Analysts) Regulations, 2014. The views and investment tips expressed by investment experts on Shrinidhi Capital are their own and not that of the website or its management.
              </p>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <FileText className="w-6 h-6 mr-3 text-accent" />
                Investment Risks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Past performance is not indicative of future results.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-2">Important Risk Factors:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Market volatility and price fluctuations</li>
                  <li>Economic and political factors affecting securities</li>
                  <li>Company-specific risks and industry dynamics</li>
                  <li>Liquidity risks and trading limitations</li>
                  <li>Currency and interest rate risks</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Research Analysis Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The research reports and recommendations provided by Shrinidhi Capital are based on information available in public domain. The analysis and opinions expressed are based on our research team's assessment and should not be construed as investment advice.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-foreground mb-2">Research Methodology</h4>
                  <p className="text-sm text-muted-foreground">
                    Our research is based on fundamental and technical analysis, industry trends, and market conditions at the time of publication.
                  </p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-foreground mb-2">Independent Decision</h4>
                  <p className="text-sm text-muted-foreground">
                    Investors are advised to make independent decisions and consult their financial advisors before making investment decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Regulatory Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-success/10 p-6 rounded-lg">
                <h4 className="font-semibold text-success mb-4">SEBI Registration Details</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-success">Registration No:</span>
                    <p className="text-muted-foreground">INH000000000 (Sample)</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Valid Till:</span>
                    <p className="text-muted-foreground">December 31, 2025</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">NISM Certification:</span>
                    <p className="text-muted-foreground">NISM-XV-A Research Analyst</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Compliance Officer:</span>
                    <p className="text-muted-foreground">Available on request</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                For any grievances or complaints, please contact our compliance team or refer to our Grievance Redressal Process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DisclaimerERA;