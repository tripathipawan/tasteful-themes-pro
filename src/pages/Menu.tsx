import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import startersImg from "@/assets/menu-starters.jpg";
import mainImg from "@/assets/menu-main.jpg";
import dessertsImg from "@/assets/menu-desserts.jpg";
import drinksImg from "@/assets/menu-drinks.jpg";

const Menu = () => {
  const menuCategories = [
    {
      category: "Starters",
      image: startersImg,
      items: [
        { name: "Bruschetta Trio", description: "Tomato basil, mushroom truffle, and goat cheese", price: "$12" },
        { name: "Calamari Fritti", description: "Crispy squid with lemon aioli", price: "$15" },
        { name: "Beef Carpaccio", description: "Thinly sliced beef with arugula and parmesan", price: "$18" },
        { name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil", price: "$14" },
      ],
    },
    {
      category: "Main Course",
      image: mainImg,
      items: [
        { name: "Grilled Ribeye", description: "16oz prime ribeye with roasted vegetables", price: "$42" },
        { name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon butter sauce", price: "$32" },
        { name: "Lobster Risotto", description: "Creamy risotto with fresh lobster meat", price: "$38" },
        { name: "Chicken Piccata", description: "Tender chicken with caper lemon sauce", price: "$28" },
      ],
    },
    {
      category: "Desserts",
      image: dessertsImg,
      items: [
        { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$10" },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with vanilla ice cream", price: "$12" },
        { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$9" },
        { name: "Panna Cotta", description: "Italian cream dessert with berry compote", price: "$10" },
      ],
    },
    {
      category: "Drinks",
      image: drinksImg,
      items: [
        { name: "House Wine", description: "Red, white, or rosé selection", price: "$8/glass" },
        { name: "Craft Cocktails", description: "Signature mixologist creations", price: "$14" },
        { name: "Fresh Juices", description: "Orange, grapefruit, or mixed berry", price: "$6" },
        { name: "Espresso", description: "Double shot Italian espresso", price: "$4" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, crafted with the finest ingredients
          </p>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, index) => (
            <section key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center mb-8">
                <Badge variant="outline" className="text-lg px-6 py-2">
                  {category.category}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover-lift">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl font-playfair">
                              {item.name}
                            </CardTitle>
                            <span className="text-lg font-semibold text-primary">
                              {item.price}
                            </span>
                          </div>
                          <CardDescription className="text-base">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="sticky top-32">
                    <img
                      src={category.image}
                      alt={category.category}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
