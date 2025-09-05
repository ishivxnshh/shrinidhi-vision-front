import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Shield, Eye, FileText } from "lucide-react";

const UserConsent = () => {
  return (
    <Layout showParticles={false}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <UserCheck className="w-4 h-4 mr-2" />
            Data Protection
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            User Consent
          </h1>
          <p className="text-xl text-muted-foreground">
            Your consent preferences and data usage permissions for our services
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <UserCheck className="w-6 h-6 mr-3 text-accent" />
                Consent Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Your Control Over Data</h4>
                <p className="text-muted-foreground leading-relaxed">
                  At Shrinidhi Capital, we respect your privacy and give you complete control over how 
                  your personal information is collected, used, and shared. This consent framework 
                  explains your rights and our obligations regarding your data.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-accent">Data Protection</h4>
                  <p className="text-sm text-muted-foreground">Secure handling of your information</p>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <Eye className="w-8 h-8 text-success mx-auto mb-3" />
                  <h4 className="font-semibold text-success">Transparency</h4>
                  <p className="text-sm text-muted-foreground">Clear disclosure of data usage</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <UserCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">Your Choice</h4>
                  <p className="text-sm text-muted-foreground">Control over consent preferences</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Types of Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-success/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-success mb-4">Essential Services Consent</h4>
                  <p className="text-muted-foreground mb-4">
                    Required for core service delivery and cannot be opted out while using our services:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Account creation and management</li>
                    <li>• Service delivery and research reports</li>
                    <li>• Payment processing and billing</li>
                    <li>• Customer support and communication</li>
                    <li>• Legal compliance and regulatory requirements</li>
                    <li>• Security and fraud prevention</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-accent mb-4">Optional Services Consent</h4>
                  <p className="text-muted-foreground mb-4">
                    You can choose to opt-in or opt-out of these services at any time:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-accent mb-2">Marketing Communications</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Email newsletters and updates</li>
                        <li>• SMS notifications for market alerts</li>
                        <li>• Promotional offers and announcements</li>
                        <li>• Educational content and webinars</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-accent mb-2">Analytics & Improvement</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Website usage analytics</li>
                        <li>• Service improvement feedback</li>
                        <li>• Personalized recommendations</li>
                        <li>• Market research participation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <FileText className="w-6 h-6 mr-3 text-accent" />
                Data Collection & Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Information We Collect</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-medium text-primary mb-2">Personal Information</h6>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Name and contact details</li>
                        <li>• Financial information (income, assets)</li>
                        <li>• Investment objectives and preferences</li>
                        <li>• Identity verification documents</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-primary mb-2">Usage Information</h6>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Website interaction data</li>
                        <li>• Service usage patterns</li>
                        <li>• Device and browser information</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-secondary-foreground mb-3">How We Use Your Data</h5>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• <strong>Service Delivery:</strong> Provide research reports, recommendations, and customer support</p>
                    <p>• <strong>Personalization:</strong> Customize content and recommendations based on your preferences</p>
                    <p>• <strong>Communication:</strong> Send service updates, market alerts, and educational content</p>
                    <p>• <strong>Compliance:</strong> Meet regulatory requirements and maintain proper records</p>
                    <p>• <strong>Improvement:</strong> Analyze usage patterns to enhance our services and user experience</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Managing Your Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold text-accent mb-4">Your Rights & Options</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-success pl-4">
                    <h5 className="font-medium text-success">Access & Portability</h5>
                    <p className="text-sm text-muted-foreground">
                      Request access to your personal data and receive it in a portable format
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium text-primary">Modification & Correction</h5>
                    <p className="text-sm text-muted-foreground">
                      Update or correct your personal information and consent preferences
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-medium text-accent">Withdrawal of Consent</h5>
                    <p className="text-sm text-muted-foreground">
                      Withdraw consent for optional services without affecting essential services
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-4">
                    <h5 className="font-medium text-destructive">Data Deletion</h5>
                    <p className="text-sm text-muted-foreground">
                      Request deletion of your data (subject to legal retention requirements)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h5 className="font-semibold text-primary mb-3">How to Update Your Preferences</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Online Account:</span>
                    <p className="text-muted-foreground">Update preferences in your account settings</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Email Request:</span>
                    <p className="text-muted-foreground">privacy@shrinidhicapital.com</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Phone Support:</span>
                    <p className="text-muted-foreground">+91-XXXXX-XXXXX</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Written Request:</span>
                    <p className="text-muted-foreground">Official postal address</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Shield className="w-6 h-6 mr-3 text-accent" />
                Data Sharing & Third Parties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary-foreground mb-4">Limited Data Sharing</h4>
                <p className="text-muted-foreground mb-4">
                  We only share your data in specific circumstances and with explicit consent or legal obligation:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Service Providers</h5>
                    <p className="text-sm text-muted-foreground">
                      Technology partners, payment processors, and compliance services under strict data protection agreements
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Regulatory Authorities</h5>
                    <p className="text-sm text-muted-foreground">
                      As required by SEBI, tax authorities, and other regulatory bodies for compliance purposes
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Legal Requirements</h5>
                    <p className="text-sm text-muted-foreground">
                      Court orders, legal proceedings, and law enforcement requests as mandated by law
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <h5 className="font-semibold text-accent mb-2">Your Consent Record</h5>
                <p className="text-sm text-muted-foreground">
                  We maintain a record of your consent preferences and any changes you make. 
                  This helps us ensure we're honoring your choices and provides transparency in our data practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default UserConsent;