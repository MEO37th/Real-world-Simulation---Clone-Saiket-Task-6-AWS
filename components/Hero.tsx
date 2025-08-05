import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl leading-tight">
              Build on the Most Trusted Cloud
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're looking for compute power, database storage, content delivery, 
              or other functionality, AWS has the services to help you build sophisticated 
              applications with increased flexibility, scalability and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                <Play className="w-5 h-5 mr-2" />
                Watch Introduction
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-2xl font-bold">200+</p>
                <p className="text-sm text-gray-300">Featured Services</p>
              </div>
              <div>
                <p className="text-2xl font-bold">190</p>
                <p className="text-sm text-gray-300">Countries & Territories</p>
              </div>
              <div>
                <p className="text-2xl font-bold">99%</p>
                <p className="text-sm text-gray-300">Availability</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
              alt="Cloud computing visualization"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}