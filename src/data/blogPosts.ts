export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
}

import pastaRecipeImg from "@/assets/blog/pasta-recipe.jpg";
import chefInterviewImg from "@/assets/blog/chef-interview.jpg";
import seasonalMenuImg from "@/assets/blog/seasonal-menu.jpg";
import cookingTipsImg from "@/assets/blog/cooking-tips.jpg";
import winePairingImg from "@/assets/blog/wine-pairing.jpg";
import anniversaryImg from "@/assets/blog/anniversary.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: "homemade-pasta-guide",
    title: "The Art of Homemade Pasta: A Complete Guide",
    excerpt: "Discover the secrets to creating perfect homemade pasta from scratch. Learn traditional techniques passed down through generations.",
    content: `
      <h2>Introduction to Homemade Pasta</h2>
      <p>Making pasta from scratch is one of the most rewarding culinary experiences. The process connects you with centuries of Italian tradition while creating something truly special for your table.</p>
      
      <h2>Essential Ingredients</h2>
      <p>The beauty of pasta lies in its simplicity. You'll need:</p>
      <ul>
        <li>2 cups all-purpose flour (tipo 00 for best results)</li>
        <li>3 large eggs</li>
        <li>1 tablespoon olive oil</li>
        <li>Pinch of salt</li>
      </ul>
      
      <h2>The Technique</h2>
      <p>Create a well in your flour, add eggs and oil in the center. Slowly incorporate the flour using a fork, then knead for 8-10 minutes until smooth and elastic. Rest the dough for 30 minutes before rolling.</p>
      
      <h2>Shaping Your Pasta</h2>
      <p>Whether you're making fettuccine, ravioli, or pappardelle, the key is even thickness. Use a pasta machine or rolling pin to achieve the desired texture. Fresh pasta cooks in just 2-3 minutes!</p>
      
      <h2>Chef's Tips</h2>
      <p>Always salt your pasta water generously - it should taste like the sea. Reserve some pasta water before draining to help your sauce cling perfectly to the noodles.</p>
    `,
    image: pastaRecipeImg,
    category: "Recipes",
    tags: ["pasta", "italian", "cooking tips"],
    author: "Chef Marco Rossi",
    date: "2024-03-15",
    readTime: "8 min read"
  },
  {
    id: "chef-marco-interview",
    title: "Behind the Kitchen: An Interview with Chef Marco",
    excerpt: "Get to know our head chef as he shares his culinary journey, inspirations, and what drives his passion for creating exceptional dishes.",
    content: `
      <h2>The Beginning</h2>
      <p>"I grew up in a small village in Tuscany, where food wasn't just sustenance—it was love, tradition, and family," Chef Marco recalls. His grandmother's kitchen became his first classroom, where he learned that great cooking starts with respect for ingredients.</p>
      
      <h2>Culinary Philosophy</h2>
      <p>For Chef Marco, cooking is about more than following recipes. "Every dish tells a story. Whether it's a simple tomato sauce or an elaborate multi-course meal, there's emotion and history in every bite."</p>
      
      <h2>Favorite Ingredients</h2>
      <p>"I'm obsessed with seasonal produce," he admits. "There's nothing quite like working with tomatoes at the peak of summer or fresh truffles in autumn. The ingredient should always be the star."</p>
      
      <h2>Advice for Home Cooks</h2>
      <p>"Don't be afraid to make mistakes. Some of my best dishes came from happy accidents in the kitchen. Taste as you go, trust your instincts, and most importantly, cook with love."</p>
      
      <h2>What's Next</h2>
      <p>Chef Marco is currently working on a new tasting menu that celebrates his Italian heritage while incorporating local ingredients. "It's about bridging the old world with the new," he explains with evident excitement.</p>
    `,
    image: chefInterviewImg,
    category: "Chef Interviews",
    tags: ["chef", "interview", "behind the scenes"],
    author: "Sarah Martinez",
    date: "2024-03-10",
    readTime: "6 min read"
  },
  {
    id: "spring-menu-launch",
    title: "Celebrating Spring: Our New Seasonal Menu",
    excerpt: "We're excited to introduce our spring menu featuring fresh, vibrant ingredients that capture the essence of the season.",
    content: `
      <h2>Welcome Spring!</h2>
      <p>As the weather warms and nature awakens, we're thrilled to unveil our spring menu—a celebration of renewal, freshness, and the bounty of the season.</p>
      
      <h2>Featured Dishes</h2>
      <p>Our spring offerings showcase the best of what the season has to offer:</p>
      <ul>
        <li><strong>Asparagus Risotto</strong> - Creamy Arborio rice with tender asparagus spears and lemon zest</li>
        <li><strong>Spring Pea Soup</strong> - Velvety green pea soup with mint and crispy prosciutto</li>
        <li><strong>Herb-Crusted Lamb</strong> - Rack of lamb with fresh rosemary and spring vegetables</li>
        <li><strong>Strawberry Panna Cotta</strong> - Light and refreshing dessert with local strawberries</li>
      </ul>
      
      <h2>Local Partnerships</h2>
      <p>We're proud to partner with local farms to bring you the freshest ingredients. Our asparagus comes from Green Valley Farm, just 20 miles away, picked that morning.</p>
      
      <h2>Available Now</h2>
      <p>The spring menu is available for lunch and dinner through June. We recommend making reservations, especially for weekend dining.</p>
    `,
    image: seasonalMenuImg,
    category: "Restaurant News",
    tags: ["seasonal", "menu", "spring"],
    author: "Bella Vista Team",
    date: "2024-03-08",
    readTime: "5 min read"
  },
  {
    id: "knife-skills-mastery",
    title: "Essential Knife Skills Every Home Cook Should Know",
    excerpt: "Master the fundamental knife techniques that will transform your cooking and make meal prep faster and more enjoyable.",
    content: `
      <h2>The Foundation of Cooking</h2>
      <p>Good knife skills are the cornerstone of efficient cooking. Whether you're a beginner or an experienced cook, mastering these techniques will elevate your culinary game.</p>
      
      <h2>Choosing the Right Knife</h2>
      <p>A sharp 8-inch chef's knife is your best friend in the kitchen. It should feel comfortable in your hand and well-balanced. Keep it sharp—a dull knife is more dangerous than a sharp one.</p>
      
      <h2>The Basic Cuts</h2>
      <h3>1. The Dice</h3>
      <p>Perfect for onions, peppers, and tomatoes. Cut your ingredient into planks, then sticks, then cubes. Aim for uniform size for even cooking.</p>
      
      <h3>2. The Julienne</h3>
      <p>Thin matchstick cuts, ideal for stir-fries and salads. Cut into thin planks, stack them, and slice into thin strips.</p>
      
      <h3>3. The Chiffonade</h3>
      <p>Perfect for herbs and leafy greens. Stack leaves, roll them tightly, and slice thin ribbons.</p>
      
      <h2>Safety Tips</h2>
      <ul>
        <li>Keep your fingertips curled under, using your knuckles as a guide</li>
        <li>Use a stable cutting board that won't slip</li>
        <li>Never leave knives in a sink of soapy water</li>
        <li>Always cut away from your body</li>
      </ul>
      
      <h2>Practice Makes Perfect</h2>
      <p>Start slow and focus on consistency. Speed will come naturally with practice. Set aside 15 minutes a day to practice your cuts.</p>
    `,
    image: cookingTipsImg,
    category: "Cooking Tips",
    tags: ["techniques", "cooking tips", "skills"],
    author: "Chef Marco Rossi",
    date: "2024-03-05",
    readTime: "7 min read"
  },
  {
    id: "wine-pairing-guide",
    title: "Wine Pairing 101: A Beginner's Guide",
    excerpt: "Demystifying wine pairing with simple rules and suggestions that will enhance your dining experience.",
    content: `
      <h2>The Art of Wine Pairing</h2>
      <p>Pairing wine with food doesn't have to be intimidating. While there are classic combinations, the most important rule is to drink what you enjoy!</p>
      
      <h2>Basic Principles</h2>
      <h3>Match Intensity</h3>
      <p>Light dishes pair with light wines, heavy dishes with full-bodied wines. A delicate fish wouldn't stand up to a heavy Cabernet.</p>
      
      <h3>Complement or Contrast</h3>
      <p>You can either echo flavors in the dish or provide contrast. A buttery Chardonnay complements creamy pasta, while a crisp Sauvignon Blanc cuts through rich dishes.</p>
      
      <h2>Classic Pairings</h2>
      <ul>
        <li><strong>Pasta with Red Sauce</strong> - Chianti or Sangiovese</li>
        <li><strong>Grilled Fish</strong> - Pinot Grigio or Sauvignon Blanc</li>
        <li><strong>Steak</strong> - Cabernet Sauvignon or Malbec</li>
        <li><strong>Chicken</strong> - Chardonnay or Pinot Noir</li>
        <li><strong>Spicy Dishes</strong> - Riesling or Gewürztraminer</li>
      </ul>
      
      <h2>Don't Forget Sparkling</h2>
      <p>Sparkling wines are incredibly versatile. They pair beautifully with fried foods, salty snacks, and can work throughout an entire meal.</p>
      
      <h2>Regional Pairing</h2>
      <p>When in doubt, pair wines and dishes from the same region. Italian wine with Italian food, French wine with French cuisine—these combinations evolved together for good reason!</p>
    `,
    image: winePairingImg,
    category: "Cooking Tips",
    tags: ["wine", "pairing", "beverages"],
    author: "Sofia Chen",
    date: "2024-03-01",
    readTime: "6 min read"
  },
  {
    id: "restaurant-anniversary",
    title: "Celebrating 5 Years of Bella Vista",
    excerpt: "Join us as we reflect on five incredible years of serving our community and look forward to the future.",
    content: `
      <h2>A Journey of Passion</h2>
      <p>Five years ago, we opened our doors with a simple dream: to create a place where exceptional food, warm hospitality, and community come together. Today, we're celebrating this milestone with gratitude.</p>
      
      <h2>Looking Back</h2>
      <p>From our first service to becoming a beloved neighborhood destination, it's been an incredible journey. We've served over 50,000 guests, hosted countless celebrations, and become part of so many special moments.</p>
      
      <h2>Thank You</h2>
      <p>None of this would be possible without our amazing team, loyal guests, and supportive community. Your trust and enthusiasm have been the foundation of our success.</p>
      
      <h2>Anniversary Celebration</h2>
      <p>Throughout March, we're offering:</p>
      <ul>
        <li>Special anniversary tasting menu</li>
        <li>Complimentary champagne toast for diners</li>
        <li>Live music every Friday and Saturday</li>
        <li>20% off gift certificates</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>We're excited about what's next—a refreshed patio space, new menu items, and continued commitment to excellence. Here's to many more years of creating memorable dining experiences together!</p>
      
      <h2>Join the Celebration</h2>
      <p>Make your reservation today and be part of our anniversary celebration. We can't wait to raise a glass with you!</p>
    `,
    image: anniversaryImg,
    category: "Restaurant News",
    tags: ["anniversary", "celebration", "news"],
    author: "Bella Vista Team",
    date: "2024-02-28",
    readTime: "4 min read"
  }
];

export const categories = [
  "All",
  "Recipes",
  "Chef Interviews",
  "Restaurant News",
  "Cooking Tips"
];

export const allTags = [
  "pasta",
  "italian",
  "cooking tips",
  "chef",
  "interview",
  "behind the scenes",
  "seasonal",
  "menu",
  "spring",
  "techniques",
  "skills",
  "wine",
  "pairing",
  "beverages",
  "anniversary",
  "celebration",
  "news"
];
