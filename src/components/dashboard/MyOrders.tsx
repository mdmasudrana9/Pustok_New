"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Clock, CheckCircle, XCircle, Eye } from "lucide-react";
import Image from "next/image";

const MyOrders = () => {
  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      books: [
        {
          title: "The Midnight Library",
          author: "Matt Haig",
          price: 15.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        },
      ],
      total: 15.99,
      status: "delivered",
      trackingNumber: "TRK123456789",
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      books: [
        {
          title: "Atomic Habits",
          author: "James Clear",
          price: 18.5,
          quantity: 2,
          image:
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
        },
      ],
      total: 37.0,
      status: "processing",
      trackingNumber: "TRK987654321",
    },
    {
      id: "ORD-003",
      date: "2024-01-25",
      books: [
        {
          title: "The 7 Habits of Highly Effective People",
          author: "Stephen Covey",
          price: 16.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        },
      ],
      total: 16.99,
      status: "shipped",
      trackingNumber: "TRK456789123",
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="h-4 w-4" />;
      case "shipped":
        return <Package className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "secondary";
      case "shipped":
        return "default";
      case "delivered":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  const filterOrdersByStatus = (status: string) => {
    if (status === "all") return orders;
    return orders.filter((order) => order.status === status);
  };

  const OrderCard = ({ order }: any) => (
    <Card className="mb-4">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-serif text-literary-brown">
              Order {order.id}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Placed on {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
          <Badge
            variant={getStatusColor(order.status)}
            className="flex items-center gap-1"
          >
            {getStatusIcon(order.status)}
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order.books.map((book: any, index: number) => (
            <div key={index} className="flex gap-4">
              <Image
                width={64}
                height={80}
                src={book.image}
                alt={book.title}
                className="w-16 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-medium text-literary-brown">
                  {book.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  by {book.author}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">Qty: {book.quantity}</span>
                  <span className="font-semibold">
                    ${book.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">
                Tracking: {order.trackingNumber}
              </p>
              <p className="font-semibold">Total: ${order.total.toFixed(2)}</p>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
            My Orders
          </h1>
          <p className="text-muted-foreground">
            Track and manage your book orders
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="processing" className="space-y-4">
            {filterOrdersByStatus("processing").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="shipped" className="space-y-4">
            {filterOrdersByStatus("shipped").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="delivered" className="space-y-4">
            {filterOrdersByStatus("delivered").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {filterOrdersByStatus("cancelled").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>
        </Tabs>

        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-serif font-bold text-literary-brown mb-4">
              No Orders Yet
            </h2>
            <p className="text-muted-foreground mb-8">
              You haven&apos;t placed any orders yet. Start browsing books to
              make your first purchase!
            </p>
            <Button size="lg" asChild>
              <a href="/books">Browse Books</a>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyOrders;
