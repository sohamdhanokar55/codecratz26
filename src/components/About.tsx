import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Github,
  Users,
  Award,
  Target,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            {/* <Users className="w-8 h-8 text-primary mr-3" /> */}
            <span className="text-primary font-medium text-lg">
              {/* About Our College */}
            </span>
            {/* <Award className="w-8 h-8 text-accent ml-3" /> */}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              About Our Institution
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Codecratz 2026 is organized by our prestigious college, fostering
            innovation and technical excellence among students across the
            region.
          </p>
        </div>

        {/* College Photo Space */}
        <div className="mb-16">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="relative mb-8">
                <div className="aspect-[3/2] rounded-xl overflow-hidden border-4 border-gradient-to-r from-primary/30 to-accent/30 shadow-2xl">
                  <img
                    src="/4.png"
                    alt="Agnel Polytechnic Campus"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: "400px" }}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 -z-10"></div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agnel Polytechnic, Vashi
                </h3>
                <div className="text-left space-y-4 leading-relaxed body-text">
                  <p>
                    The founder of Agnel ashram, Fr. C. Rodrigues was a great
                    visionary. His vision was to foster love and understanding
                    among the various communities in India and to contribute to
                    the development of self-reliance among the youth through
                    education.
                  </p>
                  <p>
                    Agnel Polytechnic in Vashi, Navi Mumbai, was started in 1983
                    with only one program - Diploma in civil engineering. It has
                    grown since then, and today we have five branches of study
                    in the polytechnic - Diploma in Civil Engineering, Diploma
                    in Mechanical Engineering, Diploma in Automobile
                    engineering, Diploma in Electronics and Computer Engineering
                    and Diploma in Artificial Intelligence & Machine Learning.
                  </p>
                  <p>
                    What makes Agnel Polytechnic a unique institution in Mumbai
                    is its discipline and culture and the dedication of the
                    faculty in imparting knowledge and expertise to the students
                    in a cosmopolitan atmosphere.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
