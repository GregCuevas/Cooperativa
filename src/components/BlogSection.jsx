import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Cuenta from "../assets/ahorro.jpg";
import Financi from "../assets/financiamiento.jpg";
import Tari from "../assets/tarifario.jpg";
const blogPosts = [
  {
    icon: Cuenta,
    category: "Prosperidad",
    link: "/cuentas-de-ahorro/",
    title: "Cuentas de Ahorro",
    description:
      "Ahorra con nosotros y disfruta de tasas competitivas y beneficios exclusivos diseñados para ti.",
  },
  {
    icon: Tari,
    category: "Beneficios",
    link: "/tarifario/",
    title: "Tarifarios",
    description:
      "Descubre nuestras tarifas y opciones convenientes. ¡Precios competitivos para tus necesidades!",
  },
  {
    icon: Financi,
    category: "Oportunidad",
    link: "/financiamiento/",
    title: "Financiamiento",
    description:
      "Ofrecemos opciones de financiamiento adaptadas a tus necesidades personales y empresariales.",
  },
];
const BlogSection = () => {
  return (
    <section className="flex items-center justify-center w-full px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-center text-gray-700 sm:text-5xl">
            Conectamos áreas rurales con innovación digital
          </h2>
          <p className="text-lg text-center text-slate-600">
            Impulsamos telecomunicaciones, educación y financiación para su
            desarrollo.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col space-y-2 group">
              <div className="flex items-center justify-center h-48 overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={post.icon}
                  alt="Blog post icon"
                  className="object-cover object-top "
                />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="text-[#f8961e]">•</span>
                <span className="font-medium">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-500">{post.description}</p>
              <Link to={post.link}>
                <Button
                  variant="link"
                  className="h-auto p-0 font-semibold text-black "
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
