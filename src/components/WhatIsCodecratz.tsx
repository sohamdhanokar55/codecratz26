import { Card, CardContent } from "@/components/ui/card";
import { Code, Trophy, Users, Clock } from "lucide-react";

const WhatIsCodecratz = () => {
  return (
    <section id="what-is-codecratz" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              What is Codecratz?
            </span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed body-text">
            24-hours hackathon is designed for polytechnic students across
            Maharashtra, focusing on real-world problems. The event features an
            elimination round followed by a final round, with each problem
            statement culminating in a winner. Participants will innovate and
            collaborate to develop solutions that address pressing challenges in
            various fields. Our Hackathon aims to bring together innovative
            minds from various polytechnics across Maharashtra to collaborate,
            create, and compete in developing solutions to the problem
            statements provided to them. This event will not only showcase
            creativity and technical skills but also foster community engagement
            and networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 bg-gradient-to-r from-primary to-accent animate-gradient-shift shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
                <Clock className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">24 Hours</h3>
              <p className="muted-text">
                Intensive coding marathon to build innovative solutions
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 bg-gradient-to-r from-tertiary to-accent animate-gradient-shift shadow-lg shadow-tertiary/20 group-hover:scale-110 group-hover:shadow-tertiary/40">
                <Code className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real Problems</h3>
              <p className="muted-text">
                Solve actual challenges faced by industries and society
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 bg-gradient-to-r from-accent to-primary animate-gradient-shift shadow-lg shadow-accent/20 group-hover:scale-110 group-hover:shadow-accent/40">
                <Users className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3 drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Work</h3>
              <p className="muted-text">
                Collaborate with fellow students and learn together
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 bg-gradient-to-r from-primary to-tertiary animate-gradient-shift shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:shadow-tertiary/40">
                <Trophy className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-3 drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Win Prizes</h3>
              <p className="muted-text">
                Compete for exciting prizes and recognition
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* <Card className="card-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Event Objectives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Innovation & Creativity
                  </h4>
                  <p className="body-text">
                    Participants will innovate and collaborate to develop
                    solutions that address pressing challenges in various fields
                    including technology, healthcare, education, and
                    sustainability.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Skill Development
                  </h4>
                  <p className="body-text">
                    Our hackathon aims to bring together innovative minds from
                    various colleges to showcase creativity and technical skills
                    while fostering community engagement and networking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default WhatIsCodecratz;
