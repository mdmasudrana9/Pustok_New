"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Bell,
  BookOpen,
  Calendar,
  Camera,
  Eye,
  MapPin,
  Shield,
  Star,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Passionate reader and book collector. I love discovering new authors and sharing great books with fellow readers. Always looking for my next great read!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=300&h=300&fit=crop&face",
    joinDate: "2024-01-15",
    totalBooks: 23,
    rating: 4.8,
    reviews: 34,
  });

  const [notifications, setNotifications] = useState({
    emailMarketing: true,
    emailOrders: true,
    emailMessages: true,
    pushNotifications: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    showLocation: true,
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleSaveSettings = (type: "notifications" | "privacy") => {
    toast({
      title: "Settings Updated",
      description: `Your ${type} settings have been saved.`,
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-literary-brown mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profileData.avatar} />
                    <AvatarFallback>
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-1 -right-1 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="w-3 h-3" />
                  </Button>
                </div>

                <h2 className="text-xl font-serif font-bold text-literary-brown mb-2">
                  {profileData.firstName} {profileData.lastName}
                </h2>

                <div className="flex items-center justify-center space-x-1 mb-4">
                  <Star className="w-4 h-4 text-bookspine-gold fill-current" />
                  <span className="font-medium">{profileData.rating}</span>
                  <span className="text-muted-foreground">
                    ({profileData.reviews} reviews)
                  </span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      Joined{" "}
                      {new Date(profileData.joinDate).toLocaleDateString(
                        "en-US",
                        { month: "long", year: "numeric" }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{profileData.totalBooks} books listed</span>
                  </div>
                </div>

                <Badge variant="secondary" className="mt-4">
                  Trusted Seller
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile Info</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              {/* Profile Information Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-serif text-literary-brown">
                        Personal Information
                      </CardTitle>
                      <CardDescription>
                        Update your personal details and bio
                      </CardDescription>
                    </div>
                    <Button
                      variant={isEditing ? "default" : "outline"}
                      onClick={() =>
                        isEditing ? handleSaveProfile() : setIsEditing(true)
                      }
                    >
                      {isEditing ? "Save Changes" : "Edit Profile"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              firstName: e.target.value,
                            })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              lastName: e.target.value,
                            })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              phone: e.target.value,
                            })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              location: e.target.value,
                            })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        value={profileData.bio}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            bio: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        placeholder="Tell other readers about yourself and your favorite books..."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Account Security */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-literary-brown flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Account Security
                    </CardTitle>
                    <CardDescription>
                      Manage your password and security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full md:w-auto">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto">
                      Enable Two-Factor Authentication
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-literary-brown flex items-center">
                      <Bell className="w-5 h-5 mr-2" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Choose how you want to be notified about activity on
                      PUSTOK
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Marketing</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about new features and book
                            recommendations
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notifications.emailMarketing}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              emailMarketing: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Order Updates</h4>
                          <p className="text-sm text-muted-foreground">
                            Get notified about your purchases and sales
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notifications.emailOrders}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              emailOrders: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Messages</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications when someone messages you
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notifications.emailMessages}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              emailMessages: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className="text-sm text-muted-foreground">
                            Enable browser push notifications
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notifications.pushNotifications}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              pushNotifications: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSaveSettings("notifications")}>
                      Save Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Privacy Tab */}
              <TabsContent value="privacy" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-literary-brown flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Privacy Settings
                    </CardTitle>
                    <CardDescription>
                      Control what information is visible to other users
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Profile Visibility</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="visibility"
                              value="public"
                              checked={privacy.profileVisibility === "public"}
                              onChange={(e) =>
                                setPrivacy({
                                  ...privacy,
                                  profileVisibility: e.target.value,
                                })
                              }
                            />
                            <span>Public - Anyone can see my profile</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="visibility"
                              value="private"
                              checked={privacy.profileVisibility === "private"}
                              onChange={(e) =>
                                setPrivacy({
                                  ...privacy,
                                  profileVisibility: e.target.value,
                                })
                              }
                            />
                            <span>
                              Private - Only registered users can see my profile
                            </span>
                          </label>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Show Email Address</h4>
                          <p className="text-sm text-muted-foreground">
                            Allow other users to see your email address
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacy.showEmail}
                          onChange={(e) =>
                            setPrivacy({
                              ...privacy,
                              showEmail: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Show Phone Number</h4>
                          <p className="text-sm text-muted-foreground">
                            Allow other users to see your phone number
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacy.showPhone}
                          onChange={(e) =>
                            setPrivacy({
                              ...privacy,
                              showPhone: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Show Location</h4>
                          <p className="text-sm text-muted-foreground">
                            Allow other users to see your general location
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacy.showLocation}
                          onChange={(e) =>
                            setPrivacy({
                              ...privacy,
                              showLocation: e.target.checked,
                            })
                          }
                          className="w-4 h-4"
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSaveSettings("privacy")}>
                      Save Privacy Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
