"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react";
import Link from "next/link";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,547",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Total Books",
      value: "8,932",
      change: "+8%",
      icon: BookOpen,
      trend: "up",
    },
    {
      title: "Revenue",
      value: "৳45,230",
      change: "+23%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Active Transactions",
      value: "156",
      change: "-5%",
      icon: TrendingUp,
      trend: "down",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "User Registration",
      description: "New user Ahmed Khan registered",
      time: "2 minutes ago",
      status: "success",
    },
    {
      id: 2,
      type: "Book Report",
      description: "Book 'Advanced Physics' reported for inappropriate content",
      time: "15 minutes ago",
      status: "warning",
    },
    {
      id: 3,
      type: "Payment",
      description: "Payment of ৳450 completed for order #ORD-123",
      time: "1 hour ago",
      status: "success",
    },
    {
      id: 4,
      type: "Book Approval",
      description: "Book 'Programming Basics' needs approval",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 5,
      type: "User Issue",
      description: "User reported exchange dispute for transaction #EXC-456",
      time: "3 hours ago",
      status: "warning",
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      title: "Advanced Mathematics",
      user: "Rafiq Hassan",
      type: "Book Listing",
      date: "Today",
    },
    {
      id: 2,
      title: "User Profile Update",
      user: "Sarah Ahmed",
      type: "Profile Change",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Physics Textbook",
      user: "Karim Abdullah",
      type: "Book Listing",
      date: "2 days ago",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your PUSTOK platform</p>
          </div>
          <Badge
            variant="outline"
            className="bg-primary/10 text-primary border-primary"
          >
            Admin Panel
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-1">
                      {activity.status === "success" && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      {activity.status === "warning" && (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                      {activity.status === "pending" && (
                        <Clock className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.type} by {item.user}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Link href="/admin/users">
                  {" "}
                  <Users className="h-5 w-5 mb-2" />
                  Manage Users
                </Link>
              </Button>

              <Button variant="outline" className="h-20 flex-col">
                <Link href="/admin/books">
                  {" "}
                  <BookOpen className="h-5 w-5 mb-2" />
                  Manage Books
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Link href="/admin/transactions">
                  {" "}
                  <DollarSign className="h-5 w-5 mb-2" />
                  View Transactions
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Link href="/admin/reports">
                  <AlertTriangle className="h-5 w-5 mb-2" />
                  Reports & Issues
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminDashboard;
