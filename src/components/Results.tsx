import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Users, 
  Target, 
  Zap,
  Star,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "50+ Projects Launched",
    description: "Successfully delivered innovative solutions across various industries",
    gradient: "from-yellow-500 to-orange-500",
    stats: "50+"
  },
  {
    icon: Users,
    title: "200+ Entrepreneurs Supported",
    description: "Empowered startups and established businesses with cutting-edge technology",
    gradient: "from-blue-500 to-purple-600",
    stats: "200+"
  },
  {
    icon: Target,
    title: "95% Success Rate",
    description: "Consistent delivery of high-quality solutions that exceed expectations",
    gradient: "from-green-500 to-teal-600",
    stats: "95%"
  },
  {
    icon: Zap,
    title: "24/7 Innovation Hub",
    description: "Round-the-clock support and development for rapid market deployment",
    gradient: "from-purple-500 to-pink-600",
    stats: "24/7"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    message: "TechnoRatz transformed our startup idea into a market-ready product in just 3 months!",
    rating: 5
  },
  {
    name: "Raj Patel",
    company: "InnovateCorp",
    message: "The team's expertise in emerging technologies helped us stay ahead of competition.",
    rating: 5
  },
  {
    name: "Emily Chen",
    company: "FutureVision",
    message: "Outstanding support and innovative solutions that exceeded our expectations.",
    rating: 5
  }
];

const Results = () => {
  return (
    <section id="results" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-primary mr-3" />
            <span className="text-primary font-medium text-lg">Our Impact</span>
            <Star className="w-8 h-8 text-accent ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              RESULTS
            </span>
            <span className="text-foreground"> !!</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measurable success stories and achievements that demonstrate our commitment 
            to delivering exceptional technology solutions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <Card 
                key={index} 
                className="card-gradient border-0 group cursor-pointer text-center"
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.stats}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our clients who have transformed their businesses with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gradient group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.message}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-gradient border-0 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="w-12 h-12 text-primary mr-4" />
                <h3 className="text-3xl font-bold text-foreground">
                  Ready to Join Our Success Stories?
                </h3>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform your business with cutting-edge technology solutions. 
                Let's build the future together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-gradient group">
                  <CheckCircle className="mr-2 w-5 h-5" />
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="btn-outline-gradient">
                  <Award className="mr-2 w-5 h-5" />
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
