"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  ShoppingCart,
  Gift,
  RefreshCw,
  TrendingUp,
  Users,
  Star,
  Plus,
  Eye,
  DonutIcon,
  BowArrow,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  // Mock user data
  const userStats = {
    booksOwned: 23,
    booksBought: 15,
    booksLent: 8,
    booksDonated: 5,
    totalEarnings: 127.5,
    rating: 4.8,
    totalReviews: 34,
  };

  const recentActivity = [
    {
      id: 1,
      type: "buy",
      book: "The Midnight Library",
      author: "Matt Haig",
      amount: 15.99,
      date: "2 days ago",
      status: "delivered",
    },
    {
      id: 2,
      type: "borrow",
      book: "Atomic Habits",
      author: "James Clear",
      date: "1 week ago",
      status: "active",
      returnDate: "in 5 days",
    },
    {
      id: 3,
      type: "donate",
      book: "The Alchemist",
      author: "Paulo Coelho",
      date: "2 weeks ago",
      status: "claimed",
    },
  ];

  const quickActions = [
    {
      title: "Add New Book",
      description: "List a book for sale, exchange, or donation",
      icon: Plus,
      href: "/dashboard/my-books",
      color: "bg-bookspine-green",
    },
    {
      title: "Browse Books",
      description: "Discover new books to buy or borrow",
      icon: Eye,
      href: "/books",
      color: "bg-bookspine-blue",
    },
    {
      title: "My Orders",
      description: "Track your purchases and deliveries",
      icon: ShoppingCart,
      href: "/dashboard/my-orders",
      color: "bg-bookspine-gold",
    },
    {
      title: "My Donations",
      description: "Track your purchases and deliveries",
      icon: DonutIcon,
      href: "/dashboard/my-donate",
      color: "bg-bookspine-gold",
    },
    {
      title: "My Borrowed Books",
      description: "Track your purchases and deliveries",
      icon: BowArrow,
      href: "/dashboard/my-borrow",
      color: "bg-bookspine-gold",
    },
    {
      title: "Exchange Requests",
      description: "Manage your book exchange offers",
      icon: RefreshCw,
      href: "/dashboard/my-exchange",
      color: "bg-bookspine-red",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-bookspine-green text-white";
      case "active":
        return "bg-bookspine-blue text-white";
      case "claimed":
        return "bg-bookspine-gold text-literary-brown";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "buy":
        return ShoppingCart;
      case "borrow":
        return BookOpen;
      case "donate":
        return Gift;
      case "exchange":
        return RefreshCw;
      default:
        return BookOpen;
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
            Welcome back, Reader!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your books and reading
            journey.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Books Owned
                </p>
                <p className="text-2xl font-bold">{userStats.booksOwned}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 rounded-full bg-bookspine-green/10 flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-bookspine-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Earnings
                </p>
                <p className="text-2xl font-bold">${userStats.totalEarnings}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 rounded-full bg-bookspine-gold/10 flex items-center justify-center mr-4">
                <Star className="h-6 w-6 text-bookspine-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Rating
                </p>
                <p className="text-2xl font-bold">{userStats.rating}/5</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 rounded-full bg-bookspine-blue/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-bookspine-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Reviews
                </p>
                <p className="text-2xl font-bold">{userStats.totalReviews}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-serif text-literary-brown">
                  Recent Activity
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/my-orders">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const Icon = getActivityIcon(activity.type);
                    return (
                      <div
                        key={activity.id}
                        className="flex items-center space-x-4 p-4 border rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{activity.book}</h4>
                            <Badge className={getStatusColor(activity.status)}>
                              {activity.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            by {activity.author} • {activity.date}
                          </p>
                          {activity.type === "buy" && (
                            <p className="text-sm font-medium text-primary">
                              ${activity.amount}
                            </p>
                          )}
                          {activity.returnDate && (
                            <p className="text-sm text-bookspine-blue">
                              Return {activity.returnDate}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-literary-brown">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div
                        className={`w-10 h-10 rounded-full ${action.color}/10 flex items-center justify-center`}
                      >
                        <action.icon
                          className={`h-5 w-5 ${action.color.replace(
                            "bg-",
                            "text-"
                          )}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{action.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-serif text-literary-brown">
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profile completeness</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-bookspine-green h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Add a profile picture and bio to complete your profile.
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link href="/dashboard/profile">Complete Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
