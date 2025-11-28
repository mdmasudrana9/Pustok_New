"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

import { BookOpen, Gift, RefreshCw, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    price?: number;
    rating: number;
    reviews: number;
    condition: "new" | "excellent" | "good" | "fair";
    availableFor: ("buy" | "borrow" | "donate" | "exchange")[];
    image: string;
    description: string;
  };
}

const BookCard = ({ book }: BookCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (
    action: "buy" | "borrow" | "donate" | "exchange"
  ) => {
    addToCart(book, action);
  };

  const getActionButton = () => {
    if (book.availableFor.includes("buy")) {
      return (
        <Button
          size="sm"
          className="btn-buy flex-1"
          onClick={() => handleAddToCart("buy")}
        >
          <ShoppingCart className="w-4 h-4 mr-1" />${book.price}
        </Button>
      );
    }
    if (book.availableFor.includes("borrow")) {
      return (
        <Button
          size="sm"
          className="btn-borrow flex-1"
          onClick={() => handleAddToCart("borrow")}
        >
          <BookOpen className="w-4 h-4 mr-1" />
          Borrow
        </Button>
      );
    }
    if (book.availableFor.includes("donate")) {
      return (
        <Button
          size="sm"
          className="btn-donate flex-1"
          onClick={() => handleAddToCart("donate")}
        >
          <Gift className="w-4 h-4 mr-1" />
          Free
        </Button>
      );
    }
    if (book.availableFor.includes("exchange")) {
      return (
        <Button
          size="sm"
          className="btn-exchange flex-1"
          onClick={() => handleAddToCart("exchange")}
        >
          <RefreshCw className="w-4 h-4 mr-1" />
          Exchange
        </Button>
      );
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

  return (
    <Card className="book-card group overflow-hidden">
      <div className="relative">
        <Image
          width={100}
          height={100}
          src={book.image || "pla.jpg"}
          alt={book.title}
          className="w-full h-48 object-cover book-spine"
        />
        <Badge
          className={`absolute top-2 right-2 ${getConditionColor(
            book.condition
          )}`}
        >
          {book.condition}
        </Badge>
        {book.availableFor.length > 1 && (
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 bg-background/90"
          >
            {book.availableFor.length} options
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Link href={`/books/${book.id}`}>
            <h3 className="font-serif font-semibold text-literary-brown line-clamp-2">
              {book.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">{book.author}</p>

          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(book.rating)
                      ? "text-bookspine-gold fill-current"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({book.reviews})
            </span>
          </div>

          <p className="text-xs text-muted-foreground line-clamp-2">
            {book.description}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        {getActionButton()}
        <Link href={`/books/${book.id}`}>
          <Button variant="outline" size="sm">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
