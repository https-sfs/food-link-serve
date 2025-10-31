import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, MapPin, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Heart,
    label: "Meals Shared",
    value: "1,234",
    change: "+156 this week",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    label: "Volunteers Active",
    value: "89",
    change: "+12 new this month",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MapPin,
    label: "Hunger Spots Served",
    value: "45",
    change: "3 new locations",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "94%",
    change: "Donations delivered",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const badges = [
  { name: "First Donation", emoji: "🎉", earned: true },
  { name: "5 Meals Shared", emoji: "⭐", earned: true },
  { name: "Community Hero", emoji: "🏆", earned: true },
  { name: "10 Deliveries", emoji: "🚀", earned: false },
  { name: "Month Streak", emoji: "🔥", earned: false },
  { name: "50 Meals", emoji: "💎", earned: false },
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Impact
          </h1>
          <p className="text-muted-foreground">
            Together we're making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="shadow-medium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.change}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="shadow-medium">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span>🏆</span> Your Badges
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {badges.map((badge, index) => (
                <div
                  key={badge.name}
                  className={`p-4 rounded-2xl text-center transition-smooth animate-scale-in ${
                    badge.earned
                      ? "bg-primary/10 border-2 border-primary/20"
                      : "bg-muted/50 opacity-50"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-3xl mb-2">{badge.emoji}</div>
                  <p className="text-sm font-medium text-foreground">
                    {badge.name}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 shadow-soft">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <div className="text-4xl mb-2">💚</div>
              <h3 className="text-xl font-semibold text-foreground">
                Keep up the amazing work!
              </h3>
              <p className="text-sm text-muted-foreground">
                Every meal shared brings hope to someone in need
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Impact;
