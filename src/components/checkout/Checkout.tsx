"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CreditCard,
  Wallet,
  Building2,
  Shield,
  Truck,
  MapPin,
  ArrowLeft,
  Lock,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import Image from "next/image";

const Checkout = () => {
  const { toast } = useToast();
  // const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  // Mock cart data - in real app would come from cart state
  const cartItems = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 15.99,
      quantity: 1,
      condition: "new",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 18.5,
      quantity: 2,
      condition: "excellent",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 4.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Bangladesh",
  });

  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Bangladesh",
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === "shipping") {
      setShippingInfo((prev) => ({ ...prev, [field]: value }));
    } else if (section === "billing") {
      setBillingInfo((prev) => ({ ...prev, [field]: value }));
    } else if (section === "card") {
      setCardInfo((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !shippingInfo.firstName ||
      !shippingInfo.email ||
      !shippingInfo.address
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required shipping information.",
        variant: "destructive",
      });
      return;
    }

    if (
      paymentMethod === "card" &&
      (!cardInfo.cardNumber || !cardInfo.expiryDate || !cardInfo.cvv)
    ) {
      toast({
        title: "Payment Information Required",
        description: "Please complete your payment information.",
        variant: "destructive",
      });
      return;
    }

    // Simulate order processing
    toast({
      title: "Order Placed Successfully!",
      description: `Your order of $${total.toFixed(
        2
      )} has been confirmed. You'll receive a confirmation email shortly.`,
    });

    // Navigate to order confirmation
    setTimeout(() => {
      // navigate('/dashboard/my-orders');
    }, 2000);
  };

  const paymentMethods = [
    {
      id: "card",
      label: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "mobile",
      label: "Mobile Banking",
      icon: Wallet,
      description: "bKash, Nagad, Rocket",
    },
    {
      id: "bank",
      label: "Bank Transfer",
      icon: Building2,
      description: "Direct bank transfer",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
            Secure Checkout
          </h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Your payment information is protected with industry-standard
            encryption
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={shippingInfo.firstName}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "firstName",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={shippingInfo.lastName}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "lastName",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={shippingInfo.email}
                        onChange={(e) =>
                          handleInputChange("shipping", "email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+880 1234 567890"
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          handleInputChange("shipping", "phone", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street, Apartment 4B"
                      value={shippingInfo.address}
                      onChange={(e) =>
                        handleInputChange("shipping", "address", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="Dhaka"
                        value={shippingInfo.city}
                        onChange={(e) =>
                          handleInputChange("shipping", "city", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Region</Label>
                      <Input
                        id="state"
                        placeholder="Dhaka Division"
                        value={shippingInfo.state}
                        onChange={(e) =>
                          handleInputChange("shipping", "state", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="1000"
                        value={shippingInfo.zipCode}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "zipCode",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div
                          key={method.id}
                          className="flex items-start space-x-3 p-4 border rounded-lg"
                        >
                          <RadioGroupItem
                            value={method.id}
                            id={method.id}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <Icon className="h-5 w-5 text-primary" />
                              <Label
                                htmlFor={method.id}
                                className="font-medium cursor-pointer"
                              >
                                {method.label}
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </RadioGroup>

                  {/* Card Details */}
                  {paymentMethod === "card" && (
                    <div className="mt-6 p-4 border rounded-lg space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={cardInfo.cardName}
                          onChange={(e) =>
                            handleInputChange(
                              "card",
                              "cardName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardInfo.cardNumber}
                          onChange={(e) =>
                            handleInputChange(
                              "card",
                              "cardNumber",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={cardInfo.expiryDate}
                            onChange={(e) =>
                              handleInputChange(
                                "card",
                                "expiryDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={cardInfo.cvv}
                            onChange={(e) =>
                              handleInputChange("card", "cvv", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Banking */}
                  {paymentMethod === "mobile" && (
                    <div className="mt-6 p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-4">
                        You will be redirected to your mobile banking app to
                        complete the payment.
                      </p>
                      <div className="flex gap-4">
                        <Button type="button" variant="outline" size="sm">
                          bKash
                        </Button>
                        <Button type="button" variant="outline" size="sm">
                          Nagad
                        </Button>
                        <Button type="button" variant="outline" size="sm">
                          Rocket
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Bank Transfer */}
                  {paymentMethod === "bank" && (
                    <div className="mt-6 p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Bank transfer details will be provided after order
                        confirmation.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Billing Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="sameAsShipping"
                      checked={sameAsShipping}
                      onCheckedChange={(checked) =>
                        setSameAsShipping(checked === true)
                      }
                    />
                    <Label htmlFor="sameAsShipping">
                      Same as shipping address
                    </Label>
                  </div>

                  {!sameAsShipping && (
                    <div className="space-y-4">
                      {/* Billing form fields - similar to shipping */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="billingFirstName">First Name</Label>
                          <Input
                            id="billingFirstName"
                            value={billingInfo.firstName}
                            onChange={(e) =>
                              handleInputChange(
                                "billing",
                                "firstName",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billingLastName">Last Name</Label>
                          <Input
                            id="billingLastName"
                            value={billingInfo.lastName}
                            onChange={(e) =>
                              handleInputChange(
                                "billing",
                                "lastName",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      {/* Add more billing fields as needed */}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <Image
                          height={64}
                          width={64}
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {item.author}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {item.condition}
                            </Badge>
                            <span className="text-sm font-medium">
                              {item.quantity}x ${item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Lock className="w-4 h-4 mr-2" />
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing your order, you agree to our Terms of Service and
                    Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
