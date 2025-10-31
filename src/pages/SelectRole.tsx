import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, TruckIcon, MapPin } from "lucide-react";

const roles = [
  {
    id: "donor",
    title: "Donor",
    icon: UtensilsCrossed,
    description: "Share food safely",
    gradient: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
    path: "/donor",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    icon: TruckIcon,
    description: "Pick up & deliver",
    gradient: "from-secondary/10 to-secondary/5",
    iconColor: "text-secondary",
    path: "/volunteer",
  },
  {
    id: "hunger-pins",
    title: "Hunger Pins",
    icon: MapPin,
    description: "Mark hunger spots near you",
    gradient: "from-primary/10 to-secondary/10",
    iconColor: "text-primary",
    path: "/hunger-pins",
  },
];

const SelectRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-6 py-12">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            How would you like to help?
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Choose your role to get started
          </p>
        </div>

        <div className="space-y-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                className="cursor-pointer transition-smooth hover:shadow-medium hover:scale-[1.02] active:scale-[0.98] shadow-soft"
                onClick={() => navigate(role.path)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className={`p-6 bg-gradient-to-r ${role.gradient}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-background/50 backdrop-blur-sm ${role.iconColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {role.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
