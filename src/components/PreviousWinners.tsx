import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Award } from "lucide-react";

const winnersData = [
  {
    title: "AI Healthcare Assistant",
    team: "MedTech Innovators",
    members: ["Arjun Sharma", "Priya Patel", "Rohit Kumar"],
    groupPhoto: "/placeholder.svg",
    track: "AI/ML",
    prize: "₹50,000",
    position: "1st Place",
    description:
      "Revolutionary AI-powered diagnostic tool that helps doctors identify diseases faster and more accurately.",
  },
  {
    title: "EcoChain",
    team: "Green Coders",
    members: ["Sneha Reddy", "Vikash Singh", "Ananya Das"],
    groupPhoto: "/placeholder.svg",
    track: "Web3",
    prize: "₹30,000",
    position: "2nd Place",
    description:
      "Blockchain-based carbon credit marketplace enabling transparent environmental impact tracking.",
  },
  {
    title: "SafeRide",
    team: "Urban Solutions",
    members: ["Karthik Nair", "Meera Joshi", "Rahul Gupta", "Divya Shah"],
    groupPhoto: "/placeholder.svg",
    track: "App Dev",
    prize: "₹20,000",
    position: "3rd Place",
    description:
      "Smart transportation app with real-time safety features and emergency response integration.",
  },
];

const PreviousWinners = () => {
  return (
    <section id="winners" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            CODECRATZ
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              2024 Winners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating the brilliant minds who turned ideas into reality and
            claimed victory at CODECRATZ 2024.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {winnersData.map((winner, index) => (
            <Card
              key={index}
              className="card-gradient border-0 group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6">
                {/* Position badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {winner.position}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-tertiary bg-tertiary/10 px-2 py-1 rounded-full">
                    {winner.track}
                  </span>
                </div>

                {/* Project title */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {winner.title}
                </h3>

                {/* Team info */}
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {winner.team}
                  </span>
                </div>

                {/* Group photo */}
                <div className="mb-4">
                  <img
                    src={winner.groupPhoto}
                    alt={`${winner.team} group photo`}
                    className="w-full h-32 object-cover rounded-lg bg-gray-200"
                  />
                </div>

                {/* Team members */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">
                    Team Members:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {winner.members.map((member, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/20 px-2 py-1 rounded text-foreground"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {winner.description}
                </p>

                {/* Prize */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold text-foreground">
                      {winner.prize}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join Them?
            </h3>
            <p className="text-muted-foreground mb-6">
              Your innovative idea could be the next big winner. Register for
              CODECRATZ '26 and compete for glory!
            </p>
            <button
              className="btn-gradient px-6 py-3 rounded-lg font-medium"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousWinners;
