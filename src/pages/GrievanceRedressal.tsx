import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Users, Phone, Mail, Clock, FileText, ArrowRight } from "lucide-react";

const GrievanceRedressal = () => {
  return (
    <Layout showParticles={false}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Complaint Resolution
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Grievance Redressal Process
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive process for addressing investor complaints and ensuring fair resolution
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <AlertCircle className="w-6 h-6 mr-3 text-accent" />
                Overview of Our Grievance System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <h4 className="font-bold text-xl mb-4">Our Commitment to You</h4>
                <p className="text-lg leading-relaxed">
                  Shrinidhi Capital is dedicated to providing excellent customer service and maintaining 
                  the highest standards of client satisfaction. Our structured grievance redressal process 
                  ensures that every concern is addressed promptly, fairly, and effectively.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <Clock className="w-8 h-8 text-success mx-auto mb-3" />
                  <h4 className="font-semibold text-success">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">Immediate acknowledgment within 24 hours</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-accent">Dedicated Team</h4>
                  <p className="text-sm text-muted-foreground">Specialized grievance handling experts</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">Transparent Process</h4>
                  <p className="text-sm text-muted-foreground">Clear steps and regular updates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Step-by-Step Grievance Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                {[
                  {
                    step: "STEP 1",
                    title: "Initial Contact & Registration",
                    description: "Lodge your complaint through any of our official channels. Every grievance receives a unique reference number for tracking.",
                    details: [
                      "Complaint registered within 2 hours during business hours",
                      "Unique reference number provided for tracking",
                      "Automatic acknowledgment sent via email/SMS",
                      "Initial assessment of complaint category and priority"
                    ],
                    timeline: "Same Day"
                  },
                  {
                    step: "STEP 2",
                    title: "Detailed Review & Investigation",
                    description: "Our team conducts a thorough investigation of your complaint, gathering all relevant information and documentation.",
                    details: [
                      "Assignment to appropriate department specialist",
                      "Review of account history and service records", 
                      "Collection of supporting evidence and documentation",
                      "Internal consultation with relevant teams if needed"
                    ],
                    timeline: "2-5 Business Days"
                  },
                  {
                    step: "STEP 3",
                    title: "Analysis & Solution Development",
                    description: "We analyze all findings and develop appropriate solutions or corrective actions based on our investigation.",
                    details: [
                      "Comprehensive analysis of complaint validity",
                      "Identification of root causes and systemic issues",
                      "Development of corrective and preventive actions",
                      "Preparation of detailed response with recommendations"
                    ],
                    timeline: "3-7 Business Days"
                  },
                  {
                    step: "STEP 4",
                    title: "Resolution & Communication",
                    description: "Final resolution is implemented and communicated to you with detailed explanation of actions taken.",
                    details: [
                      "Implementation of approved resolution measures",
                      "Detailed communication of findings and actions",
                      "Confirmation of client satisfaction with resolution",
                      "Follow-up to ensure complete issue resolution"
                    ],
                    timeline: "1-3 Business Days"
                  }
                ].map((process, index) => (
                  <div key={index} className="relative">
                    <div className="flex space-x-6 p-6 bg-muted/20 rounded-xl">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground">
                          <span className="text-xs font-bold">{process.step}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-gradient-primary">{process.title}</h4>
                          <Badge className="bg-accent/20 text-accent">
                            {process.timeline}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{process.description}</p>
                        <div className="bg-background/50 p-4 rounded-lg">
                          <h5 className="font-medium text-accent mb-2">Key Activities:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {process.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="flex justify-center py-4">
                        <ArrowRight className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Multiple Contact Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <h5 className="font-semibold text-primary">Email Support</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Primary:</strong> grievance@shrinidhicapital.com</p>
                      <p><strong>Escalation:</strong> compliance@shrinidhicapital.com</p>
                      <p><strong>Response Time:</strong> Within 4-6 hours</p>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <h5 className="font-semibold text-accent">Phone Support</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Helpline:</strong> +91-XXXXX-XXXXX</p>
                      <p><strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-success/10 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="w-5 h-5 text-success" />
                      <h5 className="font-semibold text-success">Written Complaint</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Address:</strong> [Complete Postal Address]</p>
                      <p><strong>Attention:</strong> Grievance Officer</p>
                      <p><strong>Processing:</strong> 1-2 business days</p>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="w-5 h-5 text-secondary" />
                      <h5 className="font-semibold text-secondary">In-Person Visit</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Office:</strong> By appointment only</p>
                      <p><strong>Schedule:</strong> Call ahead to book</p>
                      <p><strong>Officer:</strong> Dedicated grievance personnel</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Escalation Matrix</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold text-accent mb-4">When Standard Process Doesn't Resolve Your Issue</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="font-semibold text-primary mb-2">Level 1: Internal Escalation</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>To:</strong> Compliance Officer & Senior Management<br/>
                      <strong>Timeline:</strong> If not resolved within 15 business days<br/>
                      <strong>Contact:</strong> escalation@shrinidhicapital.com
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-6">
                    <h5 className="font-semibold text-accent mb-2">Level 2: SEBI SCORES Portal</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Platform:</strong> Securities Complaint Redressal System<br/>
                      <strong>Website:</strong> scores.gov.in<br/>
                      <strong>When:</strong> After internal process completion
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-success pl-6">
                    <h5 className="font-semibold text-success mb-2">Level 3: Ombudsman Scheme</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Authority:</strong> SEBI appointed Ombudsman<br/>
                      <strong>Eligibility:</strong> Unsatisfied with SCORES resolution<br/>
                      <strong>Process:</strong> As per SEBI Ombudsman guidelines
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Key Information for Complaint Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold text-primary-foreground mb-4">Required Information</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-primary mb-2">Personal Details</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Full name and contact information</li>
                      <li>• Client ID or account reference</li>
                      <li>• Preferred communication method</li>
                      <li>• Best time to contact</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-2">Complaint Details</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Nature and description of complaint</li>
                      <li>• Dates and timeline of incidents</li>
                      <li>• Supporting documents/evidence</li>
                      <li>• Expected resolution or remedy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button className="hero-glow mr-4">
                  <Mail className="w-4 h-4 mr-2" />
                  File a Complaint
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default GrievanceRedressal;