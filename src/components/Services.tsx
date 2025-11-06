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
  Home,
  Ruler,
  Factory,
  Package,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";

interface ProblemStatement {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  browniePoints?: string[];
  gradient: string;
}

const problemStatements: ProblemStatement[] = [
  {
    id: "PS-1",
    icon: ShieldAlert,
    title: "AI-Powered Cyber Fraud & UPI Scam Detection System",
    subtitle:
      "Safeguarding digital payments through intelligent fraud detection",
    description:
      "The growing popularity of UPI and digital payments has made financial transactions quick and convenient, but it has also opened new doors for cybercriminals. Fraudsters exploit social engineering, fake payment links, and duplicate UPI handles to trick users into unauthorized transfers. Current systems detect fraud only after the transaction occurs, causing monetary losses and loss of trust. To counter this, the proposed system leverages Artificial Intelligence and Machine Learning to monitor, analyze, and predict fraudulent transaction behavior in real time. It learns user spending habits, identifies anomalies, and warns users before suspicious activity can lead to loss — ensuring safer digital payments for individuals and organizations.",
    features: [
      "AI-based detection of unusual transaction patterns - Machine learning models analyze frequency, amount, receiver ID, and timing of transactions to identify suspicious deviations from normal user behavior",
      "Real-time fraud alerts and notifications - When a suspicious transaction or phishing attempt is detected, the system instantly alerts the user through push notifications, email, or SMS to prevent further action",
      "Risk scoring for every UPI transaction - Each transaction is assigned a risk score based on multiple parameters such as new payee detection, time anomalies (odd-hour transactions), and device changes",
      "Phishing and fake link detection - Integrated NLP-based module detects scam UPI links, fake websites, or QR codes by analyzing URL structures and domain reputation before payment is initiated",
      "Dashboard for users and admin monitoring - Interactive web/app dashboard displaying real-time flagged transactions, fraud trends, and fraud category breakdown (phishing, impersonation, duplicate ID, etc.)",
      "Continuous learning from new fraud patterns - AI model retrains automatically with verified fraud reports and new transaction data to stay updated against evolving scam techniques",
    ],
    browniePoints: [
      "Integration with banking and UPI APIs - Enables live transaction verification and real-time fraud flagging at the backend level",
      "AI chatbot for user awareness & reporting - Provides educational insights, scam alerts, and allows users to report suspicious UPI messages or numbers",
      "Visual analytics & fraud heatmaps - Displays regions or time zones with high scam activity using graphical data visualization",
      "Blockchain-secured transaction logs - Ensures tamper-proof audit trails for every flagged or verified transaction",
      "Browser & mobile security extension - Detects and blocks suspicious UPI links or scam websites before a user clicks on them",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "PS-2",
    icon: Factory,
    title: "Smart Manufacturing Management System",
    subtitle: "Empowering small manufacturers with digital tools for efficient production, quality, and inventory control",
    description:
      "Small and medium-scale manufacturing industries often face difficulties in managing production workflows, tracking inventory, and maintaining product quality — especially when operations are handled manually. Traditional management methods rely heavily on paper-based tracking, individual experience, and inconsistent communication between teams. This results in delayed production, stock shortages, and inefficient quality checks. To overcome these challenges, develop a software-based Smart Manufacturing Management System that integrates production scheduling, inventory management, and quality control into one unified platform. The solution should enhance visibility, improve coordination, and enable data-driven decision-making — without requiring any hardware or IoT setup.",
    features: [
      "Production Planning & Scheduling - Automate task scheduling, assign operations, and track real-time progress to ensure timely deliveries",
      "Inventory Management System - Monitor raw material and finished goods levels, generate low-stock alerts, and manage supplier records",
      "Digital Quality Control - Create and record inspection checklists, flag defects, and maintain a digital log of quality reports",
      "Centralized Dashboard - Provide a unified interface showing production status, stock levels, and quality metrics through charts or analytics",
      "Report Generation & Data Insights - Export key performance summaries in PDF or Excel format for managerial review and analysis",
    ],
    browniePoints: [
      "AI-based production efficiency suggestions",
      "Email or notification alerts for delays and low stock",
      "Multi-user access for managers and operators",
      "Visual analytics for performance and quality trends",
      "Integration-ready API for future system expansion",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "PS-3",
    icon: Home,
    title: "Smart Interior Design & Construction Cost Estimation System",
    subtitle: "Transforming 2D blueprints into intelligent 3D living spaces with real-time cost and layout insights",
    description:
      "In civil and interior design projects, homeowners often face challenges in visualizing how their rooms will look after construction. Builders usually hand over a flat or a house layout, but interior planning — including furniture placement, lighting, electrical fixtures, and plumbing — is left to the owners. This leads to frequent redesigns, inefficient space usage, and unexpected cost escalations once construction begins. Manual estimation and lack of visualization further complicate the decision-making process. To address these issues, develop a Smart Interior Design & Cost Estimation System that uses 3D scanning and AI-based layout suggestions to assist builders, interior designers, and homeowners in planning optimized, cost-effective, and direction-aware interiors before execution.",
    features: [
      "3D Room Scanning & Visualization - Use mobile camera or LiDAR-based scanning to capture the dimensions of a room and generate a real-time 3D model view",
      "AI-powered Layout Planning - Automatically suggest ideal placements for doors, furniture, lighting, electrical points, and plumbing fixtures based on the room's shape, sunlight direction, and intended purpose",
      "Smart Cost Estimator - Provide detailed cost estimation for materials, furniture, and labor based on design selection and regional pricing databases",
      "Design Personalization & Recommendations - Suggest multiple design themes (modern, traditional, minimalistic) and auto-adjust based on room orientation and user preferences",
      "Augmented Reality (AR) Preview - Allow users to preview their interior design in real-time AR mode — placing virtual furniture and fixtures to visualize the final output",
      "Project Report & Material List Generation - Generate downloadable reports including layout plan, estimated cost, and bill of materials for client or builder reference",
    ],
    browniePoints: [
      "Integration with BIM (Building Information Modeling) for professional design export",
      "AI-based cost optimization suggestions (e.g., alternative materials for budget reduction)",
      "Collaboration portal for homeowners, architects, and contractors",
      "Sustainability insights (eco-friendly material recommendations)",
      "Voice or chatbot-based design assistant for quick guidance",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "PS-4",
    icon: Shield,
    title: "Campus Security & Emergency Response App",
    subtitle: "Your campus shield for instant alerts, rapid response, and safer student life",
    description:
      "College campuses often struggle to respond quickly to emergencies such as harassment, medical incidents, theft, or suspicious activities. Traditional reporting methods rely on manual communication, security guards, or slow administrative processes, which can lead to delayed responses and compromised student safety. To solve this, develop a real-time campus safety application that enables students to instantly report threats or emergencies with location details, media evidence, and panic features. The system ensures rapid action by campus security, creates accountability, and fosters a proactive safety environment.",
    features: [
      "Instant emergency reporting with live location - Students can report threats or emergencies with a single tap with campus security",
      "Photo & video evidence upload - Users can quickly capture and send visual proof of suspicious behaviour or incidents to ensure accurate response",
      "Panic/SOS button with vibration confirmation - The emergency button instantly triggers a distress alert when pressed, sends live location to pre-set contacts, with vibration feedback confirmation",
      "Real-time security dashboard for authorities - Campus officials instantly receive emergency alerts containing the student's photo and personal details for quick verification and situational awareness",
      "Secure chat & quick response communication - Two-way in-app chat for immediate assistance and guidance during emergencies",
      "Incident status updates & closure proof - Students can see whether a complaint is Viewed, Assigned, Responded, or Closed, ensuring transparency",
    ],
    browniePoints: [
      "AI-powered threat level detection based on message keywords & behavior patterns",
      "Bluetooth & IoT panic beacons installed in isolated areas",
      "Wearable smartwatch SOS integration",
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

                {problemStatements[selectedProblem].browniePoints && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4">
                      Brownie Point Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {problemStatements[selectedProblem].browniePoints.map(
                        (feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

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
