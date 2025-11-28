"use client";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Clock, Search, User } from "lucide-react";
import Image from "next/image";

const MyBorrow = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const borrowedBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowedFrom: "John Doe",
      borrowDate: "2024-03-01",
      dueDate: "2024-04-01",
      status: "active",
      coverImage: "/placeholder.svg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      borrowedFrom: "Jane Smith",
      borrowDate: "2024-02-15",
      dueDate: "2024-03-15",
      status: "overdue",
      coverImage: "/placeholder.svg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      borrowedFrom: "Mike Johnson",
      borrowDate: "2024-01-10",
      dueDate: "2024-02-10",
      status: "returned",
      coverImage: "/placeholder.svg",
    },
  ];

  const filteredBooks = borrowedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "overdue":
        return "bg-red-500";
      case "returned":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Borrowed Books</h1>
          <p className="text-muted-foreground">
            Track and manage books you've borrowed from others
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search borrowed books..."
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
                            book.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-2 h-4 w-4" />
                        Borrowed from: {book.borrowedFrom}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        Borrowed on:{" "}
                        {new Date(book.borrowDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Due date: {new Date(book.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      {book.status === "active" && (
                        <>
                          <Button variant="outline" size="sm">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Extend Period
                          </Button>
                          <Button size="sm">Return Book</Button>
                        </>
                      )}
                      {book.status === "returned" && (
                        <Button variant="outline" size="sm" disabled>
                          Returned
                        </Button>
                      )}
                      {book.status === "overdue" && (
                        <Button variant="destructive" size="sm">
                          Return Now
                        </Button>
                      )}
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
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                No borrowed books found
              </h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "You haven't borrowed any books yet"}
              </p>
              <Button>Browse Books to Borrow</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default MyBorrow;
