import { Facebook, Twitter, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Víctor Álvarez",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Sergio Montanari",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-yellow-100",
    socialLinks: {
      facebook: "https://facebook.com/james2",
      twitter: "https://twitter.com/james2",
      instagram: "https://instagram.com/james2",
    },
  },
  {
    name: "Cristian Flores",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-purple-100",
    socialLinks: {
      facebook: "https://facebook.com/james3",
      twitter: "https://twitter.com/james3",
      instagram: "https://instagram.com/james3",
    },
  },
  {
    name: "Maria I. Garcia",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-pink-100",
    socialLinks: {
      facebook: "https://facebook.com/james4",
      twitter: "https://twitter.com/james4",
      instagram: "https://instagram.com/james4",
    },
  },
  {
    name: "Francisco Payam",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Edison Rodriguez",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Tomas Martinez",
    role: "Administración",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Zulinel Brito",
    role: "Vigilancia",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Julio Baez",
    role: "Vigilancia",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Víctor Durán",
    role: "Vigilancia",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Anlly Marte",
    role: "Crédito",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Maria Salcedo",
    role: "Crédito",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
  {
    name: "Juan S. Cabrera",
    role: "Educación y Beca",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
    socialLinks: {
      facebook: "https://facebook.com/james1",
      twitter: "https://twitter.com/james1",
      instagram: "https://instagram.com/james1",
    },
  },
];

const Team = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center">Nuestro Equipo</h1>
      <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
        La gestión cooperativa se basa en liderazgo participativo, decisiones
        democráticas, manejo equitativo de recursos y enfoque en el bienestar
        comunitario.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-48 h-48 rounded-full overflow-hidden mb-4 ${member.bgColor}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="mb-4 text-gray-600">{member.role}</p>
            <div className="flex space-x-4">
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Twitter size={20} />
              </a>
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
