"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreHorizontal,
  Eye,
  Download,
  RefreshCw,
  DollarSign,
  TrendingUp,
  CreditCard,
  AlertCircle,
} from "lucide-react";

const ManageTransactions = () => {
  const transactions = [
    {
      id: "TXN-001",
      orderId: "ORD-1234",
      user: "Ahmed Khan",
      book: "Advanced Mathematics",
      type: "purchase",
      amount: "৳450",
      status: "completed",
      method: "bKash",
      date: "2025-09-25 14:30",
      commission: "৳45",
    },
    {
      id: "TXN-002",
      orderId: "BRW-5678",
      user: "Sarah Ahmed",
      book: "Programming Fundamentals",
      type: "borrow",
      amount: "৳50",
      status: "completed",
      method: "Nagad",
      date: "2025-09-24 10:15",
      commission: "৳5",
    },
    {
      id: "TXN-003",
      orderId: "EXC-9012",
      user: "Rafiq Hassan",
      book: "Physics Textbook",
      type: "exchange",
      amount: "৳0",
      status: "pending",
      method: "-",
      date: "2025-09-23 16:45",
      commission: "৳0",
    },
    {
      id: "TXN-004",
      orderId: "ORD-3456",
      user: "Fatima Khan",
      book: "History of Bangladesh",
      type: "purchase",
      amount: "৳380",
      status: "failed",
      method: "Rocket",
      date: "2025-09-22 12:20",
      commission: "৳0",
    },
    {
      id: "TXN-005",
      orderId: "DON-7890",
      user: "Karim Abdullah",
      book: "English Grammar",
      type: "donation",
      amount: "৳0",
      status: "completed",
      method: "-",
      date: "2025-09-21 09:30",
      commission: "৳0",
    },
    {
      id: "TXN-006",
      orderId: "ORD-2468",
      user: "Nusrat Jahan",
      book: "Chemistry Lab Manual",
      type: "purchase",
      amount: "৳520",
      status: "refunded",
      method: "bKash",
      date: "2025-09-20 15:10",
      commission: "৳52",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "refunded":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Refunded</Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "purchase":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Purchase
          </Badge>
        );
      case "borrow":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800">
            Borrow
          </Badge>
        );
      case "donation":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Donation
          </Badge>
        );
      case "exchange":
        return (
          <Badge variant="outline" className="bg-orange-100 text-orange-800">
            Exchange
          </Badge>
        );
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Transactions</h1>
            <p className="text-muted-foreground">
              Monitor all platform transactions and payments
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync Payments
            </Button>
          </div>
        </div>

        {/* Transaction Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳45,230</div>
              <p className="text-xs text-muted-foreground">
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Transactions
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+156 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Commission Earned
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳4,523</div>
              <p className="text-xs text-muted-foreground">
                10% average commission
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Failed Payments
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">37</div>
              <p className="text-xs text-muted-foreground">2.9% failure rate</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>All Transactions</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search transactions..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Book</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm">
                      {transaction.id}
                    </TableCell>
                    <TableCell>{transaction.user}</TableCell>
                    <TableCell className="max-w-[150px] truncate">
                      {transaction.book}
                    </TableCell>
                    <TableCell>{getTypeBadge(transaction.type)}</TableCell>
                    <TableCell className="font-medium">
                      {transaction.amount}
                    </TableCell>
                    <TableCell className="text-green-600">
                      {transaction.commission}
                    </TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                    <TableCell>{transaction.method}</TableCell>
                    <TableCell className="text-sm">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download Receipt
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-yellow-600">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Retry Payment
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Issue Refund
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

export default ManageTransactions;
