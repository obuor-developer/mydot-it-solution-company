import Navbar from "../components/Navbar";

const Clients = () => {
  const clients = [
    {
      name: "Tech Corp",
      logo: "https://via.placeholder.com/150",
      description: "Leading technology solutions provider"
    },
    {
      name: "Data Systems Inc",
      logo: "https://via.placeholder.com/150",
      description: "Enterprise data management solutions"
    },
    {
      name: "Cloud Solutions Co",
      logo: "https://via.placeholder.com/150",
      description: "Cloud infrastructure specialists"
    },
    {
      name: "Security Plus",
      logo: "https://via.placeholder.com/150",
      description: "Cybersecurity solutions provider"
    },
    {
      name: "AI Innovations",
      logo: "https://via.placeholder.com/150",
      description: "Artificial intelligence research and development"
    },
    {
      name: "DevOps Pro",
      logo: "https://via.placeholder.com/150",
      description: "Development operations excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-center mb-16">Our Clients</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div key={client.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{client.name}</h3>
              <p className="text-gray-600 text-center">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;