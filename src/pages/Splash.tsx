import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/foodlink-logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/intro");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="animate-pulse-soft">
        <img 
          src={logo} 
          alt="FoodLink Logo" 
          className="w-32 h-32 md:w-40 md:h-40 mb-6 animate-scale-in"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 animate-fade-in">
        FoodLink
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Feed Hope, Not Waste.
      </p>
    </div>
  );
};

export default Splash;
