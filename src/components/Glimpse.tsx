import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, X, Youtube } from "lucide-react";

const Glimpse = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(""); // This will be set when you have the YouTube video URL

  // Placeholder YouTube video ID - replace with actual video ID when available
  const youtubeVideoId = "YGi-oec-Bek"; // Replace with actual YouTube video ID
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`;

  const handleVideoClick = () => {
    setVideoUrl(youtubeEmbedUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      <section id="glimpse" className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Glimpse of CODECRATZ'25
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
              Get a sneak peek into the excitement and energy of CODECRATZ'25.
              Watch our promotional video to see what awaits you at this
              incredible technical symposium.
            </p>
          </div>
          {/* Video Preview Card */}
          <div className="max-w-4xl mx-auto fade-in-up">
            <Card className="card-gradient group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-0">
                {/* Video Thumbnail/Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {/* Placeholder for video thumbnail - you can replace this with actual thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        CODECRATZ'26
                      </h3>
                      <p className="text-white/80 text-lg">
                        Watch the Promotional Video
                      </p>
                    </div>
                  </div>

                  {/* YouTube Logo */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </div>

                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
                    onClick={handleVideoClick}
                  >
                    <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Play className="w-10 h-10 text-primary ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        CODECRATZ'26 Promotional Video
                      </h3>
                      <p className="text-muted-foreground">
                        Experience the energy and excitement of our technical
                        symposium
                      </p>
                    </div>
                    <Button
                      onClick={handleVideoClick}
                      className="bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                  </div>

                  {/* <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>Duration: 2:30</span>
                    <span>•</span>
                    <span>HD Quality</span>
                    <span>•</span>
                    <span>Full Screen Available</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Additional Info Cards
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="card-gradient text-center p-6 fade-in-up">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Event Highlights
                </h3>
                <p className="text-muted-foreground">
                  See the best moments from previous editions and what to expect
                  this year
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center p-6 fade-in-up">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  High Quality
                </h3>
                <p className="text-muted-foreground">
                  Professional video production showcasing our technical
                  excellence
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center p-6 fade-in-up">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-tertiary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Share & Enjoy
                </h3>
                <p className="text-muted-foreground">
                  Share with friends and get them excited about CODECRATZ'26
                </p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white text-xl font-bold">
                CODECRATZ'26 Promotional Video
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeVideo}
                className="text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </DialogHeader>

          <div className="px-6 pb-6">
            {videoUrl ? (
              <div className="aspect-video w-full">
                <iframe
                  src={videoUrl}
                  title="CODECRATZ'26 Promotional Video"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <p>Loading video...</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Glimpse;
