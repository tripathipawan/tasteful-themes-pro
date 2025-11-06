import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Lightbox from "@/components/Lightbox";
import ambiance1 from "@/assets/gallery/ambiance-1.jpg";
import ambiance2 from "@/assets/gallery/ambiance-2.jpg";
import ambiance3 from "@/assets/gallery/ambiance-3.jpg";
import dish1 from "@/assets/gallery/dish-1.jpg";
import dish2 from "@/assets/gallery/dish-2.jpg";
import dish3 from "@/assets/gallery/dish-3.jpg";
import dish4 from "@/assets/gallery/dish-4.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";

type Category = "all" | "ambiance" | "dishes" | "events";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    { src: ambiance1, alt: "Elegant Dining Room", category: "ambiance" },
    { src: ambiance2, alt: "Modern Bar Area", category: "ambiance" },
    { src: ambiance3, alt: "Outdoor Patio", category: "ambiance" },
    { src: dish1, alt: "Gourmet Pasta", category: "dishes" },
    { src: dish2, alt: "Seared Scallops", category: "dishes" },
    { src: dish3, alt: "Seafood Tower", category: "dishes" },
    { src: dish4, alt: "Artisan Desserts", category: "dishes" },
    { src: event1, alt: "Wine Tasting Event", category: "events" },
    { src: event2, alt: "Chef's Cooking Class", category: "events" },
    { src: event3, alt: "Private Dining Event", category: "events" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const categories: { label: string; value: Category }[] = [
    { label: "All", value: "all" },
    { label: "Ambiance", value: "ambiance" },
    { label: "Dishes", value: "dishes" },
    { label: "Events", value: "events" },
  ];

  const getCategoryCount = (category: Category) => {
    if (category === "all") return galleryImages.length;
    return galleryImages.filter((img) => img.category === category).length;
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our restaurant through stunning visuals of our ambiance, culinary creations, and special events
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="relative group"
            >
              {category.label}
              <Badge
                variant="secondary"
                className="ml-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                {getCategoryCount(category.value)}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover-lift"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                  <Badge variant="secondary" className="mt-2 capitalize">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default Gallery;
