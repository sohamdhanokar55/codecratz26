import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is CODECRATZ'26?",
    answer:
      "CODECRATZ'26 is a 24-hours hackathon organized by Agnel Polytechnic in association with Institution's Innovation Council (IIC). It's a platform for students to showcase their technical skills, participate in coding competition, and network with industry professionals.",
    category: "General",
  },
  {
    id: "2",
    question: "Who can participate in CODECRATZ'26?",
    answer:
      "CODECRATZ'26 is open to all students from polytechnic colleges, students from 2nd & 3rd year diploma colleges across Maharashtra in various events and competitions.",
    category: "Eligibility",
  },

  {
    id: "4",
    question: "How do I register for CODECRATZ'26?",
    answer:
      "Registration can be done through our official website. Simply fill out the registration form with your details, and complete the payment process. Registration closes on November 25th, 2025. Note: Make sure you read the guidelines and rules before registering.",
    category: "Registration",
  },
  {
    id: "5",
    question: "What are the registration fees?",
    answer:
      "If a team gets shortlisted, they will be required to pay a registration fee of ₹1000 per team. This fee will be used to cover the costs of the event and the prizes.",
    category: "Registration",
  },
  {
    id: "6",
    question: "Where will CODECRATZ'26 be held?",
    answer:
      "CODECRATZ'26 will be held at Agnel Polytechnic, Vashi. The venue is easily accessible by public transport and has all the necessary facilities to host a large-scale technical symposium.",
    category: "Venue",
  },
  {
    id: "7",
    question: "What should I bring to the event?",
    answer:
      "Please bring your student ID, laptop with necessary software installed, chargers, and any specific tools required for your chosen events. We'll provide detailed requirements list closer to the event date.",
    category: "Preparation",
  },
  {
    id: "8",
    question: "Are there any prizes for winners?",
    answer:
      "Yes! CODECRATZ'26 offers exciting prizes including cash rewards, certificates, trophies, and other opportunities with our partner companies. The total prize pool is worth over ₹40,000.",
    category: "Prizes",
  },
  {
    id: "10",
    question: "How can I get updates about CODECRATZ'26?",
    answer:
      "Follow us on Instagram (@codecratz) and LinkedIn for regular updates. You can also join our WhatsApp group or contact our team members directly for any queries. We'll keep you informed about all important announcements.",
    category: "Updates",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = Array.from(new Set(faqData.map((item) => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Find answers to common questions about CODECRATZ'26. Can't find what
            you're looking for?
            <span className="text-primary font-semibold">
              {" "}
              Contact our team
            </span>{" "}
            for personalized assistance.
          </p>
        </div>
        {/* Category Filter
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                : "bg-card/50 text-muted-foreground hover:text-primary hover:bg-card/80 border border-gray-200/20"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                  : "bg-card/50 text-muted-foreground hover:text-primary hover:bg-card/80 border border-gray-200/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((item, index) => (
            <Card
              key={item.id}
              className={`card-gradient group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                openItems.includes(item.id) ? "ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div
                  className="p-6 hover:bg-card/80 transition-all duration-300"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.question}
                      </h3>
                    </div>
                    <div
                      className={`transition-transform duration-300 ${
                        openItems.includes(item.id) ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6 border-t border-gray-200/20">
                    <div className="pt-4">
                      <p className="text-muted-foreground leading-relaxed body-text">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Contact CTA
        <div className="text-center mt-16 fade-in-up">
          <Card className="card-gradient max-w-2xl mx-auto p-8">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                  Still Have Questions?
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 body-text">
                Our team is here to help! Reach out to us for any additional
                information or clarifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-us")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  Contact Our Team
                </button>
                <button
                  onClick={() =>
                    window.open("https://wa.me/918828167334", "_blank")
                  }
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  WhatsApp Support
                </button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;
