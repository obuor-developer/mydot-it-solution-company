import Navbar from "../components/Navbar";
import {
  Cloud,
  Shield,
  Lightbulb,
  Code,
  GitBranch,
  Database,
  Brain,
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Computing Services",
    description: "Transform your business with scalable cloud solutions",
    features: [
      "Cloud migration & deployment",
      "Infrastructure optimization",
      "Cloud security & compliance",
      "24/7 monitoring & support",
    ],
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Cybersecurity Services",
    description: "Protect your assets with advanced security measures",
    features: [
      "Security assessments",
      "Threat detection & response",
      "Data protection",
      "Security training",
    ],
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "IT Consulting & Strategy",
    description: "Expert guidance for your digital transformation",
    features: [
      "Technology roadmap",
      "Digital transformation",
      "IT governance",
      "Risk management",
    ],
  },
  {
    icon: <GitBranch className="h-10 w-10" />,
    title: "DevOps & Agile Development",
    description: "Streamline your development processes",
    features: [
      "CI/CD implementation",
      "Infrastructure as code",
      "Containerization",
      "Automation solutions",
    ],
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Software Development",
    description: "Custom software solutions for your needs",
    features: [
      "Custom application development",
      "Legacy system modernization",
      "API integration",
      "Quality assurance",
    ],
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Data Services",
    description: "Transform your data into insights",
    features: [
      "Data analytics",
      "Business intelligence",
      "Data warehousing",
      "Data governance",
    ],
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI & Machine Learning",
    description: "Leverage AI to optimize your business",
    features: [
      "Predictive analytics",
      "Process automation",
      "Natural language processing",
      "Computer vision solutions",
    ],
  },
];

export default Services;