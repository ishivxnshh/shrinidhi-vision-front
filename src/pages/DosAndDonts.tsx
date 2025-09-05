import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Shield, AlertTriangle, TrendingUp, Users } from "lucide-react";

const DosAndDonts = () => {
  return (
    <Layout showParticles={false}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Investment Guidelines
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Standard Do's & Don'ts
          </h1>
          <p className="text-xl text-muted-foreground">
            Essential guidelines for responsible investing and using our research services effectively
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <CheckCircle2 className="w-6 h-6 mr-3 text-success" />
                Investment Do's - Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-success/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-success mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Research & Analysis
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Conduct thorough due diligence before investing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Read and understand all research reports completely</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Stay updated with market news and economic indicators</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Use multiple sources of information for decision making</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-primary mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Risk Management
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Set clear investment objectives and risk tolerance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Diversify your investment portfolio across sectors</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Use stop-loss orders to limit potential losses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Review and rebalance portfolio regularly</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-accent mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Professional Guidance
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Consult qualified financial advisors for personalized advice</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Verify credentials of financial service providers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Seek clarification on any unclear recommendations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Keep records of all investment decisions and advice</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-secondary-foreground mb-3">Financial Discipline</h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Invest only surplus funds after emergency reserves</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Maintain disciplined approach to investment timing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Follow systematic investment plans (SIPs) consistently</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Keep detailed records of all transactions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <XCircle className="w-6 h-6 mr-3 text-destructive" />
                Investment Don'ts - Avoid These Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-destructive/10 p-4 rounded-lg border-l-4 border-destructive">
                    <h5 className="font-semibold text-destructive mb-3">Emotional Investing</h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't make investment decisions based on fear or greed</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid panic selling during market downturns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't chase high returns without understanding risks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid following market tips without proper research</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-500/10 p-4 rounded-lg border-l-4 border-orange-500">
                    <h5 className="font-semibold text-orange-600 mb-3">Poor Risk Management</h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't put all money in a single investment or sector</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid investing borrowed money or emergency funds</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't ignore stop-loss limits once set</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid over-leveraging your investment positions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-500/10 p-4 rounded-lg border-l-4 border-red-500">
                    <h5 className="font-semibold text-red-600 mb-3">Information Misuse</h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't share research reports with unauthorized persons</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid acting on outdated or expired recommendations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't misrepresent our research to third parties</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid using incomplete or partial information</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-500/10 p-4 rounded-lg border-l-4 border-purple-500">
                    <h5 className="font-semibold text-purple-600 mb-3">Regulatory Violations</h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't engage in insider trading or manipulation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid providing false information to service providers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Don't use multiple accounts to circumvent limits</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Avoid non-compliance with KYC requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <AlertTriangle className="w-6 h-6 mr-3 text-accent" />
                Using Our Research Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-success/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-success mb-4">Recommended Practices</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-success">Read Complete Reports</h5>
                        <p className="text-sm text-muted-foreground">
                          Review entire research reports including risk factors and disclaimers
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-success">Check Report Dates</h5>
                        <p className="text-sm text-muted-foreground">
                          Ensure you're using current recommendations and updated target prices
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-success">Understand Ratings</h5>
                        <p className="text-sm text-muted-foreground">
                          Familiarize yourself with our rating methodology and time horizons
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-success">Seek Clarification</h5>
                        <p className="text-sm text-muted-foreground">
                          Contact us for any doubts about recommendations or market conditions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-destructive/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-4">Avoid These Mistakes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-destructive">Partial Information Use</h5>
                        <p className="text-sm text-muted-foreground">
                          Don't make decisions based on headlines or partial report content
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-destructive">Ignoring Risk Warnings</h5>
                        <p className="text-sm text-muted-foreground">
                          Don't overlook risk assessments and cautionary notes in reports
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-destructive">Unauthorized Sharing</h5>
                        <p className="text-sm text-muted-foreground">
                          Don't share proprietary research with non-subscribers
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-destructive">Blind Following</h5>
                        <p className="text-sm text-muted-foreground">
                          Don't blindly follow recommendations without personal assessment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">SEBI Guidelines Compliance</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-primary mb-2">Investor Obligations</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Provide accurate KYC information</li>
                      <li>• Report suspicious market activities</li>
                      <li>• Comply with tax obligations</li>
                      <li>• Follow position limits and disclosure norms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-2">Our Obligations</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Maintain research independence</li>
                      <li>• Provide timely and accurate information</li>
                      <li>• Ensure proper risk disclosures</li>
                      <li>• Handle complaints fairly and promptly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> These guidelines are based on current SEBI regulations and market best practices. 
                  They are subject to updates based on regulatory changes. Always refer to the latest regulatory 
                  requirements and consult with qualified professionals for personalized advice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DosAndDonts;