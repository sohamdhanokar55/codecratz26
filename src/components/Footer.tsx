import { Separator } from "@/components/ui/separator";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  FileText,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-16 bg-gradient-to-r from-background to-card relative"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            {/* Logos */}
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/1.png"
                alt="Agnel Logo"
                className="h-20 w-auto object-contain"
              />
              <img
                src="/2.png"
                alt="Codecratz Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="text-2xl md:text-3xl font-bold text-primary mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                C
                <FontAwesomeIcon
                  icon={faCog}
                  className="text-primary inline-block mx-1"
                  style={{
                    fontSize: "0.7em",
                    verticalAlign: "baseline",
                    lineHeight: "1",
                  }}
                />
                DECRATZ '26
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Codecratz 2026 is organized by Agnel Polytechnic in association
              with Institution's Innovation Council (IIC).
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="https://chat.whatsapp.com/E6TTOOGzIg851sWKDF2yUA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a> */}
              {/* <a
                href="/TPP Brochure_SH2025_Humanities.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white" />
              </a> */}
              <a
                href="https://instagram.com/codecratz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/agnel-polytechnic-vashi-council"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              {/* <a
                href="https://twitter.com/techventurepulse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-accent to-accent-glow rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              > */}
              {/* <Twitter className="w-5 h-5 text-white" /> */}
              {/* </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li
                className="hover:text-primary cursor-pointer transition-colors"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                What is CODECRATZ
              </li>
              <li
                className="hover:text-primary cursor-pointer transition-colors"
                onClick={() =>
                  document
                    .getElementById("timeline")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Event Timeline
              </li>
              <li
                className="hover:text-primary cursor-pointer transition-colors"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Rules & FAQs
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Event Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Registration Closes: November 25th, 25</li>
              <li>Venue: Agnel Polytechnic, Vashi</li>
              <li>
                Support:{" "}
                <span className="text-foreground">support@apvcouncil.in</span>
              </li>
              <li>Sponsorships: sponsors@apvcouncil.in</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-center items-center text-muted-foreground text-center">
          <p className="text-center">
            &copy;APV CODECRATZ 2026. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <span className="hover:text-primary cursor-pointer transition-colors">
      Privacy Policy
    </span>
    <span className="hover:text-primary cursor-pointer transition-colors">
      Terms of Service
    </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
