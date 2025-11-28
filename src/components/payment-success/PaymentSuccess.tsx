"use client";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ArrowRight } from "lucide-react";

const PaymentSuccess = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    // Clear cart after successful payment
    localStorage.removeItem("cart");
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-emerald-500" />
              </div>
              <CardTitle className="text-2xl text-emerald-600">
                Payment Successful!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Your order has been confirmed and is being processed.
                </p>
                <p className="text-sm text-muted-foreground">
                  Order ID: #ORD-{Date.now()}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  // onClick={() => navigate('/dashboard/my-orders')}
                  className="w-full"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View My Orders
                </Button>

                <Button
                  variant="outline"
                  // onClick={() => navigate('/books')}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  Download your receipt:
                </p>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
