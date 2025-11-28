"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertTriangle,
  Flag,
  MessageSquare,
  Search,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  Shield,
} from "lucide-react";

const ReportsIssues = () => {
  // Mock data for reports
  const reports = [
    {
      id: "RPT-001",
      type: "User Report",
      reportedBy: "John Doe",
      reportedItem: "Fake Book Listing",
      category: "Fraud",
      status: "pending",
      priority: "high",
      description: "User listed a book that doesn't exist",
      date: "2024-03-15",
    },
    {
      id: "RPT-002",
      type: "Book Report",
      reportedBy: "Jane Smith",
      reportedItem: "Offensive Content",
      category: "Inappropriate",
      status: "investigating",
      priority: "medium",
      description: "Book contains inappropriate content",
      date: "2024-03-14",
    },
    {
      id: "RPT-003",
      type: "Transaction Issue",
      reportedBy: "Mike Johnson",
      reportedItem: "Payment Not Received",
      category: "Payment",
      status: "resolved",
      priority: "high",
      description: "Seller didn't receive payment after transaction",
      date: "2024-03-13",
    },
    {
      id: "RPT-004",
      type: "User Report",
      reportedBy: "Sarah Wilson",
      reportedItem: "Spam Account",
      category: "Spam",
      status: "pending",
      priority: "low",
      description: "Account posting spam messages",
      date: "2024-03-12",
    },
    {
      id: "RPT-005",
      type: "Technical Issue",
      reportedBy: "Tom Brown",
      reportedItem: "App Crash",
      category: "Bug",
      status: "investigating",
      priority: "high",
      description: "App crashes when uploading images",
      date: "2024-03-11",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: {
      [key: string]: "default" | "secondary" | "destructive" | "outline";
    } = {
      pending: "secondary",
      investigating: "default",
      resolved: "outline",
      dismissed: "destructive",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" } =
      {
        high: "destructive",
        medium: "default",
        low: "secondary",
      };
    return <Badge variant={variants[priority] || "default"}>{priority}</Badge>;
  };

  return (
    <>
      <div className="container mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Reports & Issues</h1>
            <p className="text-muted-foreground">
              Manage user reports, flagged content, and technical issues
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Flag className="w-4 h-4 mr-2" />
              Export Reports
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Reports
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                +12 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Review
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                Requires immediate attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                High Priority
              </CardTitle>
              <Flag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Critical issues</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Reports Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Reports & Issues</CardTitle>
                <CardDescription>
                  Review and manage reported content and issues
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search reports..."
                    className="w-64 pl-9"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Reported By</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.id}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.reportedBy}</TableCell>
                    <TableCell>
                      <div className="max-w-xs">
                        <div className="font-medium">{report.reportedItem}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {report.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{report.category}</TableCell>
                    <TableCell>{getPriorityBadge(report.priority)}</TableCell>
                    <TableCell>{getStatusBadge(report.status)}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Mark as Resolved
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="w-4 h-4 mr-2" />
                            Take Action
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <XCircle className="w-4 h-4 mr-2" />
                            Dismiss Report
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ReportsIssues;
