"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid, List, Search } from "lucide-react";
import { useState } from "react";

import BookCard from "@/components/books/BookCard";

const Books = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    condition: "all",
    availability: "all",
    priceRange: "all",
  });

  // Sample books data
  const allBooks = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 15.99,
      rating: 4.5,
      reviews: 128,
      condition: "new" as const,
      availableFor: ["buy", "borrow"] as (
        | "buy"
        | "borrow"
        | "donate"
        | "exchange"
      )[],
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      description:
        "A philosophical novel about life's infinite possibilities and the choices that define us.",
      category: "Fiction",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 18.5,
      rating: 4.8,
      reviews: 256,
      condition: "excellent" as const,
      availableFor: ["buy", "exchange"] as (
        | "buy"
        | "borrow"
        | "donate"
        | "exchange"
      )[],
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
      description:
        "Transform your life through the power of small, consistent changes and habit formation.",
      category: "Self-Help",
    },
    {
      id: "3",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      rating: 4.7,
      reviews: 189,
      condition: "good" as const,
      availableFor: ["donate"] as ("buy" | "borrow" | "donate" | "exchange")[],
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description:
        "A captivating story of love, ambition, and the price of fame in old Hollywood.",
      category: "Romance",
    },
    {
      id: "4",
      title: "Dune",
      author: "Frank Herbert",
      price: 22.99,
      rating: 4.6,
      reviews: 342,
      condition: "new" as const,
      availableFor: ["buy", "borrow", "exchange"] as (
        | "buy"
        | "borrow"
        | "donate"
        | "exchange"
      )[],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
      description:
        "Epic science fiction masterpiece set on the desert planet Arrakis.",
      category: "Sci-Fi",
    },
    {
      id: "5",
      title: "Becoming",
      author: "Michelle Obama",
      price: 16.99,
      rating: 4.9,
      reviews: 445,
      condition: "excellent" as const,
      availableFor: ["buy", "borrow"] as (
        | "buy"
        | "borrow"
        | "donate"
        | "exchange"
      )[],
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
      description:
        "An inspiring memoir from the former First Lady of the United States.",
      category: "Biography",
    },
    {
      id: "6",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 14.99,
      rating: 4.4,
      reviews: 198,
      condition: "good" as const,
      availableFor: ["buy", "exchange"] as (
        | "buy"
        | "borrow"
        | "donate"
        | "exchange"
      )[],
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=400&fit=crop",
      description:
        "Timeless lessons on wealth, greed, and happiness from a behavioral finance expert.",
      category: "Finance",
    },
  ];

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Biography",
    "Self-Help",
    "Finance",
    "History",
  ];
  const conditions = ["new", "excellent", "good", "fair"];
  const availabilityOptions = ["buy", "borrow", "donate", "exchange"];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-literary-brown mb-4">
            Discover Books
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore our vast collection of books available for purchase,
            borrowing, donation, and exchange.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search books or authors..."
                className="pl-10"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
            </div>

            {/* Category Filter */}
            <Select
              value={filters.category}
              onValueChange={(value) =>
                setFilters({ ...filters, category: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Condition Filter */}
            <Select
              value={filters.condition}
              onValueChange={(value) =>
                setFilters({ ...filters, condition: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                {conditions.map((condition) => (
                  <SelectItem key={condition} value={condition}>
                    {condition.charAt(0).toUpperCase() + condition.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Availability Filter */}
            <Select
              value={filters.availability}
              onValueChange={(value) =>
                setFilters({ ...filters, availability: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Available for" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Options</SelectItem>
                {availabilityOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select
              value={filters.priceRange}
              onValueChange={(value) =>
                setFilters({ ...filters, priceRange: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-10">$0 - $10</SelectItem>
                <SelectItem value="10-20">$10 - $20</SelectItem>
                <SelectItem value="20-50">$20 - $50</SelectItem>
                <SelectItem value="50+">$50+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(
              ([key, value]) =>
                value !== "all" &&
                value !== "" && (
                  <Badge key={key} variant="secondary" className="capitalize">
                    {key}: {value}
                  </Badge>
                )
            )}
          </div>
        </div>

        {/* View Controls and Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-muted-foreground">
            Showing {allBooks.length} books
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Books Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {allBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Books
          </Button>
        </div>
      </div>
    </>
  );
};

export default Books;
