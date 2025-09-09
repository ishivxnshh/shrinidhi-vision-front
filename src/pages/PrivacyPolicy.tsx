import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Users, Database, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Data Protection
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive privacy policy explaining how we collect, use, and protect your personal information
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Shield className="w-6 h-6 mr-3 text-accent" />
                Our Privacy Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <h4 className="font-bold text-xl mb-4">Your Privacy Matters</h4>
                <p className="text-lg leading-relaxed">
                  At Shrinidhi Capital, we are committed to protecting your privacy and maintaining the 
                  confidentiality of your personal information. This privacy policy outlines our practices 
                  regarding the collection, use, disclosure, and protection of your data.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <Lock className="w-8 h-8 text-success mx-auto mb-3" />
                  <h4 className="font-semibold text-success">Secure Storage</h4>
                  <p className="text-sm text-muted-foreground">Industry-standard encryption and security</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Eye className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-accent">Transparent Use</h4>
                  <p className="text-sm text-muted-foreground">Clear disclosure of data usage purposes</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">Your Control</h4>
                  <p className="text-sm text-muted-foreground">Full control over your data preferences</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Database className="w-6 h-6 mr-3 text-accent" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-foreground mb-4">Personal Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-primary mb-2">Identity Information</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Full name and contact details</li>
                        <li>• Address and demographic information</li>
                        <li>• Date of birth and age verification</li>
                        <li>• Government-issued ID documents</li>
                        <li>• Photographs for verification purposes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary mb-2">Financial Information</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Bank account and payment details</li>
                        <li>• Income and financial status</li>
                        <li>• Investment experience and objectives</li>
                        <li>• Risk tolerance assessment</li>
                        <li>• Transaction history and patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-secondary-foreground mb-4">Technical Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-secondary mb-2">Device & Usage Data</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• IP address and device identifiers</li>
                        <li>• Browser type and operating system</li>
                        <li>• Website navigation and usage patterns</li>
                        <li>• Time spent on different sections</li>
                        <li>• Search queries and preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-secondary mb-2">Communication Data</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Email correspondence and attachments</li>
                        <li>• Phone call logs and recordings</li>
                        <li>• Chat messages and support tickets</li>
                        <li>• Feedback and survey responses</li>
                        <li>• Marketing interaction data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-accent mb-3">Primary Service Purposes</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Account Management:</strong> Create, maintain, and manage your account and profile</li>
                    <li>• <strong>Service Delivery:</strong> Provide research reports, recommendations, and investment insights</li>
                    <li>• <strong>Customer Support:</strong> Respond to inquiries, resolve issues, and provide assistance</li>
                    <li>• <strong>Payment Processing:</strong> Handle subscriptions, billing, and financial transactions</li>
                    <li>• <strong>Compliance:</strong> Meet regulatory requirements and maintain proper records</li>
                  </ul>
                </div>

                <div className="bg-success/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-success mb-3">Enhancement & Personalization</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Customization:</strong> Personalize content and recommendations based on preferences</li>
                    <li>• <strong>Analytics:</strong> Analyze usage patterns to improve our services and user experience</li>
                    <li>• <strong>Research:</strong> Conduct market research to enhance our research methodologies</li>
                    <li>• <strong>Communication:</strong> Send relevant updates, alerts, and educational content</li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Security & Legal</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Fraud Prevention:</strong> Detect and prevent fraudulent activities and security threats</li>
                    <li>• <strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal processes</li>
                    <li>• <strong>Risk Management:</strong> Assess and manage operational and financial risks</li>
                    <li>• <strong>Dispute Resolution:</strong> Handle complaints, grievances, and legal proceedings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Information Sharing & Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-4">Limited Sharing Policy</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes. 
                  We only share your information in specific circumstances as outlined below:
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Authorized Service Providers</h5>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• <strong>Technology Partners:</strong> Cloud hosting, data analytics, and IT security services</p>
                    <p>• <strong>Payment Processors:</strong> Secure payment gateways and financial institutions</p>
                    <p>• <strong>Communication Services:</strong> Email, SMS, and customer support platforms</p>
                    <p>• <strong>Compliance Partners:</strong> KYC verification and regulatory reporting services</p>
                  </div>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-secondary-foreground mb-3">Regulatory & Legal Requirements</h5>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• <strong>SEBI Reporting:</strong> Regulatory compliance and supervision requirements</p>
                    <p>• <strong>Tax Authorities:</strong> Income tax and financial reporting obligations</p>
                    <p>• <strong>Law Enforcement:</strong> Court orders, legal proceedings, and investigations</p>
                    <p>• <strong>Government Agencies:</strong> As required by applicable laws and regulations</p>
                  </div>
                </div>

                <div className="bg-success/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-success mb-3">Business Transactions</h5>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• <strong>Mergers & Acquisitions:</strong> In case of business reorganization or sale</p>
                    <p>• <strong>Asset Transfer:</strong> When transferring business assets or operations</p>
                    <p>• <strong>Due Diligence:</strong> For potential investors or business partners (anonymized)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Lock className="w-6 h-6 mr-3 text-accent" />
                Data Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-success/10 p-6 rounded-lg">
                <h4 className="font-semibold text-success mb-4">Security Measures</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-success mb-2">Technical Safeguards</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• TLS/SSL encryption for data in transit</li>
                      <li>• Multi-factor authentication systems</li>
                      <li>• Regular security audits and testing</li>
                      <li>• Intrusion detection and prevention</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-success mb-2">Operational Controls</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Role-based access controls</li>
                      <li>• Employee training and background checks</li>
                      <li>• Secure data centers and facilities</li>
                      <li>• Regular backup and disaster recovery</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h5 className="font-semibold text-primary mb-2">Data Retention Policy</h5>
                <p className="text-sm text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services and comply 
                  with legal obligations. Specific retention periods vary based on data type and regulatory requirements, 
                  typically ranging from 5-8 years for financial records.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Users className="w-6 h-6 mr-3 text-accent" />
                Your Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-accent mb-2">Access & Portability</h5>
                    <p className="text-sm text-muted-foreground">
                      Request a copy of your personal data we hold and receive it in a structured, 
                      commonly used format.
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Correction & Update</h5>
                    <p className="text-sm text-muted-foreground">
                      Correct inaccurate information or update your personal details at any time 
                      through your account settings.
                    </p>
                  </div>
                  
                  <div className="bg-success/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-success mb-2">Deletion Rights</h5>
                    <p className="text-sm text-muted-foreground">
                      Request deletion of your personal data, subject to legal retention requirements 
                      and ongoing service needs.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-secondary-foreground mb-2">Consent Management</h5>
                    <p className="text-sm text-muted-foreground">
                      Withdraw consent for optional data processing activities without affecting 
                      your access to essential services.
                    </p>
                  </div>
                  
                  <div className="bg-orange-500/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-600 mb-2">Processing Restriction</h5>
                    <p className="text-sm text-muted-foreground">
                      Request restriction of processing for specific data categories while maintaining 
                      your account and services.
                    </p>
                  </div>
                  
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-600 mb-2">Objection Rights</h5>
                    <p className="text-sm text-muted-foreground">
                      Object to processing of your data for direct marketing, research, or other 
                      specific purposes.
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
                Contact & Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Privacy Officer Contact</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Email:</span>
                    <p className="text-muted-foreground">info@shrinidhicapital.com</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Phone:</span>
                    <p className="text-muted-foreground">+91-90291-77791</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Response Time:</span>
                    <p className="text-muted-foreground">Within 5 business days</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Office Hours:</span>
                    <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <h5 className="font-semibold text-accent mb-2">Policy Updates</h5>
                <p className="text-sm text-muted-foreground">
                  This privacy policy may be updated periodically to reflect changes in our practices 
                  or legal requirements. We will notify you of material changes via email or website notice. 
                  The effective date of the current version is displayed at the top of this policy.
                </p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> January 2024 | 
                  <strong> Version:</strong> 2.1 | 
                  <strong> Next Review:</strong> January 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;