import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, ThumbsUp, CheckCircle2, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockPins = [
  {
    id: 1,
    location: "Near Railway Station",
    description: "Homeless shelter area, 20-30 people",
    upvotes: 45,
    status: "verified",
  },
  {
    id: 2,
    location: "Old Market Square",
    description: "Daily gathering spot, evening meals needed",
    upvotes: 32,
    status: "served",
  },
  {
    id: 3,
    location: "Behind City Hospital",
    description: "Patient attendants waiting area",
    upvotes: 18,
    status: "new",
  },
];

const HungerPins = () => {
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    description: "",
  });

  const handleAddPin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Hunger Spot Added! 📍",
      description: "Thank you for helping us map areas in need.",
    });
    setFormData({ location: "", description: "" });
    setShowAddForm(false);
  };

  const handleUpvote = (location: string) => {
    toast({
      description: `Upvoted "${location}"`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-primary/10 text-primary border-primary/20";
      case "served":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="w-3 h-3" />;
      case "served":
        return <CheckCircle2 className="w-3 h-3" />;
      default:
        return <MapPin className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Hunger Pins
          </h1>
          <p className="text-muted-foreground">
            Map and serve areas in need
          </p>
        </div>

        <Card className="bg-primary/10 border-primary/30 shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full map view with color-coded pins
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full h-12 text-base font-medium shadow-soft hover:shadow-medium transition-smooth"
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Hunger Spot
        </Button>

        {showAddForm && (
          <Card className="shadow-medium animate-slide-up">
            <CardContent className="pt-6">
              <form onSubmit={handleAddPin} className="space-y-4">
                <div className="flex items-center justify-center w-full mb-4">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl cursor-pointer bg-accent/50 hover:bg-accent transition-smooth">
                    <Camera className="w-8 h-8 mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">
                      Add photo (optional)
                    </p>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Near Railway Station"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the area and approximate number of people in need"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1">
                    Submit Pin
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Community Pins
          </h2>
          {mockPins.map((pin, index) => (
            <Card
              key={pin.id}
              className="shadow-medium hover:shadow-strong transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {pin.location}
                      </h3>
                      <Badge
                        className={`flex items-center gap-1 ${getStatusColor(
                          pin.status
                        )}`}
                      >
                        {getStatusIcon(pin.status)}
                        <span className="capitalize">{pin.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {pin.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-primary hover:text-primary/80"
                      onClick={() => handleUpvote(pin.location)}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{pin.upvotes} upvotes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HungerPins;
