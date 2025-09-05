import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, Clock, CheckCircle2, XCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 mb-6">
            <RefreshCcw className="w-4 h-4 mr-2" />
            Payment Terms
          </Badge>
          <h1 className="text-display font-bold text-gradient-primary mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive refund policy for our research and advisory services
          </p>
        </div>

        <div className="space-y-8">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <RefreshCcw className="w-6 h-6 mr-3 text-accent" />
                General Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-3">Our Commitment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  At Shrinidhi Capital, we are committed to providing high-quality research services. 
                  Our refund policy is designed to be fair and transparent while ensuring the sustainability 
                  of our research operations and maintaining service quality for all clients.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-success/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-success mb-2">Service Quality Assurance</h5>
                  <p className="text-sm text-muted-foreground">
                    We strive to deliver exceptional research quality and timely service delivery 
                    according to our stated service standards.
                  </p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-2">Fair Resolution</h5>
                  <p className="text-sm text-muted-foreground">
                    Each refund request is evaluated individually based on specific circumstances 
                    and service delivery parameters.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <CheckCircle2 className="w-6 h-6 mr-3 text-success" />
                Eligible Refund Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Service Non-Delivery",
                    description: "If we fail to deliver the promised research services within the specified timeframe without prior notice.",
                    conditions: "Must be reported within 7 days of expected delivery date."
                  },
                  {
                    title: "Technical Issues",
                    description: "Platform or system failures that prevent access to subscribed services for more than 48 consecutive hours.",
                    conditions: "Issue must be reported immediately and verified by our technical team."
                  },
                  {
                    title: "Billing Errors", 
                    description: "Incorrect charges or duplicate payments due to system errors or processing mistakes.",
                    conditions: "Full refund processed within 5-7 business days after verification."
                  },
                  {
                    title: "Subscription Cancellation",
                    description: "Unused portion of pre-paid subscription services cancelled within the cooling-off period.",
                    conditions: "Must be requested within 24-48 hours of subscription activation."
                  }
                ].map((scenario, index) => (
                  <div key={index} className="border border-success/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h5 className="font-semibold text-success mb-2">{scenario.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{scenario.description}</p>
                        <p className="text-xs text-accent font-medium">{scenario.conditions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <XCircle className="w-6 h-6 mr-3 text-destructive" />
                Non-Refundable Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-destructive/10 p-6 rounded-lg">
                <h4 className="font-semibold text-destructive mb-4">Services Not Eligible for Refund</h4>
                <div className="space-y-3">
                  {[
                    "Research reports and recommendations already delivered and accessed",
                    "Services consumed or utilized beyond the cooling-off period",
                    "Market performance related complaints (gains/losses from investments)",
                    "Changes in market conditions affecting recommendation outcomes",
                    "Client's personal financial circumstances or investment decisions",
                    "Third-party platform or broker-related issues beyond our control",
                    "Requests made after service completion or subscription expiry"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient-accent">
                <Clock className="w-6 h-6 mr-3 text-accent" />
                Refund Process & Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Request Submission",
                    description: "Submit refund request through official channels with required documentation",
                    timeline: "Within service terms"
                  },
                  {
                    step: "2", 
                    title: "Initial Review",
                    description: "Our team reviews the request and may seek additional information",
                    timeline: "2-3 business days"
                  },
                  {
                    step: "3",
                    title: "Eligibility Assessment",
                    description: "Detailed assessment of refund eligibility based on terms and service delivery",
                    timeline: "5-7 business days"
                  },
                  {
                    step: "4",
                    title: "Decision Communication",
                    description: "Final decision communicated with detailed reasoning",
                    timeline: "1-2 business days"
                  },
                  {
                    step: "5",
                    title: "Processing & Payment",
                    description: "Approved refunds processed through original payment method",
                    timeline: "7-14 business days"
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
              <CardTitle className="text-gradient-accent">Refund Methods & Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibont text-primary-foreground mb-4">Payment Method Policy</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium text-primary">Original Payment Method</h5>
                    <p className="text-sm text-muted-foreground">
                      Refunds are processed to the same payment method used for the original transaction 
                      (credit card, bank transfer, digital wallet, etc.)
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-medium text-accent">Bank Transfer Time</h5>
                    <p className="text-sm text-muted-foreground">
                      Bank transfers may take 7-14 business days depending on your bank's processing time. 
                      International transfers may take additional time.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-success pl-4">
                    <h5 className="font-medium text-success">Credit Card Refunds</h5>
                    <p className="text-sm text-muted-foreground">
                      Credit card refunds typically appear within 5-10 business days but may take up to 
                      one billing cycle to reflect on your statement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <h5 className="font-semibold text-secondary-foreground mb-2">Alternative Arrangements</h5>
                <p className="text-sm text-muted-foreground">
                  In exceptional cases where the original payment method is not available, alternative 
                  arrangements may be made after proper verification and documentation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-gradient-accent">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold text-accent mb-4">How to Request a Refund</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-accent">Email:</span>
                    <p className="text-muted-foreground">refunds@shrinidhicapital.com</p>
                  </div>
                  <div>
                    <span className="font-medium text-accent">Phone:</span>
                    <p className="text-muted-foreground">+91-XXXXX-XXXXX</p>
                  </div>
                  <div>
                    <span className="font-medium text-accent">Business Hours:</span>
                    <p className="text-muted-foreground">Mon-Fri: 9:00 AM to 6:00 PM</p>
                  </div>
                  <div>
                    <span className="font-medium text-accent">Response Time:</span>
                    <p className="text-muted-foreground">Within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Policy Updates:</strong> This refund policy is subject to periodic updates. 
                  The latest version is always available on our website. Clients will be notified 
                  of significant changes via email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;