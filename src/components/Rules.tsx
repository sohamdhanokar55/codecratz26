import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Shield,
  Users,
  Clock,
  Trophy,
  CheckCircle,
  AlertCircle,
  FileText,
  Download,
  MessageCircle,
} from "lucide-react";
import CountdownCard from "./CountdownCard";
import { useCountdown } from "../hooks/useCountdown";
import { motion } from "framer-motion";

const Rules = () => {
  // Registration deadline - November 30th, 2025
  const registrationDeadline = new Date("2025-11-25T23:59:59");

  // Get countdown values
  const registrationCountdown = useCountdown(registrationDeadline);

  return (
    <section id="rules" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            <span className="text-white">Rules & </span>
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Guidelines
            </span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Please read the following rules and guidelines carefully before
            participating in Codecratz 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* General Rules */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  General Rules
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    1st year students are not allowed to participate in
                    CodeCratz
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Diploma students from all over Maharashtra are welcome to
                    participate
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Each team can participate in only 1 problem statement
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Mentors will not be allowed for 24 hours hackathon,but they can guide the participants
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    All the members of your team should be of the same college
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Teams should have a team leader along with 3 other members
                    for a total of 4 participants
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Meals and accommodation will be provided for all
                    participants throughout the 24-hour finals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competition Rules */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Trophy className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  Competition Rules
                </h3>
              </div>
              <div className="space-y-4">
                {/* <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    1000/- participation fee if your team gets selected for grand finale
                  </p>
                </div> */}
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    The top 4 teams from each problem statement shall be chosen
                    for the 24 hr Grand Finale which is set to be held on 16th
                    and 17th January 2026
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Teams are required to carry the following documents: College
                    ID, Government ID and Consent Form
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    After the 24 hr Grand Finale, teams are expected to present
                    a working model of their solution to the judges for
                    evaluation
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Any solution prototypes created by the finalists will be the
                    intellectual property of the organizers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* PPT Template */}
          <Card className="card-gradient group cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                PPT Template
              </h3>
              <p className="text-muted-foreground mb-6">
                Download the official presentation template for your final
                submission
              </p>
              <a href="/codecratz26.pptx" download>
                <Button className="btn-gradient group w-full">
                  <Download className="mr-2 w-4 h-4" />
                  Download Template
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp Group */}
          <a
            href="https://chat.whatsapp.com/I6yC432VtkWEVFyVssMmfz?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="card-gradient group cursor-pointer hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  WhatsApp Group
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our official WhatsApp group for updates and announcements
                </p>
                <Button className="btn-gradient group w-full">
                  <Users className="mr-2 w-4 h-4" />
                  Join Group
                </Button>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Timeline Info */}
        <Card className="card-gradient max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">
                Registration Closes
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <CountdownCard
                  days={registrationCountdown.days}
                  hours={registrationCountdown.hours}
                  minutes={registrationCountdown.minutes}
                />
              </div>
            </div>
          </CardContent>
          <p className="text-muted-foreground text-center mb-6">
            {" "}
            Registration closes on{" "}
            <span className="text-primary">November 25th, 2025</span>
          </p>
        </Card>
        <br></br>
        {/* Prize Pool Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-8 relative"
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-30 blur-2xl"
            animate={{
              background: [
                "radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 50%, hsl(var(--accent)) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 30%, hsl(var(--tertiary)) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Card className="card-gradient relative overflow-hidden border-2 border-primary/20">
            {/* Animated Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--tertiary)))",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <CardContent className="p-8 relative z-10">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-tertiary rounded-full blur-md opacity-60" />
                  <Trophy className="w-10 h-10 text-accent mr-3 relative z-10 drop-shadow-lg" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-foreground"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Prize Pool
                </motion.h3>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-xl text-foreground leading-relaxed mb-2">
                  Winning Teams will be receiving a prize pool worth
                </p>
                <motion.div
                  className="inline-block"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <motion.span
                    className="relative inline-block font-bold text-3xl md:text-4xl"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--tertiary)), hsl(var(--accent)), hsl(var(--primary)))",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ₹40,000/-
                    {/* Shine Effect */}
                    <motion.span
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                      animate={{
                        backgroundPosition: ["-100% 0%", "200% 0%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                    >
                      ₹40,000/-
                    </motion.span>
                  </motion.span>
                </motion.div>
                <motion.span
                  className="text-foreground font-bold text-3xl md:text-4xl inline-block ml-2"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  +
                </motion.span>
              </motion.div>
            </CardContent>

            {/* Pulsing Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow:
                  "0 0 60px hsl(var(--primary) / 0.3), 0 0 100px hsl(var(--accent) / 0.2)",
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Card>
        </motion.div>

        {/* Registration Fees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-8 relative"
        >
          <Card className="relative overflow-hidden border-2 border-accent/30 bg-card/50 backdrop-blur-sm">
            <motion.div
              className="absolute inset-0 rounded-xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--tertiary)))",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <CardContent className="p-8">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-foreground"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Registration Fees
                </motion.h3>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <motion.span
                    className="relative inline-block font-bold text-2xl md:text-3xl"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--tertiary)), hsl(var(--primary)), hsl(var(--tertiary)), hsl(var(--accent)))",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ₹1,000/-
                    {/* Shine Effect */}
                    <motion.span
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                      animate={{
                        backgroundPosition: ["-100% 0%", "200% 0%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                    >
                      ₹1,000/-
                    </motion.span>
                  </motion.span>
                </motion.div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Only if selected for Grand Final
                </p>
              </motion.div>
            </CardContent>

            {/* Pulsing Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow:
                  "0 0 60px hsl(var(--accent) / 0.3), 0 0 100px hsl(var(--tertiary) / 0.2)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;
