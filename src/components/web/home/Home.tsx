import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Gift,
  RefreshCw,
  ArrowRight,
  Search,
} from "lucide-react";

import Link from "next/link";
import BookCard from "@/components/books/BookCard";

const Home = () => {
  // Sample featured books data
  const featuredBooks = [
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
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/hero-books.jpg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        </div>

        <div className="relative container mx-auto px-4 text-left max-w-3xl">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-serif font-bold gradient-text text-shadow">
              Welcome to{" "}
              <span className="golden-gradient bg-clip-text text-transparent">
                PUSTOK
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed opacity-90">
              Your gateway to endless literary adventures. Buy, borrow, donate,
              and exchange books with fellow book lovers in our vibrant reading
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="xl" variant="premium" asChild className="group">
                <Link href="/books">
                  Explore Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="elegant" asChild>
                <Link href="/auth/register">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-bookspine-gold/5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Four Ways to Love Books
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re looking to build your library or share your
              love of reading, PUSTOK offers multiple ways to connect with books
              and fellow readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group glass-card">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-bookspine-green to-bookspine-green/80 flex items-center justify-center shadow-lg">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-literary-brown text-xl">
                  Buy Books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-literary-brown/80 text-base">
                  Purchase new and used books at great prices. Build your
                  personal library with our curated collection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group glass-card">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-bookspine-blue to-bookspine-blue/80 flex items-center justify-center shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-literary-brown text-xl">
                  Borrow Books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-literary-brown/80 text-base">
                  Try before you buy! Borrow books from our community and return
                  them when you&apos;re done reading.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group glass-card">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-bookspine-gold to-bookspine-gold/80 flex items-center justify-center shadow-lg">
                  <Gift className="h-10 w-10 text-literary-brown" />
                </div>
                <CardTitle className="text-literary-brown text-xl">
                  Donate Books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-literary-brown/80 text-base">
                  Share the joy of reading by donating books you&apos;ve
                  finished. Help others discover new stories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group glass-card">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-bookspine-red to-bookspine-red/80 flex items-center justify-center shadow-lg">
                  <RefreshCw className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-literary-brown text-xl">
                  Exchange Books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-literary-brown/80 text-base">
                  Trade books directly with other readers. Perfect for
                  discovering new genres and authors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-literary-brown mb-2">
                Featured Books
              </h2>
              <p className="text-muted-foreground">
                Discover the most popular books in our community
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/books">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-bookspine-gold/10" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-serif font-bold gradient-text text-shadow">
              Ready to Start Your Literary Journey?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Join thousands of book lovers who&apos;ve already discovered the
              joy of sharing stories. Sign up today and get access to our entire
              collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="xl" variant="premium" asChild>
                <Link href="/auth/register">
                  <Users className="mr-3 h-6 w-6" />
                  Join Free Today
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/books">
                  <Search className="mr-3 h-6 w-6" />
                  Browse Books
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
