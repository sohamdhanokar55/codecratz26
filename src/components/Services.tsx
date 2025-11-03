import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Smartphone,
  Car,
  Shield,
  Zap,
  CheckCircle,
  Eye,
  X,
  Wallet,
  Calendar,
  Gamepad2,
} from "lucide-react";

const problemStatements = [
  {
    id: "PS-1",
    icon: Wallet,
    title: "Finance Tracker",
    subtitle:
      "A new and innovative way of keeping account of all your finances",
    description:
      "Individuals often struggle with effective financial management due to a lack of accessible tools. Traditional methods are time-consuming and lead to poor decisions. Develop a user-friendly finance tracking app that provides real-time insights, automates expense categorization, offers personalized financial advice, and ensures robust security.",
    features: [
      "Easy to use interface for non-tech-savvy users",
      "Accurate tracking of income and expenses",
      "Budgeting tools for different categories",
      "Savings goals tracking and management",
      "Insights and reports on spending habits",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "PS-2",
    icon: Car,
    title: "Smart Parking",
    subtitle: "A solution for Effortless Parking Management",
    description:
      "With the rapid increase in urban population and vehicle ownership, finding an available parking spot has become one of the most significant challenges in cities worldwide. This app should help drivers find available parking spots in real time, reduce congestion, and optimize parking space usage.",
    features: [
      "User-friendly mobile app with intuitive interface",
      "Real-time parking spot location and reservation",
      "Integration with GPS and navigation systems",
      "Smart sensors for vehicle presence detection",
      "Turn-by-turn directions to reserved spots",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "PS-3",
    icon: Calendar,
    title: "Event Handling",
    subtitle: "College Event Management System",
    description:
      "Colleges and universities host numerous events throughout the academic year, including cultural festivals, technical symposiums, sports meet, workshops, and guest lectures. Managing these events efficiently can be challenging due to coordination needs among various stakeholders.",
    features: [
      "Event creation and management tools",
      "Online registration with payment processing",
      "Communication tools for notifications",
      "Attendance tracking system",
      "Automated e-certificate generation",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "PS-4",
    icon: Smartphone,
    title: "Mobile Attendance System",
    subtitle: "Modern attendance management for educational institutions",
    description:
      "In many educational institutions, tracking student attendance is often done manually or through outdated systems, leading to inefficiencies, inaccuracies, and a lack of real-time data. A more streamlined and reliable system is crucial for improving the educational experience.",
    features: [
      "Mobile-based attendance marking",
      "Real-time attendance tracking",
      "Automated report generation",
      "Student engagement analytics",
      "Integration with existing systems",
    ],
    gradient: "from-orange-500 to-red-600",
  },
];

const Services = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <section id="problem-statements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              PROBLEM STATEMENTS
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto body-text">
            Innovative technology solutions addressing real-world challenges.
            Choose your problem statement and build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemStatements.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <Card
                key={index}
                className="card-gradient border-0 group cursor-pointer overflow-hidden h-full"
              >
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${problem.gradient} rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-accent mb-1">
                          {problem.id}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                          {problem.title}
                        </h3>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-white transition-all w-full sm:w-auto flex-shrink-0"
                      onClick={() => setSelectedProblem(index)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      VIEW MORE
                    </Button>
                  </div>

                  <p className="text-accent font-medium mb-4 text-sm">
                    {problem.subtitle}
                  </p>

                  <p className="leading-relaxed mb-6 flex-grow body-text">
                    {truncateText(problem.description)}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold mb-3">
                      Desired Solution:
                    </h4>
                    <div className="space-y-2">
                      {problem.features
                        .slice(0, 2)
                        .map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm muted-text">
                              {feature}
                            </span>
                          </div>
                        ))}
                      {problem.features.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{problem.features.length - 2} more features...
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal for expanded problem statement */}
        {selectedProblem !== null && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedProblem(null)}
          >
            <div
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${problemStatements[selectedProblem].gradient} rounded-2xl flex items-center justify-center mr-4`}
                    >
                      {React.createElement(
                        problemStatements[selectedProblem].icon,
                        { className: "w-8 h-8 text-white" }
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent mb-1">
                        {problemStatements[selectedProblem].id}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {problemStatements[selectedProblem].title}
                      </h3>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedProblem(null)}
                    className="hover:bg-red-100 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-accent font-medium mb-6 text-lg">
                  {problemStatements[selectedProblem].subtitle}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">
                    Problem Description
                  </h4>
                  <p className="leading-relaxed text-foreground">
                    {problemStatements[selectedProblem].description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">
                    Desired Solution Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {problemStatements[selectedProblem].features.map(
                      (feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark"
                    onClick={() => setSelectedProblem(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
