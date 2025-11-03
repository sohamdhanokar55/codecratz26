import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";
import { iTestimonial } from "@/components/ui/retro-testimonial";

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "e60aa346-f6da-11ed-b67e-0242ac120002",
    "e60aa346-f6da-11ed-b67e-0242ac120003",
    "e60aa346-f6da-11ed-b67e-0242ac120004",
    "e60aa346-f6da-11ed-b67e-0242ac120005",
  ],
  details: {
    "e60aa346-f6da-11ed-b67e-0242ac120002": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120002",
      description:
        "CODECRATZ '25 was an incredible experience! The 24-hour hackathon pushed our limits and brought out the best in our team. The problem statements were challenging and relevant to real-world issues.",
      profileImage: "/5.png",
      name: "Sarah Chen",
      designation: "Winner - AI Innovation Track",
      hoverMessage: "The technical mentors at CODECRATZ '25 were exceptional. Their guidance helped us implement advanced AI algorithms that we never thought possible in 24 hours!"
    },
    "e60aa346-f6da-11ed-b67e-0242ac120003": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120003",
      description:
        "As a first-time participant, I was amazed by the level of organization and support provided. The mentors were incredibly helpful, and the networking opportunities were invaluable for my career.",
      profileImage: "/6.png",
      name: "Michael Rodriguez",
      designation: "Participant - Web Development Track",
      hoverMessage: "The networking session at CODECRATZ '25 connected me with industry professionals who later offered me internship opportunities. It was a game-changer!"
    },
    "e60aa346-f6da-11ed-b67e-0242ac120004": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120004",
      description:
        "The diversity of problem statements at CODECRATZ allowed us to explore different domains. Our team worked on a sustainability project that we're now turning into a startup. Thank you for the inspiration!",
      profileImage: "/7.png",
      name: "David Kim",
      designation: "Runner-up - Sustainability Track",
      hoverMessage: "The sustainability track at CODECRATZ '25 inspired our team to create an eco-friendly solution. We're now working with local NGOs to implement it!"
    },
    "e60aa346-f6da-11ed-b67e-0242ac120005": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120005",
      description:
        "CODECRATZ '25 exceeded all my expectations. The event was well-organized, the judges were industry experts, and the overall atmosphere was electric. Can't wait for the next edition!",
      profileImage: "/8.png",
      name: "Emily Thompson",
      designation: "Participant - Mobile App Track",
      hoverMessage: "The judging panel at CODECRATZ '25 included CTOs from top tech companies. Their feedback was invaluable and helped us refine our mobile app concept!"
    },
  },
};

const cards = testimonialData.ids.map((cardId: string, index: number) => {
  const details = testimonialData.details as TestimonialDetails;
  return (
    <TestimonialCard
      key={cardId}
      testimonial={details[cardId]}
      index={index}
      backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
});

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Hear from our amazing participants who have experienced the thrill
            of CODECRATZ and transformed their ideas into reality.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-up">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
