import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Eye, FileText, Shield } from "lucide-react";

const AdvertisementDisclaimer = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Advertisement Guidelines
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Advertisement Disclaimer
          </h1>
          <p className="text-xl text-muted-foreground">
            Important disclaimers regarding our marketing materials and advertisements
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Eye className="w-6 h-6 mr-3 text-accent" />
                General Advertisement Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-3">Important Notice</h4>
                <p className="text-muted-foreground leading-relaxed">
                  All content, materials, and information presented in our advertisements, marketing materials, 
                  website, social media posts, and other promotional content are for informational purposes only 
                  and should not be construed as investment advice, recommendations, or guarantees of future performance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-2">No Investment Advice</h5>
                  <p className="text-sm text-muted-foreground">
                    Our advertisements do not constitute personalized investment advice or recommendations 
                    suitable for your specific financial situation.
                  </p>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-secondary-foreground mb-2">Past Performance</h5>
                  <p className="text-sm text-muted-foreground">
                    Any past performance data mentioned is historical and does not guarantee future results 
                    or returns on investments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <FileText className="w-6 h-6 mr-3 text-accent" />
                Marketing Material Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-success/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-success mb-3">Content Accuracy</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• All information is believed to be accurate at the time of publication</li>
                    <li>• Data sources are from reliable third-party providers</li>
                    <li>• Market conditions may change rapidly affecting relevance</li>
                    <li>• Regular updates ensure current information standards</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-accent mb-3">Regulatory Compliance</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• All advertisements comply with SEBI advertisement regulations</li>
                    <li>• Required disclaimers are prominently displayed</li>
                    <li>• No misleading or exaggerated claims</li>
                    <li>• Clear identification of promotional content</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Required Disclosures in Advertisements</h4>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-medium text-primary">SEBI Registration</p>
                    <p className="text-muted-foreground">
                      "Shrinidhi Capital is a SEBI registered Research Analyst (Registration No: INH000020970)"
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-medium text-accent">Risk Warning</p>
                    <p className="text-muted-foreground">
                      "Investment in securities market are subject to market risks, read all the related documents carefully before investing."
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-success pl-4">
                    <p className="font-medium text-success">Performance Disclaimer</p>
                    <p className="text-muted-foreground">
                      "Past performance is not indicative of future results. SEBI registration does not guarantee performance."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Digital Marketing Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Social Media & Online Content</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-primary mb-2">Platform Responsibility</h5>
                    <p className="text-sm text-muted-foreground">
                      Content shared on third-party platforms (social media, forums, partner websites) 
                      carries the same disclaimers and should be verified through our official channels.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-2">User-Generated Content</h5>
                    <p className="text-sm text-muted-foreground">
                      Comments, reviews, or testimonials from users reflect individual experiences and 
                      opinions, not official company positions or guarantees.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-2">Third-Party Links</h5>
                    <p className="text-sm text-muted-foreground">
                      External links in our advertisements lead to third-party sites over which we have no control. 
                      We are not responsible for their content or practices.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Shield className="w-6 h-6 mr-3 text-accent" />
                Client Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary-foreground mb-4">Due Diligence Requirements</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Conduct independent research before making any investment decisions
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Consult with qualified financial advisors based on your personal circumstances
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Read all relevant documents including risk disclosures and terms of service
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Understand that all investments carry inherent risks and potential for losses
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <h5 className="font-semibold text-accent mb-2">Contact for Clarifications</h5>
                <p className="text-sm text-muted-foreground">
                  For any questions regarding our advertisements, marketing materials, or to request additional 
                  information about our services, please contact us through official channels listed on our website.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Legal Framework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-success/10 p-6 rounded-lg">
                <h4 className="font-semibold text-success mb-4">Regulatory Compliance</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-success">Governing Authority:</span>
                    <p className="text-muted-foreground">Securities and Exchange Board of India (SEBI)</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Applicable Regulations:</span>
                    <p className="text-muted-foreground">Research Analysts Regulations, 2014</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Advertisement Guidelines:</span>
                    <p className="text-muted-foreground">SEBI Advertisement Code for Intermediaries</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Review Process:</span>
                    <p className="text-muted-foreground">Regular compliance review and updates</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer Update:</strong> This advertisement disclaimer is subject to periodic 
                  updates as per regulatory changes and business requirements. Latest version is always 
                  available on our website.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdvertisementDisclaimer;