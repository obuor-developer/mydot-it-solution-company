import Navbar from "../components/Navbar";
import { ArrowRight, Cloud, Shield, Code, Database, Brain } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative IT Solutions for Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Empowering businesses with cutting-edge technology solutions
          </p>
          <a
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Computing",
    description: "Scalable cloud solutions to modernize your infrastructure",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity",
    description: "Protect your business with advanced security measures",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your needs",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data Services",
    description: "Transform your data into actionable insights",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI & Machine Learning",
    description: "Leverage AI to automate and optimize processes",
  },
];

export default Home;