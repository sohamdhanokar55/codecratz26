import { Card, CardContent } from '@/components/ui/card';

const AboutCodecratz = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is 
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                CODECRATZ?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              CODECRATZ is a celebration of innovation where developers, designers, and entrepreneurs
              collaborate to build impactful solutions. It brings together bright minds to solve
              real-world challenges through creativity, code, and collaboration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us for workshops, mentoring, and a high-energy hackathon experience culminating
              in live demos and prizes. Whether you’re a student, professional, or a tech enthusiast,
              CODECRATZ is your stage to shine.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="card-gradient border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Who can participate?</h3>
                <p className="text-muted-foreground">Open to individuals and teams from all backgrounds—students, professionals, and hobbyists.</p>
              </CardContent>
            </Card>
            <Card className="card-gradient border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">What to expect?</h3>
                <p className="text-muted-foreground">Prelims, intensive hackathon, mentorship, finals showcase, and exciting prizes.</p>
              </CardContent>
            </Card>
            <Card className="card-gradient border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Why join?</h3>
                <p className="text-muted-foreground">Build portfolio-worthy projects, network with sponsors, and learn from industry experts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCodecratz;
