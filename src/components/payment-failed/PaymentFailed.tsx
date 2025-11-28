"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, RefreshCw, ArrowLeft, HelpCircle } from "lucide-react";

const PaymentFailed = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <XCircle className="h-16 w-16 text-destructive" />
              </div>
              <CardTitle className="text-2xl text-destructive">
                Payment Failed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  We couldn&apos;t process your payment. Please try again or
                  contact support.
                </p>
                <p className="text-sm text-muted-foreground">
                  Transaction ID: #TXN-{Date.now()}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  // onClick={() => navigate("/checkout")}
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>

                <Button
                  variant="outline"
                  // onClick={() => navigate("/cart")}
                  className="w-full"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Cart
                </Button>
              </div>

              <div className="pt-4 border-t space-y-3">
                <h4 className="font-medium">Common Issues:</h4>
                <ul className="text-sm text-muted-foreground text-left space-y-1">
                  <li>• Insufficient funds</li>
                  <li>• Incorrect card details</li>
                  <li>• Network timeout</li>
                  <li>• Bank security restrictions</li>
                </ul>

                <Button
                  variant="ghost"
                  size="sm"
                  // onClick={() => navigate("/contact")}
                >
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
