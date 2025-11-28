"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Target, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const stats = [
    { label: "Active Readers", value: "10,000+", icon: Users },
    { label: "Books Available", value: "50,000+", icon: BookOpen },
    { label: "Books Exchanged", value: "25,000+", icon: Heart },
    { label: "Communities", value: "150+", icon: Globe },
  ];

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Founder & CEO",
      description:
        "Book lover and entrepreneur passionate about making literature accessible to everyone.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=300&h=300&fit=crop&face",
    },
    {
      name: "Rahman Hassan",
      role: "Head of Technology",
      description:
        "Full-stack developer with 8+ years experience building scalable platforms.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face",
    },
    {
      name: "Fatima Khan",
      role: "Community Manager",
      description:
        "Literature graduate dedicated to fostering vibrant reading communities worldwide.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold text-literary-brown mb-6">
              About PUSTOK
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that every book has the power to change a life, spark
              imagination, and connect people across cultures and boundaries.
              PUSTOK is more than just a bookshop U+002d it&apos;s a community
              of passionate readers working together to make literature
              accessible to everyone.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Connecting Readers Since 2024
            </Badge>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-literary-brown">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To democratize access to books by creating a platform where
                  readers can buy, borrow, donate, and exchange literature
                  easily and affordably. We&apos;re building bridges between
                  book lovers and breaking down barriers to reading.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bookspine-gold/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-bookspine-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-literary-brown">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  A world where geographical and economic barriers never prevent
                  someone from accessing great literature. We envision thriving
                  reading communities where knowledge flows freely and every
                  reader finds their next great book.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-literary-brown mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that tell our story of connecting readers and making books
              accessible worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-literary-brown">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-literary-brown mb-4">
              How PUSTOK Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four simple ways to engage with books and connect with fellow
              readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-bookspine-green/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-bookspine-green" />
                </div>
                <h3 className="font-serif font-semibold text-literary-brown">
                  Buy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Purchase new and used books at competitive prices from
                  verified sellers in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-bookspine-blue/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-bookspine-blue" />
                </div>
                <h3 className="font-serif font-semibold text-literary-brown">
                  Borrow
                </h3>
                <p className="text-sm text-muted-foreground">
                  Borrow books from other readers for a limited time. Perfect
                  for trying new genres.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-bookspine-gold/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-bookspine-gold" />
                </div>
                <h3 className="font-serif font-semibold text-literary-brown">
                  Donate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Give books a new life by donating them to readers who will
                  treasure them.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-bookspine-red/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-bookspine-red" />
                </div>
                <h3 className="font-serif font-semibold text-literary-brown">
                  Exchange
                </h3>
                <p className="text-sm text-muted-foreground">
                  Trade books directly with other readers. Discover new
                  favorites while sharing yours.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-literary-brown mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate book lovers and technology experts working to
              revolutionize how people access literature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center overflow-hidden group hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    width={300}
                    height={300}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-literary-brown text-xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-serif font-bold">
              Join Our Reading Revolution
            </h2>
            <p className="text-xl opacity-90">
              Whether you&apos;re looking to discover new books, share your
              favorites, or connect with fellow readers, PUSTOK is your gateway
              to a world of literary adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth/register">Start Reading Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/books">Explore Books</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
