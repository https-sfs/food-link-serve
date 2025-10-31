import { useNavigate, useLocation } from "react-router-dom";
import { Home, Heart, MapPin, TrendingUp, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/select-role" },
  { icon: Heart, label: "Donate", path: "/donor" },
  { icon: MapPin, label: "Track", path: "/volunteer" },
  { icon: TrendingUp, label: "Impact", path: "/impact" },
  { icon: User, label: "Profile", path: "/profile" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show navigation on splash, intro, or select-role pages
  const hideNavigation = ["/", "/intro", "/select-role"].includes(location.pathname);
  
  if (hideNavigation) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-strong z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "animate-pulse-soft" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
