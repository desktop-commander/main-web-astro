import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  TrendingUp, 
  GraduationCap, 
  Heart, 
  Laptop,
  Coffee,
  Gift,
  Zap
} from "lucide-react";

const CareersPerks = () => {
  const perks = [
    {
      icon: Home,
      title: "Hybrid Work",
      description: "Work from home, office, or anywhere that inspires you",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: TrendingUp,
      title: "Equity Package",
      description: "Own a piece of the future with competitive equity",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness perks",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Laptop,
      title: "Top Equipment",
      description: "MacBook Pro, external monitors, and any tools you need",
      color: "text-gray-500",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: Coffee,
      title: "Flexible Schedule",
      description: "Work when you're most productive, we trust you",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
            <Gift className="h-3 w-3 mr-1" />
            Benefits & Perks
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Take Care of
            <span className="block text-primary">Our People</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working at Desktop Commander means joining a team that values your growth, 
            well-being, and work-life balance.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {perks.map((perk, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`${perk.bgColor} ${perk.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <perk.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 text-sm text-primary font-medium">
            <Zap className="h-4 w-4" />
            Early-stage startup energy with the resources to succeed
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersPerks;
