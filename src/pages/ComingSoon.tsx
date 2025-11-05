import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "APV Council - Agnel Polytechnic,Vashi";

    const setFavicon = (href: string) => {
      let link = document.querySelector(
        "link[rel='icon']"
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.type = "image/png";
      link.href = "/Council_Logo.png";
    };

    setFavicon("/Council_Logo.png");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We are crafting something great for APV Council. Stay tuned.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
