import React from "react";
import { Timeline as AceternityTimeline } from "@/components/ui/timeline";

const Timeline = () => {
  const timelineData = [
    {
      title: "Launch",
      subtitle: "November 9, 2025",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            CODECRATZ'26 officially launches! Students from diploma colleges
            across Maharashtra can start preparing their teams and ideas.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Event Launch
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Announcement
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Registration & PPT Submission",
      subtitle: "November 25, 2025",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Last day to register your team and submit your PPT presentation for
            CODECRATZ'26. Ensure all team members, documentation, and
            presentations are submitted before the deadline.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Final Deadline
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              PPT Submission
            </span>
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Team Registration
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Preliminary Round",
      subtitle: "December 6, 2025",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Online preliminary round where teams present ideas and demonstrate
            their technical & presentation skills. This round evaluates initial
            concepts and team capabilities.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Online Competition
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Technical Skills
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Presentation
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Shortlisted Teams Announcement",
      subtitle: "December 10, 2025",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Announcement of top 4 Teams shortlisted teams from every PS who will
            advance to the Grand Finale. Selected teams will receive further
            details and instructions for the judging round.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Results
            </span>
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Team Selection
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "First online Judging Round",
      subtitle: "December 4th Week, 2025",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            First round of judging where shortlisted teams present their
            solutions and progress. Expert judges evaluate teams based on
            innovation, feasibility, and technical implementation.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Evaluation
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Judging
            </span>
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Presentations
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Online Orientation",
      subtitle: "January 1st Week, 2026",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Online orientation session for all shortlisted teams. Learn about
            the Grand Finale format, rules, evaluation criteria, and get
            important updates. Teams will receive guidance on preparation
            strategies and have the opportunity to ask questions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Orientation
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Information Session
            </span>
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Online Event
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "First Online Mentoring Round",
      subtitle: "January 2nd Week, 2026",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            First mentoring session for selected teams. Industry experts and
            mentors provide guidance, feedback, and support to help teams refine
            their solutions before the Grand Finale.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Mentorship
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Guidance
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              Feedback
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Grand Finale",
      subtitle: "January 16 & 17, 2026",
      content: (
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            The main 24-hour hackathon event at Agnel Polytechnic, Vashi. Top
            teams work on real-world problem statements, build their solutions,
            and compete for the prestigious prize pool.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              24-Hour Hackathon
            </span>
            <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm font-medium">
              Problem Solving
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Final Competition
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Event Timeline
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Follow the journey of CODECRATZ'26 from registration to the grand
            finale
          </p>
        </div>
        <AceternityTimeline data={timelineData} />
      </div>
    </section>
  );
};

export default Timeline;
