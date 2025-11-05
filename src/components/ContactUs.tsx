import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MessageCircle, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  phone: string;
}
const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/codecratz",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/agnel-polytechnic-vashi-council",
    color: "from-blue-600 to-blue-700",
  },
];

const technicalTeam: TeamMember[] = [
  {
    name: "Parth Naukudkar",
    role: "Technical Secretary",
    image: "/team/Parth.png",
    email: "parth@apvcouncil.in",
    linkedin: "https://www.linkedin.com/in/parth-naukudkar-bab2b9376/",
    whatsapp: "+91 8828167334",
    phone: "+91 8828167334",
  },
  {
    name: "Kirti Karande",
    role: "Event Coordinator",
    image: "/team/Kirti.png",
    email: "kirti@apvcouncil.in",
    linkedin: "https://www.linkedin.com/in/kirti-karande-65204423/",
    whatsapp: "+91 7045014174",
    phone: "+91 7045014174",
  },
  {
    name: "Swara Hande",
    role: "Senior OCM Member",
    image: "/team/Swara.png",
    email: "swara@apvcouncil.in",
    linkedin: "https://www.linkedin.com/in/swara-hande-9a8277356/",
    whatsapp: "+91 9372472223",
    phone: "+91 9372472223",
  },
];

const eventTeam: TeamMember[] = [
  {
    name: "Olivia Nereparambil",
    role: "General Secretary",
    image: "/team/Olivia.png",
    email: "olivia@apvcouncil.in",
    linkedin: "https://www.linkedin.com/in/olivia-nereparambil-239966356/",
    whatsapp: "+91 9967427007",
    phone: "+91 9967427007",
  },
  {
    name: "Amol Suryavanshi",
    role: "Council In-Charge",
    image: "/team/Amol.png",
    email: "amol@apvcouncil.in",
    linkedin: "https://www.linkedin.com/in/amol-suryawanshi-b232321b2/",
    whatsapp: "+91 8356999573",
    phone: "+91 8356999573",
  },
  {
    name: "Sara Pathak",
    role: "Sports Secretary",
    image: "/team/Sara.png",
    email: "sara@apvcouncil.in",
    linkedin: "https://www.linkedin.com/in/sara-pathak-63932b369/",
    whatsapp: "+91 8928005205",
    phone: "+91 8928005205",
  },
];

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Get in touch with our team members for any queries about
            CODECRATZ'26
          </p>
        </div>

        {/* Technical Queries Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Technical Queries
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our technical team for questions about problem statements,
              submissions, judging criteria, and technical aspects of the event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalTeam.map((member, index) => (
              <Card
                key={`technical-${index}`}
                className="card-gradient group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              <div class="text-white text-4xl font-bold">${member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}</div>
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Hover Overlay with Contact Details */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium">{member.role}</p>
                      </div>

                      <div className="flex flex-col space-y-3">
                        {/* Email */}
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover/contact:bg-primary/40 transition-colors">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{member.email}</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover/contact:bg-primary/40 transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </div>
                          <span className="text-sm">LinkedIn Profile</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/${member.whatsapp.replace(
                            /\D/g,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover/contact:bg-primary/40 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{member.whatsapp}</span>
                        </a>

                        {/* Phone */}
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover/contact:bg-primary/40 transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 bg-card/50 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Related Queries Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Event Related Queries
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to our event management team for questions about
              registration, venue, schedule, accommodation, and general event
              information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTeam.map((member, index) => (
              <Card
                key={`event-${index}`}
                className="card-gradient group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-accent/20 to-tertiary/20 flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-accent to-tertiary flex items-center justify-center">
                              <div class="text-white text-4xl font-bold">${member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}</div>
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Hover Overlay with Contact Details */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium">{member.role}</p>
                      </div>

                      <div className="flex flex-col space-y-3">
                        {/* Email */}
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover/contact:bg-accent/40 transition-colors">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{member.email}</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover/contact:bg-accent/40 transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </div>
                          <span className="text-sm">LinkedIn Profile</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/${member.whatsapp.replace(
                            /\D/g,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover/contact:bg-accent/40 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{member.whatsapp}</span>
                        </a>

                        {/* Phone */}
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group/contact"
                        >
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover/contact:bg-accent/40 transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 bg-card/50 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <br></br>
        {/* Additional Contact Information */}
        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Connect With Us
            </span>
          </h3>

          <div className="flex justify-center items-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="group border-2 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mr-2 group-hover:animate-pulse`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    {social.name}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
