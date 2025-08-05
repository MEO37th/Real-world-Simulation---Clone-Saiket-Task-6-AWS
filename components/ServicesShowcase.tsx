import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Database, Cloud, Shield, Zap, Globe, Code } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Amazon RDS",
    description: "Set up, operate, and scale a relational database in the cloud with just a few clicks.",
    category: "Database"
  },
  {
    icon: Cloud,
    title: "Amazon EC2",
    description: "Secure and resizable compute capacity for virtually any workload.",
    category: "Compute"
  },
  {
    icon: Shield,
    title: "AWS Security Hub",
    description: "Centrally manage security findings and automate security checks.",
    category: "Security"
  },
  {
    icon: Zap,
    title: "AWS Lambda",
    description: "Run code without thinking about servers or clusters.",
    category: "Serverless"
  },
  {
    icon: Globe,
    title: "Amazon CloudFront",
    description: "Fast, highly secure and programmable content delivery network.",
    category: "Networking"
  },
  {
    icon: Code,
    title: "AWS CodePipeline",
    description: "Automate continuous delivery pipelines for fast and reliable updates.",
    category: "Developer Tools"
  }
];

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Explore AWS Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, AWS provides the tools and services you need to build, deploy, and scale applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-sm text-orange-500 font-medium">{service.category}</span>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <button className="mt-4 text-orange-500 hover:text-orange-600 font-medium">
                    Learn more →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}