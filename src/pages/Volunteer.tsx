import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, UtensilsCrossed, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockDonations = [
  {
    id: 1,
    foodType: "Cooked Rice & Curry",
    quantity: "10 servings",
    distance: "1.2 km",
    donorName: "Rajesh Kumar",
    pickupTime: "6:00 PM",
    freshness: "Cooked 1h ago",
  },
  {
    id: 2,
    foodType: "Fresh Vegetables",
    quantity: "5 kg",
    distance: "2.5 km",
    donorName: "Priya Sharma",
    pickupTime: "7:30 PM",
    freshness: "Fresh today",
  },
  {
    id: 3,
    foodType: "Packed Meals",
    quantity: "15 servings",
    distance: "3.8 km",
    donorName: "Restaurant XYZ",
    pickupTime: "8:00 PM",
    freshness: "Prepared 30m ago",
  },
];

const Volunteer = () => {
  const { toast } = useToast();

  const handleAcceptPickup = (donorName: string) => {
    toast({
      title: "Pickup Confirmed! 🚗",
      description: `You've accepted the pickup from ${donorName}. Navigation starting...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Available Pickups
          </h1>
          <p className="text-muted-foreground">
            Choose a donation to deliver
          </p>
        </div>

        <Card className="bg-secondary/10 border-secondary/30 shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-secondary/20">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  Live Map View Coming Soon
                </h3>
                <p className="text-sm text-muted-foreground">
                  Interactive map with all nearby donations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {mockDonations.map((donation, index) => (
            <Card
              key={donation.id}
              className="shadow-medium hover:shadow-strong transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {donation.foodType}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <UtensilsCrossed className="w-3 h-3" />
                          {donation.quantity}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Navigation className="w-3 h-3" />
                          {donation.distance}
                        </Badge>
                        <Badge variant="outline">{donation.freshness}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Donor: {donation.donorName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Pickup by: {donation.pickupTime}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAcceptPickup(donation.donorName)}
                    className="w-full h-11 font-medium shadow-soft hover:shadow-medium transition-smooth"
                    variant="default"
                  >
                    Accept Pickup
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-accent/50 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-center text-muted-foreground">
              <span className="font-semibold text-foreground">Pro Tip:</span> Accept pickups near your current route to deliver multiple meals efficiently
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;
