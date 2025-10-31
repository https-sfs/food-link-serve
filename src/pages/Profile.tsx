import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: Settings, label: "Account Settings", path: "/settings" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: HelpCircle, label: "Help & Support", path: "/support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-4 pt-6">
          <Avatar className="w-24 h-24 mx-auto shadow-medium">
            <AvatarFallback className="text-2xl bg-primary/10 text-primary">
              JD
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
            <p className="text-muted-foreground">Food Hero since Jan 2025</p>
          </div>
          <div className="flex gap-2 justify-center">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Donor
            </Badge>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">
              Volunteer
            </Badge>
          </div>
        </div>

        <Card className="shadow-medium">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Quick Stats
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-xs text-muted-foreground">Donations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">18</p>
                <p className="text-xs text-muted-foreground">Deliveries</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-xs text-muted-foreground">Spots Added</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardContent className="p-4">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-smooth text-left"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <span className="flex-1 font-medium text-foreground">
                      {item.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-full h-12 text-base font-medium border-destructive/20 text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
