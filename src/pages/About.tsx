import { Card, CardContent } from "@/components/ui/card";
import chefImg from "@/assets/chef.jpg";
import restaurantImg from "@/assets/about-restaurant.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            About Bella Vista
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A story of passion, tradition, and culinary excellence
          </p>
        </div>

        {/* Restaurant Story */}
        <section className="mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={restaurantImg}
                alt="Bella Vista Restaurant"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-playfair mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Bella Vista began with a simple vision: to create an exceptional dining experience that combines traditional culinary techniques with modern innovation. Our journey started with a small family-owned establishment and has grown into one of the city's most beloved restaurants.
                </p>
                <p>
                  Every dish we serve tells a story of dedication, quality, and passion. We believe that great food brings people together, creating memories that last a lifetime. Our commitment to excellence extends beyond the plate—it's reflected in every aspect of your dining experience.
                </p>
                <p>
                  From sourcing the finest local and international ingredients to creating an atmosphere that feels both elegant and welcoming, we strive to exceed expectations with every visit. Our team works tirelessly to ensure that each meal is not just satisfying, but truly memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chef Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold font-playfair mb-6">
                Meet Our Chef
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Chef Marco Rossi
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 20 years of culinary experience across Europe and North America, Chef Marco brings a wealth of expertise and creativity to Bella Vista. His passion for combining classic techniques with contemporary flavors has earned him numerous accolades and a devoted following.
                </p>
                <p>
                  Trained in the finest culinary schools of Italy and France, Chef Marco's philosophy centers on respecting ingredients and letting their natural flavors shine. He believes in sustainable sourcing and maintains close relationships with local farmers and suppliers.
                </p>
                <p>
                  Under his leadership, our kitchen has become a place of innovation and excellence, where tradition meets creativity, and every plate is a work of art. His dedication to his craft is evident in every dish that leaves our kitchen.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={chefImg}
                alt="Chef Marco Rossi"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-4xl font-bold font-playfair text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold font-playfair mb-4 text-primary">
                  Quality
                </h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our ingredients or the standards of our service. Excellence is our commitment.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold font-playfair mb-4 text-primary">
                  Passion
                </h3>
                <p className="text-muted-foreground">
                  Our love for food and hospitality drives everything we do. We pour our hearts into creating memorable experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold font-playfair mb-4 text-primary">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  We believe in responsible sourcing and supporting local communities while protecting our environment for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
