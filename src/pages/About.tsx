import Navbar from "../components/Navbar";
import { Target, Compass } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-xl font-medium text-gray-800 mb-4">
              "Your problem, total solution"
            </p>
            <p className="text-gray-600">
              We strive to be the leading provider of comprehensive IT solutions,
              transforming challenges into opportunities for our clients.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Compass className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-xl font-medium text-gray-800 mb-4">
              "To provide modern innovative systems and add value to businesses"
            </p>
            <p className="text-gray-600">
              We are committed to delivering cutting-edge technology solutions that
              empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Company Description */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            MyDot IT Solutions is a leading technology consulting firm specializing
            in delivering innovative IT solutions to businesses of all sizes. With
            our expertise in cloud computing, cybersecurity, software development,
            and more, we help organizations navigate the complex digital landscape
            and achieve their business objectives.
          </p>
          <p className="text-gray-600">
            Our team of experienced professionals is dedicated to providing
            exceptional service and creating lasting partnerships with our clients.
            We believe in continuous innovation and staying ahead of the latest
            technology trends to deliver the best possible solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;