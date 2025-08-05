import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const solutions = [
  {
    title: "Machine Learning & AI",
    description: "Build, train, and deploy ML models at scale",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    stats: "40% faster training"
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    stats: "90% cost reduction"
  },
  {
    title: "Web Applications",
    description: "Build scalable web and mobile applications",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    stats: "99.9% uptime"
  }
];

const customerStories = [
  {
    company: "Netflix",
    logo: "N",
    story: "Netflix uses AWS to deliver streaming video to millions of customers worldwide, scaling from zero to massive global scale.",
    metric: "190+ countries served"
  },
  {
    company: "Airbnb", 
    logo: "A",
    story: "Airbnb leverages AWS to handle massive traffic spikes and deliver personalized experiences to travelers globally.",
    metric: "4M+ hosts supported"
  },
  {
    company: "Spotify",
    logo: "S", 
    story: "Spotify uses AWS to power music recommendations and deliver high-quality audio to millions of listeners.",
    metric: "400M+ active users"
  }
];

export function Solutions() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Solutions */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600">
              Discover how organizations are using AWS to transform their business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-green-600">{solution.stats}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <button className="text-orange-500 hover:text-orange-600 font-medium">
                    Explore solutions →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Stories */}
        <div className="bg-gray-900 text-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">
              See how companies are innovating with AWS
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{story.logo}</span>
                  </div>
                  <h3 className="text-xl font-bold">{story.company}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{story.story}</p>
                <div className="text-orange-400 font-medium">{story.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}