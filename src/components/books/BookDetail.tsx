"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  BookOpen,
  Gift,
  Heart,
  MessageCircle,
  RefreshCw,
  Share2,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";

const BookDetail = () => {
  // const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedAction, setSelectedAction] = useState<string>("buy");

  // Mock book data (in real app, fetch based on id)
  const book = {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 15.99,
    rating: 4.5,
    reviews: 128,
    condition: "new",
    availableFor: ["buy", "borrow"],
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=600&fit=crop",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices...",
    fullDescription: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?

A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time. Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life.`,
    category: "Fiction",
    genre: ["Contemporary Fiction", "Philosophy", "Fantasy"],
    pages: 288,
    language: "English",
    publisher: "Canongate Books",
    isbn: "978-1786892706",
    seller: {
      name: "Sarah Johnson",
      rating: 4.8,
      totalSales: 156,
    },
  };

  const reviews = [
    {
      id: 1,
      user: "Alice Cooper",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely loved this book! The concept is fascinating and the writing is beautiful. Highly recommended for anyone going through a difficult time.",
    },
    {
      id: 2,
      user: "Mike Chen",
      rating: 4,
      date: "1 month ago",
      comment:
        "Thought-provoking and emotionally engaging. Matt Haig has a wonderful way of exploring deep themes through accessible storytelling.",
    },
    {
      id: 3,
      user: "Emma Davis",
      rating: 5,
      date: "2 months ago",
      comment:
        "This book changed my perspective on life. The midnight library concept is brilliant and the execution is flawless.",
    },
  ];

  const handleAddToCart = () => {
    addToCart(book, selectedAction as "buy" | "borrow" | "donate" | "exchange");
  };

  const getActionButton = (action: string) => {
    const buttonProps = {
      buy: {
        className: "btn-buy hover-scale",
        icon: ShoppingCart,
        text: `Buy for $${book.price}`,
      },
      borrow: {
        className: "btn-borrow hover-scale",
        icon: BookOpen,
        text: "Borrow Book",
      },
      donate: {
        className: "btn-donate hover-scale",
        icon: Gift,
        text: "Request Donation",
      },
      exchange: {
        className: "btn-exchange hover-scale",
        icon: RefreshCw,
        text: "Exchange Book",
      },
    };

    const props = buttonProps[action as keyof typeof buttonProps];
    const Icon = props.icon;

    return (
      <Button
        className={props.className}
        size="lg"
        key={action}
        onClick={handleAddToCart}
      >
        <Icon className="w-5 h-5 mr-2" />
        {props.text}
      </Button>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/books">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Books
            </Link>
          </Button>
        </div>

        {/* Book Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Book Image */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                width={400}
                height={480}
                src={book.image}
                alt={book.title}
                className="w-full max-w-md mx-auto book-spine shadow-[var(--shadow-book)] rounded-lg"
              />
              <Badge
                className={`absolute top-4 right-4 ${
                  book.condition === "new"
                    ? "bg-bookspine-green text-white"
                    : book.condition === "excellent"
                    ? "bg-bookspine-blue text-white"
                    : book.condition === "good"
                    ? "bg-bookspine-gold text-literary-brown"
                    : "bg-bookspine-red text-white"
                }`}
              >
                {book.condition}
              </Badge>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                by {book.author}
              </p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(book.rating)
                          ? "text-bookspine-gold fill-current"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-lg font-medium">{book.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-muted-foreground">
                  {book.reviews} reviews
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {book.genre.map((g) => (
                  <Badge key={g} variant="secondary">
                    {g}
                  </Badge>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-literary-brown mb-4">
                  Available Options
                </h3>
                <div className="space-y-3">
                  {book.availableFor.map((action) => (
                    <div
                      key={action}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="action"
                          value={action}
                          checked={selectedAction === action}
                          onChange={(e) => setSelectedAction(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <div>
                          <p className="font-medium capitalize">{action}</p>
                          <p className="text-sm text-muted-foreground">
                            {action === "buy" && `Purchase for $${book.price}`}
                            {action === "borrow" && "Borrow for 2 weeks"}
                            {action === "donate" && "Free - just pay shipping"}
                            {action === "exchange" && "Trade with your book"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">{getActionButton(selectedAction)}</div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-literary-brown mb-4">
                  Seller Information
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{book.seller.name}</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-bookspine-gold fill-current" />
                      <span>
                        {book.seller.rating} ({book.seller.totalSales} sales)
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Book Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({book.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-literary-brown mb-4">
                  About This Book
                </h3>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {book.fullDescription}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-literary-brown mb-4">
                  Book Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <strong>Pages:</strong> {book.pages}
                    </p>
                    <p>
                      <strong>Language:</strong> {book.language}
                    </p>
                    <p>
                      <strong>Publisher:</strong> {book.publisher}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>ISBN:</strong> {book.isbn}
                    </p>
                    <p>
                      <strong>Category:</strong> {book.category}
                    </p>
                    <p>
                      <strong>Condition:</strong> {book.condition}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-literary-brown mb-6">
                  Customer Reviews
                </h3>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b pb-6 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                            <User className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{review.user}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-bookspine-gold fill-current"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default BookDetail;
