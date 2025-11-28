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
  CheckCircle,
  XCircle,
  AlertTriangle,
  BookOpen,
  Trash2,
  Edit,
} from "lucide-react";

const ManageBooks = () => {
  const books = [
    {
      id: 1,
      title: "Advanced Mathematics",
      author: "Dr. Rahman",
      postedBy: "Ahmed Khan",
      category: "Academic",
      type: "sell",
      price: "৳450",
      status: "pending",
      datePosted: "2025-09-25",
      reports: 0,
    },
    {
      id: 2,
      title: "Programming Fundamentals",
      author: "Sarah Johnson",
      postedBy: "Sarah Ahmed",
      category: "Technology",
      type: "exchange",
      price: "-",
      status: "approved",
      datePosted: "2025-09-20",
      reports: 0,
    },
    {
      id: 3,
      title: "Physics Textbook",
      author: "Prof. Hassan",
      postedBy: "Rafiq Hassan",
      category: "Academic",
      type: "donate",
      price: "Free",
      status: "reported",
      datePosted: "2025-09-18",
      reports: 3,
    },
    {
      id: 4,
      title: "History of Bangladesh",
      author: "Dr. Ahmed",
      postedBy: "Fatima Khan",
      category: "History",
      type: "borrow",
      price: "৳50/month",
      status: "approved",
      datePosted: "2025-09-15",
      reports: 0,
    },
    {
      id: 5,
      title: "English Grammar",
      author: "John Smith",
      postedBy: "Karim Abdullah",
      category: "Language",
      type: "sell",
      price: "৳320",
      status: "rejected",
      datePosted: "2025-09-10",
      reports: 1,
    },
    {
      id: 6,
      title: "Chemistry Lab Manual",
      author: "Dr. Sultana",
      postedBy: "Nusrat Jahan",
      category: "Academic",
      type: "exchange",
      price: "-",
      status: "approved",
      datePosted: "2025-09-08",
      reports: 0,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "reported":
        return <Badge className="bg-red-100 text-red-800">Reported</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "sell":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Sell
          </Badge>
        );
      case "borrow":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800">
            Borrow
          </Badge>
        );
      case "donate":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Donate
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
            <h1 className="text-3xl font-bold">Manage Books</h1>
            <p className="text-muted-foreground">
              Review and manage all book listings
            </p>
          </div>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Add Book Manually
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>All Book Listings</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search books..." className="pl-10 w-64" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book Details</TableHead>
                  <TableHead>Posted By</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Posted</TableHead>
                  <TableHead>Reports</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{book.title}</div>
                        <div className="text-sm text-muted-foreground">
                          by {book.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {book.category}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{book.postedBy}</TableCell>
                    <TableCell>{getTypeBadge(book.type)}</TableCell>
                    <TableCell>{book.price}</TableCell>
                    <TableCell>{getStatusBadge(book.status)}</TableCell>
                    <TableCell>{book.datePosted}</TableCell>
                    <TableCell>
                      {book.reports > 0 ? (
                        <Badge variant="destructive" className="text-xs">
                          {book.reports} reports
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground">None</span>
                      )}
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
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Book
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-green-600">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-yellow-600">
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-orange-600">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Flag for Review
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Book
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

        {/* Book Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Books</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,932</div>
              <p className="text-xs text-muted-foreground">+324 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Approval
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">Needs review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Reported Books
              </CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Listings
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,273</div>
              <p className="text-xs text-muted-foreground">92.6% approved</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ManageBooks;
