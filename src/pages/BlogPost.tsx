import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-playfair mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: "Blog post link copied to clipboard.",
      });
    }
  };

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 animate-fade-in"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-3xl font-bold font-playfair mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                    <Card className="h-full hover-lift overflow-hidden group">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold font-playfair mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
