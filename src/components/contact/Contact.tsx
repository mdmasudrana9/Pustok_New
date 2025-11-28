"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      // toast({
      //   title: "Missing Information",
      //   description: "Please fill in all required fields.",
      //   variant: "destructive",
      // });
      return;
    }

    // Simulate form submission
    // toast({
    //   title: "Message Sent!",
    //   description: "Thank you for contacting us. We'll get back to you soon.",
    // });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@pustok.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+880 123 456 789",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Dhaka, Bangladesh",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Fri: 9am-6pm",
      description: "Weekend support available",
    },
  ];

  const faqs = [
    {
      question: "How do I list my books for sale?",
      answer:
        "Simply create an account, go to your dashboard, and click 'Add New Book' to list your books for sale, exchange, or donation.",
    },
    {
      question: "What's the borrowing process?",
      answer:
        "Browse available books, click 'Borrow', and we'll connect you with the book owner to arrange pickup or delivery.",
    },
    {
      question: "Are there any fees?",
      answer:
        "PUSTOK is free to use! We only charge a small transaction fee for purchases to maintain the platform.",
    },
    {
      question: "How do book exchanges work?",
      answer:
        "Find a book you want, offer one of your books in exchange, and if both parties agree, we'll facilitate the swap!",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-literary-brown mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about PUSTOK? Need help with your account? We&apos;re
            here to help! Reach out to us and join our community of book lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-literary-brown">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-literary-brown">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-literary-brown">
                        {info.title}
                      </h4>
                      <p className="text-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-literary-brown">
                  Quick Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="#faqs">View FAQ</a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/about">About PUSTOK</a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/auth/register">Create Account</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faqs" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-literary-brown mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about using PUSTOK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-literary-brown mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-card rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-literary-brown mb-4">
            Visit Our Office
          </h2>
          <p className="text-muted-foreground mb-6">
            Located in the heart of Dhaka, we&apos;re always happy to meet
            fellow book lovers in person.
          </p>
          <div className="bg-muted rounded-lg p-12">
            <MapPin className="w-16 h-16 mx-auto text-primary mb-4" />
            <p className="text-lg font-medium">PUSTOK Office</p>
            <p className="text-muted-foreground">Dhaka, Bangladesh</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
