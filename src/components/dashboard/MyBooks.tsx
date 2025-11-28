"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Edit,
  Eye,
  Gift,
  Plus,
  RefreshCw,
  Search,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MyBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock user's books data
  const myBooks = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      condition: "excellent",
      availableFor: ["buy", "borrow"],
      price: 12.99,
      status: "active",
      views: 45,
      inquiries: 3,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      dateAdded: "2024-01-15",
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      condition: "good",
      availableFor: ["donate"],
      status: "active",
      views: 67,
      inquiries: 8,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      dateAdded: "2024-01-10",
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      condition: "new",
      availableFor: ["buy", "exchange"],
      price: 16.5,
      status: "sold",
      views: 89,
      inquiries: 12,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
      dateAdded: "2024-01-05",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-bookspine-green text-white";
      case "sold":
        return "bg-muted text-muted-foreground";
      case "pending":
        return "bg-bookspine-gold text-literary-brown";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "new":
        return "bg-bookspine-green text-white";
      case "excellent":
        return "bg-bookspine-blue text-white";
      case "good":
        return "bg-bookspine-gold text-literary-brown";
      case "fair":
        return "bg-bookspine-red text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getAvailabilityIcons = (availableFor: string[]) => {
    const icons = {
      buy: ShoppingCart,
      borrow: BookOpen,
      donate: Gift,
      exchange: RefreshCw,
    };

    return availableFor.map((type) => {
      const Icon = icons[type as keyof typeof icons];
      return <Icon key={type} className="h-4 w-4" />;
    });
  };

  const filteredBooks = myBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeBooks = filteredBooks.filter((book) => book.status === "active");
  const soldBooks = filteredBooks.filter((book) => book.status === "sold");

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
              My Books
            </h1>
            <p className="text-muted-foreground">
              Manage your book collection and listings
            </p>
          </div>
          <Button size="lg" className="mt-4 md:mt-0" asChild>
            <Link href="/dashboard/add-book">
              <Plus className="w-4 h-4 mr-2" />
              Add New Book
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Books Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">
              Active ({activeBooks.length})
            </TabsTrigger>
            <TabsTrigger value="sold">Sold ({soldBooks.length})</TabsTrigger>
            <TabsTrigger value="all">All ({filteredBooks.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            <BooksGrid books={activeBooks} />
          </TabsContent>

          <TabsContent value="sold" className="mt-6">
            <BooksGrid books={soldBooks} />
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <BooksGrid books={filteredBooks} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

interface BooksGridProps {
  books: any[];
}

const BooksGrid = ({ books }: BooksGridProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-bookspine-green text-white";
      case "sold":
        return "bg-muted text-muted-foreground";
      case "pending":
        return "bg-bookspine-gold text-literary-brown";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "new":
        return "bg-bookspine-green text-white";
      case "excellent":
        return "bg-bookspine-blue text-white";
      case "good":
        return "bg-bookspine-gold text-literary-brown";
      case "fair":
        return "bg-bookspine-red text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getAvailabilityIcons = (availableFor: string[]) => {
    const icons = {
      buy: ShoppingCart,
      borrow: BookOpen,
      donate: Gift,
      exchange: RefreshCw,
    };

    return availableFor.map((type) => {
      const Icon = icons[type as keyof typeof icons];
      return <Icon key={type} className="h-4 w-4" />;
    });
  };

  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-serif font-semibold text-literary-brown mb-2">
          No books found
        </h3>
        <p className="text-muted-foreground mb-6">
          You haven&apos;t added any books yet. Start by adding your first book!
        </p>
        <Button asChild>
          <Link href="/dashboard/add-book">
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Book
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Card key={book.id} className="book-card overflow-hidden">
          <div className="relative">
            <Image
              width={300}
              height={400}
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <Badge
              className={`absolute top-2 right-2 ${getConditionColor(
                book.condition
              )}`}
            >
              {book.condition}
            </Badge>
            <Badge
              className={`absolute top-2 left-2 ${getStatusColor(book.status)}`}
            >
              {book.status}
            </Badge>
          </div>

          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-serif font-semibold text-literary-brown line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getAvailabilityIcons(book.availableFor)}
                </div>
                {book.price && (
                  <span className="font-semibold text-primary">
                    ${book.price}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{book.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-3 w-3" />
                  <span>{book.inquiries} inquiries</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyBooks;
