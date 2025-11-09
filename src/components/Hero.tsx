import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center">
          <div className="fade-in-up animate max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              {/* <Sparkles className="w-8 h-8 text-accent mr-3" /> */}
              {/* <span className="text-accent font-medium">Next-Gen Technology</span> */}
              {/* <Zap className="w-8 h-8 text-tertiary ml-3" /> */}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent font-extrabold tracking-wide">
                C
                <FontAwesomeIcon
                  icon={faCog}
                  className="text-accent inline-block mx-1"
                  style={{
                    fontSize: "0.7em",
                    verticalAlign: "baseline",
                    lineHeight: "1",
                  }}
                />
                DECRATZ '26
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-semibold text-accent tracking-wider">
              Create • Code • Conquer
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl leading-relaxed text-white px-4 sm:px-0">
              Join the ultimate 24-Hour coding competition for polytechnic
              students. Showcase your programming skills and compete for
              exciting prizes!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                className="btn-gradient group"
                onClick={() =>
                  window.open("https://forms.gle/DNR6vKFJuj1bSYkeA", "_blank")
                }
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
