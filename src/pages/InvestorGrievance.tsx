import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Phone, Mail, Clock, FileText, Users } from "lucide-react";

const InvestorGrievance = () => {
  return (
    <Layout showParticles={false}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <AlertCircle className="w-4 h-4 mr-2" />
            Investor Support
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Investor Grievance
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive grievance redressal mechanism for investor complaints and concerns
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Users className="w-6 h-6 mr-3 text-accent" />
                Grievance Redressal Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Our Commitment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Shrinidhi Capital is committed to providing excellent service to our investors and clients. 
                  We have established a comprehensive grievance redressal mechanism to address any concerns, 
                  complaints, or grievances promptly and effectively.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-accent">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">24-48 hours acknowledgment</p>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <FileText className="w-8 h-8 text-success mx-auto mb-3" />
                  <h4 className="font-semibold text-success">Transparent Process</h4>
                  <p className="text-sm text-muted-foreground">Clear resolution timeline</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">Dedicated Team</h4>
                  <p className="text-sm text-muted-foreground">Specialized support staff</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">How to Lodge a Complaint</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary-foreground mb-4">Contact Methods</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h5 className="font-semibold">Email Support</h5>
                        <p className="text-sm text-muted-foreground">grievance@shrinidhicapital.com</p>
                        <p className="text-xs text-muted-foreground">Primary channel for complaints</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h5 className="font-semibold">Phone Support</h5>
                        <p className="text-sm text-muted-foreground">+91-XXXXX-XXXXX</p>
                        <p className="text-xs text-muted-foreground">Mon-Fri: 9:00 AM to 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h5 className="font-semibold">Written Complaint</h5>
                        <p className="text-sm text-muted-foreground">Postal Address Available</p>
                        <p className="text-xs text-muted-foreground">For formal documentation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h5 className="font-semibold">In-Person</h5>
                        <p className="text-sm text-muted-foreground">Office Visit</p>
                        <p className="text-xs text-muted-foreground">By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold text-accent mb-4">Information Required for Complaint</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete contact information (Name, address, phone, email)</li>
                  <li>• Client ID or account reference number</li>
                  <li>• Detailed description of the complaint/grievance</li>
                  <li>• Supporting documents (if any)</li>
                  <li>• Preferred mode of communication for resolution</li>
                  <li>• Expected resolution or remedy sought</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Grievance Resolution Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Complaint Registration",
                    description: "Your complaint is registered within 24 hours with a unique reference number",
                    timeline: "Within 24 hours"
                  },
                  {
                    step: "2", 
                    title: "Initial Assessment",
                    description: "Our team reviews the complaint and may request additional information",
                    timeline: "1-2 business days"
                  },
                  {
                    step: "3",
                    title: "Investigation",
                    description: "Detailed investigation is conducted by relevant department heads",
                    timeline: "5-7 business days"
                  },
                  {
                    step: "4",
                    title: "Resolution & Response",
                    description: "Final resolution communicated with detailed explanation",
                    timeline: "Within 15 days"
                  }
                ].map((process, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-muted/20 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {process.step}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">{process.title}</h5>
                        <Badge variant="secondary" className="text-xs">
                          {process.timeline}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Escalation Matrix</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold text-accent mb-4">If Not Satisfied with Resolution</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <h5 className="font-semibold text-secondary">Level 1: Compliance Officer</h5>
                    <p className="text-sm text-muted-foreground">
                      Email: compliance@shrinidhicapital.com<br/>
                      Resolution Timeline: 7-10 business days
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold text-primary">Level 2: SEBI Complaints Redress System (SCORES)</h5>
                    <p className="text-sm text-muted-foreground">
                      Website: scores.gov.in<br/>
                      For unresolved complaints after internal process
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-semibold text-accent">Level 3: Ombudsman</h5>
                    <p className="text-sm text-muted-foreground">
                      As per SEBI guidelines for further escalation<br/>
                      When SCORES resolution is not satisfactory
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button className="hero-glow">
                  <Mail className="w-4 h-4 mr-2" />
                  File a Complaint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InvestorGrievance;