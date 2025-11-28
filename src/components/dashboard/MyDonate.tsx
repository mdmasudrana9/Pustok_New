"use client";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Heart, User, Package } from "lucide-react";
import Image from "next/image";

const MyDonate = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const donatedBooks = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      donatedTo: "Sarah Wilson",
      donationDate: "2024-03-10",
      status: "delivered",
      coverImage: "/placeholder.svg",
      impact: "Helped a student with their literature course",
    },
    {
      id: 2,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      donatedTo: "Community Library",
      donationDate: "2024-02-25",
      status: "in-transit",
      coverImage: "/placeholder.svg",
      impact: "Being processed by the library",
    },
    {
      id: 3,
      title: "Harry Potter Series",
      author: "J.K. Rowling",
      donatedTo: "Children's Home",
      donationDate: "2024-01-20",
      status: "delivered",
      coverImage: "/placeholder.svg",
      impact: "Brought joy to 15 children",
    },
  ];

  const filteredBooks = donatedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "in-transit":
        return "bg-blue-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const stats = {
    totalDonated: donatedBooks.length,
    totalImpact: 23,
    recentDonations: donatedBooks.filter(
      (b) => new Date(b.donationDate) > new Date("2024-02-01")
    ).length,
  };

  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Donations</h1>
          <p className="text-muted-foreground">
            Track your book donations and see the impact you've made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Donated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalDonated}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Books given to others
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                People Helped
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalImpact}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Lives touched by your generosity
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Recent Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.recentDonations}</div>
              <p className="text-xs text-muted-foreground mt-1">
                In the last 30 days
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search donated books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Image
                    height={192}
                    width={128}
                    src={book.coverImage}
                    alt={book.title}
                    className="w-32 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{book.title}</h3>
                        <p className="text-muted-foreground mb-2">
                          by {book.author}
                        </p>
                        <Badge className={getStatusColor(book.status)}>
                          {book.status.charAt(0).toUpperCase() +
                            book.status.slice(1).replace("-", " ")}
                        </Badge>
                      </div>
                      <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-2 h-4 w-4" />
                        Donated to: {book.donatedTo}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        Donation date:{" "}
                        {new Date(book.donationDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Package className="mr-2 h-4 w-4" />
                        Status: {book.status.replace("-", " ")}
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm">
                        <span className="font-semibold">Impact: </span>
                        {book.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No donations found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "You haven't donated any books yet. Start making a difference!"}
              </p>
              <Button>Donate a Book</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default MyDonate;
