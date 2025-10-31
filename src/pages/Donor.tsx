import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, MapPin, Clock, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donor = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    foodType: "",
    quantity: "",
    freshness: "",
    pickupTime: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Posted! 🎉",
      description: "Your food is being matched with a volunteer.",
    });
    setFormData({
      foodType: "",
      quantity: "",
      freshness: "",
      pickupTime: "",
      location: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6">
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Donate Food
          </h1>
          <p className="text-muted-foreground">
            Share your surplus and make a difference
          </p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Food Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-2xl cursor-pointer bg-accent/50 hover:bg-accent transition-smooth">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Camera className="w-12 h-12 mb-3 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Add a photo of your food
                    </p>
                  </div>
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="foodType">Food Type</Label>
                <Input
                  id="foodType"
                  placeholder="e.g., Cooked rice, Fresh vegetables"
                  value={formData.foodType}
                  onChange={(e) =>
                    setFormData({ ...formData, foodType: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 5 servings"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="freshness">Freshness</Label>
                  <Input
                    id="freshness"
                    placeholder="e.g., Cooked 2h ago"
                    value={formData.freshness}
                    onChange={(e) =>
                      setFormData({ ...formData, freshness: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pickupTime" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Pickup Time
                </Label>
                <Input
                  id="pickupTime"
                  type="time"
                  value={formData.pickupTime}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupTime: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Pickup Location
                </Label>
                <Textarea
                  id="location"
                  placeholder="Enter your address or location details"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  rows={3}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium shadow-soft hover:shadow-medium transition-smooth"
                size="lg"
              >
                Post Donation
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-accent/50 border-primary/20 shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Live Tracking Available
                </h3>
                <p className="text-sm text-muted-foreground">
                  Once a volunteer accepts your donation, you'll be able to track the delivery in real-time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donor;
