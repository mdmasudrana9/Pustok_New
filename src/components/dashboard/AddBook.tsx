"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  BookOpen,
  Camera,
  Gift,
  Plus,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AddBook = () => {
  const { toast } = useToast();
  // const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [availableFor, setAvailableFor] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    condition: "",
    price: "",
    description: "",
    category: "",
    language: "english",
    publishYear: "",
    publisher: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvailabilityChange = (type: string, checked: boolean) => {
    if (checked) {
      setAvailableFor((prev) => [...prev, type]);
    } else {
      setAvailableFor((prev) => prev.filter((item) => item !== type));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Simulate image upload - in real app, would upload to server
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages((prev) => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.condition ||
      availableFor.length === 0
    ) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields and select availability options.",
        variant: "destructive",
      });
      return;
    }

    // Simulate book creation
    toast({
      title: "Book Added Successfully!",
      description: `"${formData.title}" has been added to your collection.`,
    });

    // Navigate back to My Books
    setTimeout(() => {
      // navigate('/dashboard/my-books');
    }, 1500);
  };

  const availabilityOptions = [
    {
      id: "buy",
      label: "Sell",
      icon: ShoppingCart,
      description: "Allow others to purchase this book",
    },
    {
      id: "borrow",
      label: "Lend",
      icon: BookOpen,
      description: "Allow others to borrow this book",
    },
    {
      id: "donate",
      label: "Donate",
      icon: Gift,
      description: "Give this book away for free",
    },
    {
      id: "exchange",
      label: "Exchange",
      icon: RefreshCw,
      description: "Trade this book for another",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/my-books">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to My Books
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
            Add New Book
          </h1>
          <p className="text-muted-foreground">
            Share your books with the PUSTOK community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Book Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown">
                    Book Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Book Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter book title"
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      placeholder="Enter author name"
                      value={formData.author}
                      onChange={(e) =>
                        handleInputChange("author", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="isbn">ISBN</Label>
                      <Input
                        id="isbn"
                        placeholder="978-0-123456-78-9"
                        value={formData.isbn}
                        onChange={(e) =>
                          handleInputChange("isbn", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="publishYear">Publish Year</Label>
                      <Input
                        id="publishYear"
                        placeholder="2024"
                        type="number"
                        value={formData.publishYear}
                        onChange={(e) =>
                          handleInputChange("publishYear", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fiction">Fiction</SelectItem>
                          <SelectItem value="non-fiction">
                            Non-Fiction
                          </SelectItem>
                          <SelectItem value="mystery">Mystery</SelectItem>
                          <SelectItem value="romance">Romance</SelectItem>
                          <SelectItem value="sci-fi">
                            Science Fiction
                          </SelectItem>
                          <SelectItem value="biography">Biography</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="self-help">Self Help</SelectItem>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="children">
                            Children&apos;s Books
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select
                        value={formData.language}
                        onValueChange={(value) =>
                          handleInputChange("language", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="bengali">Bengali</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="arabic">Arabic</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publisher">Publisher</Label>
                    <Input
                      id="publisher"
                      placeholder="Enter publisher name"
                      value={formData.publisher}
                      onChange={(e) =>
                        handleInputChange("publisher", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the book's condition, your thoughts, or any additional details..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Condition, Availability & Images */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown">
                    Condition & Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition *</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={(value) =>
                        handleInputChange("condition", value)
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">
                          New - Unopened, pristine condition
                        </SelectItem>
                        <SelectItem value="excellent">
                          Excellent - Like new, minimal wear
                        </SelectItem>
                        <SelectItem value="good">
                          Good - Normal wear, all pages intact
                        </SelectItem>
                        <SelectItem value="fair">
                          Fair - Well-used but readable
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (if selling)</Label>
                    <Input
                      id="price"
                      placeholder="0.00"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty if not selling
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown">
                    Availability Options *
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availabilityOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <div
                        key={option.id}
                        className="flex items-start space-x-3 p-3 rounded-lg border"
                      >
                        <Checkbox
                          id={option.id}
                          checked={availableFor.includes(option.id)}
                          onCheckedChange={(checked) =>
                            handleAvailabilityChange(
                              option.id,
                              checked as boolean
                            )
                          }
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4 text-primary" />
                            <Label
                              htmlFor={option.id}
                              className="font-medium cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-literary-brown">
                    Book Images
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <Label htmlFor="image-upload" className="cursor-pointer">
                        <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload book images
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Up to 5 images, max 10MB each
                        </p>
                      </Label>
                    </div>

                    {images.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative group">
                            <Image
                              width={200}
                              height={200}
                              src={image}
                              alt={`Book image ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeImage(index)}
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Selected Availability Preview */}
          {availableFor.length > 0 && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium">Available for:</span>
                  {availableFor.map((type) => {
                    const option = availabilityOptions.find(
                      (opt) => opt.id === type
                    );
                    if (!option) return null;
                    const Icon = option.icon;
                    return (
                      <Badge
                        key={type}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Icon className="h-3 w-3" />
                        {option.label}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button type="submit" size="lg" className="flex-1">
              <Plus className="w-4 h-4 mr-2" />
              Add Book to Collection
            </Button>
            <Button type="button" variant="outline" size="lg" asChild>
              <Link href="/dashboard/my-books">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
