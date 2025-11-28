/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RefreshCw,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRightLeft,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MyExchange = () => {
  const [exchanges] = useState([
    {
      id: "EXC-001",
      date: "2024-01-10",
      status: "completed",
      myBook: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        condition: "good",
        image:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      },
      theirBook: {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        condition: "excellent",
        image:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      },
      partner: "Emily Johnson",
      notes: "Great condition books, smooth exchange!",
    },
    {
      id: "EXC-002",
      date: "2024-01-18",
      status: "pending",
      myBook: {
        title: "1984",
        author: "George Orwell",
        condition: "excellent",
        image:
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
      },
      theirBook: {
        title: "Brave New World",
        author: "Aldous Huxley",
        condition: "good",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      },
      partner: "Michael Chen",
      notes: "Waiting for partner confirmation",
    },
    {
      id: "EXC-003",
      date: "2024-01-22",
      status: "in-progress",
      myBook: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        condition: "good",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      },
      theirBook: {
        title: "Lord of the Flies",
        author: "William Golding",
        condition: "excellent",
        image:
          "https://images.unsplash.com/photo-1554475901-e2ce1a3f857e?w=300&h=400&fit=crop",
      },
      partner: "Sarah Williams",
      notes: "Books shipped, awaiting delivery confirmation",
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "in-progress":
        return <RefreshCw className="h-4 w-4" />;
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "secondary";
      case "in-progress":
        return "default";
      case "completed":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  const filterExchangesByStatus = (status: string) => {
    if (status === "all") return exchanges;
    return exchanges.filter((exchange) => exchange.status === status);
  };

  const ExchangeCard = ({ exchange }: any) => (
    <Card className="mb-4">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-serif text-literary-brown">
              Exchange {exchange.id}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Started on {new Date(exchange.date).toLocaleDateString()}
            </p>
            <p className="text-sm font-medium">Partner: {exchange.partner}</p>
          </div>
          <Badge
            variant={getStatusColor(exchange.status)}
            className="flex items-center gap-1"
          >
            {getStatusIcon(exchange.status)}
            {exchange.status.charAt(0).toUpperCase() +
              exchange.status.slice(1).replace("-", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Book */}
            <div className="space-y-3">
              <h4 className="font-semibold text-literary-brown flex items-center gap-2">
                My Book
              </h4>
              <div className="flex gap-4">
                <Image
                  width={64}
                  height={80}
                  src={exchange.myBook.image}
                  alt={exchange.myBook.title}
                  className="w-16 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h5 className="font-medium">{exchange.myBook.title}</h5>
                  <p className="text-sm text-muted-foreground">
                    by {exchange.myBook.author}
                  </p>
                  <Badge variant="outline" className="mt-1">
                    {exchange.myBook.condition}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Exchange Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRightLeft className="h-8 w-8 text-primary" />
            </div>

            {/* Their Book */}
            <div className="space-y-3">
              <h4 className="font-semibold text-literary-brown flex items-center gap-2">
                Their Book
              </h4>
              <div className="flex gap-4">
                <Image
                  width={64}
                  height={80}
                  src={exchange.theirBook.image}
                  alt={exchange.theirBook.title}
                  className="w-16 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h5 className="font-medium">{exchange.theirBook.title}</h5>
                  <p className="text-sm text-muted-foreground">
                    by {exchange.theirBook.author}
                  </p>
                  <Badge variant="outline" className="mt-1">
                    {exchange.theirBook.condition}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {exchange.notes && (
            <div className="bg-muted/50 p-3 rounded-lg">
              <p className="text-sm">
                <strong>Notes:</strong> {exchange.notes}
              </p>
            </div>
          )}

          <div className="flex justify-end">
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
            My Exchanges
          </h1>
          <p className="text-muted-foreground">
            Track your book exchange requests and history
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Exchanges</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {exchanges.map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {filterExchangesByStatus("pending").map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            {filterExchangesByStatus("in-progress").map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {filterExchangesByStatus("completed").map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {filterExchangesByStatus("cancelled").map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </TabsContent>
        </Tabs>

        {exchanges.length === 0 && (
          <div className="text-center py-12">
            <ArrowRightLeft className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-serif font-bold text-literary-brown mb-4">
              No Exchanges Yet
            </h2>
            <p className="text-muted-foreground mb-8">
              You haven&apos;t initiated any book exchanges yet. Browse books
              and find someone to exchange with!
            </p>
            <Button size="lg" asChild>
              <Link href="/books">Browse Books</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyExchange;
