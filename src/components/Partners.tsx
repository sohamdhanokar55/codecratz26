import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Building2 } from "lucide-react";

interface Partner {
  name: string;
  description: string;
  logo: string;
  website: string;
  category: string;
}

const partners: Partner[] = [
  {
    name: "Microsoft",
    description: "Technology Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Microsoft_Store.svg",
    website: "https://www.microsoft.com",
    category: "Technology",
  },
  {
    name: "Google",
    description: "Cloud Computing Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    website: "https://www.google.com",
    category: "Technology",
  },
  {
    name: "Amazon Web Services",
    description: "Cloud Infrastructure Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    website: "https://aws.amazon.com",
    category: "Cloud Services",
  },
  {
    name: "GitHub",
    description: "Development Platform Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    website: "https://github.com",
    category: "Development",
  },
];

const Partners = () => {
  const handlePartnerClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="partners" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            We're proud to partner with industry leaders who support innovation
            and technology education
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="card-gradient group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              onClick={() => handlePartnerClick(partner.website)}
            >
              <CardContent className="p-6">
                {/* Logo Section */}
                <div className="relative mb-6">
                  <div className="aspect-square bg-white rounded-xl flex items-center justify-center p-6 group-hover:bg-gray-50 transition-all duration-300 shadow-lg">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      style={{ filter: "brightness(0) saturate(100%)" }}
                    />
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3">
                    {partner.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full">
                    <Building2 className="w-3 h-3 text-primary mr-1" />
                    <span className="text-xs font-medium text-primary">
                      {partner.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        {/* <div className="mt-16">
          <Card className="card-gradient max-w-6xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Partnership Benefits
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Our partnerships bring together industry expertise,
                  cutting-edge technology, and educational resources to create
                  an unparalleled hackathon experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Industry Expertise
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Access to industry professionals and real-world problem
                    statements
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Technology Access
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Free access to premium tools, APIs, and cloud services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-tertiary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Career Opportunities
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Direct connections to internship and job opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Become a Partner CTA */}
        {/* <div className="mt-12 text-center">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Interested in Partnering with Us?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our network of industry leaders and help shape the future
                of technology education.
              </p>
              <button
                className="btn-gradient px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
                onClick={() =>
                  window.open("mailto:partners@codecratz.com", "_blank")
                }
              >
                Become a Partner
                <ExternalLink className="ml-2 w-4 h-4 inline" />
              </button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Partners;
