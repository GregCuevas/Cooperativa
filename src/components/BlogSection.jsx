import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    icon: "../src/assets/tele.png",
    category: "Category",
    readTime: "4 min. read",
    title: "Telecomunicaciones",
    description:
      "We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
  },
  {
    icon: "../src/assets/graduate.jpg",
    category: "Category",
    readTime: "4 min. read",
    title: "Educación",
    description:
      "We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
  },
  {
    icon: "../src/assets/money.jpg",
    category: "Category",
    readTime: "4 min. read",
    title: "Financiamiento",
    description:
      "We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
  },
];

export default function BlogSection() {
  return (
    <section className="flex items-center justify-center w-full px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
            Conectamos áreas rurales con innovación digital
          </h2>
          <p>
            Impulsamos telecomunicaciones, educación y financiación para su
            desarrollo.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="relative flex flex-col space-y-2 group">
              <div className="flex items-center justify-center h-48 overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={post.icon}
                  alt="Blog post icon"
                  className="object-cover object-bottom w-full h-full"
                />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="font-medium">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-500">{post.description}</p>
              <Button
                variant="link"
                className="h-auto p-0 font-semibold text-[#09bc8a] "
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
