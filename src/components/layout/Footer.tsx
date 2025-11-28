import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="surface-gradient border-t border-border/50 shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-10 w-10 text-primary" />
              <span className="text-3xl font-serif font-bold gradient-text">
                PUSTOK
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your gateway to endless literary adventures. Buy, borrow, donate,
              and exchange books with fellow book lovers in our vibrant reading
              community.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-literary-brown">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/books"
                className="block text-muted-foreground hover:text-primary"
              >
                All Books
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary"
              >
                About PUSTOK
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary"
              >
                Contact Us
              </Link>
              <Link
                href="/auth/register"
                className="block text-muted-foreground hover:text-primary"
              >
                Join Community
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-literary-brown">
              Our Services
            </h4>
            <div className="space-y-2">
              <div className="text-muted-foreground">📚 Buy Books</div>
              <div className="text-muted-foreground">📖 Borrow Books</div>
              <div className="text-muted-foreground">🎁 Donate Books</div>
              <div className="text-muted-foreground">🔄 Exchange Books</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-literary-brown">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for book recommendations and exclusive
              offers.
            </p>
            <div className="space-y-2">
              <Input placeholder="Your email address" />
              <Button className="w-full" variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t grid grid-cols-1 md:flex md:justify-between gap-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>hellopustok@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+880 123 456 789</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Link className="underline" href="/privacy">
              Privacy
            </Link>
            <Link className="underline" href="/terms">
              Terms
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>
            &copy;{date} PUSTOK. All rights reserved. Built with ❤️ for book
            lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
