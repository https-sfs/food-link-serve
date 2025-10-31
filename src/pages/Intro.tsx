import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import donateImg from "@/assets/donate-illustration.png";
import volunteerImg from "@/assets/volunteer-illustration.png";
import hungerPinsImg from "@/assets/hunger-pins-illustration.png";

const slides = [
  {
    image: donateImg,
    title: "Donate extra food easily",
    description: "Share your surplus meals with those in need. Simple, safe, and meaningful.",
  },
  {
    image: volunteerImg,
    title: "Connect with volunteers",
    description: "Join our network of delivery heroes making a real difference every day.",
  },
  {
    image: hungerPinsImg,
    title: "Track every meal's journey",
    description: "See the impact of your contribution from donation to delivery.",
  },
];

const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/select-role");
    }
  };

  const handleSkip = () => {
    navigate("/select-role");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-8">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-64 object-contain animate-scale-in"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            {slides[currentSlide].title}
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground text-center mb-8">
            {slides[currentSlide].description}
          </p>

          <div className="flex justify-center gap-2 mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 space-y-3">
        <Button
          onClick={handleNext}
          className="w-full h-12 text-base font-medium shadow-soft hover:shadow-medium transition-smooth"
          size="lg"
        >
          {currentSlide < slides.length - 1 ? "Next" : "Get Started"}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        
        {currentSlide < slides.length - 1 && (
          <Button
            onClick={handleSkip}
            variant="ghost"
            className="w-full h-12 text-base"
            size="lg"
          >
            Skip
          </Button>
        )}
      </div>
    </div>
  );
};

export default Intro;
