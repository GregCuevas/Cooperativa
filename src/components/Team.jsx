import { Facebook, Linkedin, Instagram } from "lucide-react";
import Maria from "../assets/maria.jpg";
import Man from "../assets/man.png";
import Woman from "../assets/woman.png";
const teamMembers = [
  {
    name: "Sergio Montanari",
    role: "Presidente",
    image: Man,
    cargo: "Consejo de Administración",
    bgColor: "",
  },
  {
    name: "Edison Rodríguez",
    role: "Vicepresidente",
    image: Man,
    cargo: "Consejo de Administración",
    bgColor: "",
  },
  {
    name: "María García",
    role: "Secretaria",
    image: Maria,
    cargo: "Consejo de Administración",
    bgColor: "bg-gray-100",
  },
  {
    name: "Anlly Marte",
    role: "Tesorera",
    image: Woman,
    cargo: "Consejo de Administración",
    bgColor: "",
  },
  {
    name: "Zulinel Brito ",
    role: "Vocal",
    image: Woman,
    cargo: "Consejo de Administración",
    bgColor: "",
  },
  {
    name: "Cristian Alberto ",
    role: "Primer suplente",
    image: Man,
    cargo: "Consejo de Administración",
    bgColor: "",
  },
  {
    name: "Juan Valentín ",
    role: "Segundo suplente",
    image: Man,
    cargo: "Consejo de Administración",
    bgColor: "",
  },
  {
    name: "Tomas Amauris",
    role: "Presidente",
    image: Man,
    cargo: "Consejo de Vigilancia",
    bgColor: "",
  },
  {
    name: "María Salcedo",
    role: "Secretaria",
    image: Woman,
    cargo: "Consejo de Vigilancia",
    bgColor: "",
  },
  {
    name: "Zunilda Altagracia ",
    role: "Vocal",
    image: Woman,
    cargo: "Consejo de Vigilancia",
    bgColor: "",
  },
  {
    name: "Víctor Álvarez ",
    role: "Primer suplente",
    image: Man,
    cargo: "Consejo de Viligancia",
    bgColor: "",
  },
  {
    name: "Stefano Andreani",
    role: "Segundo suplente",
    image: Man,
    cargo: "Consejo de Vigilancia",
    bgColor: "",
  },
  {
    name: "Natalya Kosnikova",
    role: "Presidente",
    image: Woman,
    cargo: "Consejo de Crédito",
    bgColor: "",
  },
  {
    name: "José Heredia",
    role: "Secretario",
    image: Man,
    cargo: "Consejo de Crédito",
    bgColor: "",
  },
  {
    name: "Rafael Bienvenido",
    role: "Vocal",
    image: Man,
    cargo: "Consejo de Crédito",
    bgColor: "",
  },
  {
    name: "Junior Rafael",
    role: "Suplente",
    image: Man,
    cargo: "Consejo de Crédito",
    bgColor: "",
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
              <img src={member.image} alt="" className="object-cover " />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="mb-4 text-gray-600">{member.cargo}</p>
            <p className="mb-4 text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
