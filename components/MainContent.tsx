"use client";

import { Star, Plus, ArrowRight, Filter, Grid, List, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { useState } from "react";

const awsServices = [
  {
    category: "Compute",
    name: "Amazon EC2",
    description: "Resizable compute capacity in the Cloud.",
    availableOnBothPlans: true
  },
  {
    category: "Storage", 
    name: "Amazon S3",
    description: "Secure, durable, and scalable object storage infrastructure.",
    availableOnBothPlans: true,
    highlighted: true
  },
  {
    category: "Database",
    name: "Amazon RDS", 
    description: "Managed Relational Database Service for MySQL, PostgreSQL, MariaDB, or SQL Server.",
    availableOnBothPlans: true
  },
  {
    category: "Machine Learning",
    name: "Amazon SageMaker",
    description: "Build, train, and deploy machine learning models at scale.",
    availableOnBothPlans: true
  },
  {
    category: "Analytics",
    name: "Amazon Athena",
    description: "Query data in S3 using SQL.",
    availableOnBothPlans: true
  },
  {
    category: "Security",
    name: "AWS IAM",
    description: "Manage access to AWS services and resources securely.",
    availableOnBothPlans: true
  },
  {
    category: "Networking",
    name: "Amazon VPC",
    description: "Isolated cloud resources.",
    availableOnBothPlans: true
  },
  {
    category: "Developer Tools",
    name: "AWS CodeCommit",
    description: "Securely host highly scalable private Git repositories.",
    availableOnBothPlans: true
  }
];

const categories = ["All", "Compute", "Storage", "Database", "Machine Learning", "Analytics", "Security", "Networking", "Developer Tools"];

export function MainContent() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedService, setSelectedService] = useState<typeof awsServices[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const itemsPerPage = 6;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const openServiceModal = (service: typeof awsServices[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const filteredServices = selectedCategory === "All" 
    ? awsServices 
    : awsServices.filter(service => service.category === selectedCategory);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-rose-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <button className="hover:text-orange-500 underline transition-colors">AWS</button>
          <span>&gt;</span>
          <button className="hover:text-orange-500 underline transition-colors">AWS Free Tier</button>
        </nav>

        {/* Star bookmark */}
        <div className="flex justify-end mb-4">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <Star className="w-5 h-5 text-gray-400 hover:text-yellow-500 transition-colors" />
          </button>
        </div>

        {/* Legacy Free Tier Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 transition-all hover:bg-blue-100">
          <p className="text-gray-700">
            Did you create an AWS account before July 15th, 2025? Access the Legacy Free Tier
          </p>
        </div>

        {/* Main heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">AWS Free Tier</h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            Gain hands-on experience with AWS products and services, without upfront costs or long-term commitments. 
            With the AWS Free Tier, you can explore and try out AWS services free of charge up to specified limits 
            for each service.
          </p>
        </div>

        {/* Three main action cards - Enhanced responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {/* Sign up card with gradient border */}
          <Card className="group relative overflow-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-white rounded-lg p-4 sm:p-6 h-full flex flex-col">
              <div className="text-sm text-gray-600 mb-3">Getting started</div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Sign up for an AWS account
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 flex-grow">
                Gain instant access to the AWS Free Tier.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white w-full group-hover:bg-orange-500 transition-colors duration-300">
                Create an AWS account
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Console card */}
          <Card className="group p-4 sm:p-6 bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50">
            <div className="text-sm text-gray-600 mb-3">Console</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Start building in the console
            </h2>
            <p className="text-gray-700 mb-6 sm:mb-8">
              Build your production solution quickly and easily once you're ready
            </p>
            <Button variant="outline" className="w-full group-hover:border-orange-500 group-hover:text-orange-500 transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Go to Console
            </Button>
          </Card>

          {/* FAQs card */}
          <Card className="group p-4 sm:p-6 bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 md:col-span-2 lg:col-span-1">
            <div className="text-sm text-gray-600 mb-3">FAQs</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Have more questions?
            </h2>
            <p className="text-gray-700 mb-6 sm:mb-8">
              Learn more with our Frequently Asked Questions.
            </p>
            <Button variant="outline" className="w-full group-hover:border-orange-500 group-hover:text-orange-500 transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              View FAQs
            </Button>
          </Card>
        </div>

        {/* Services filtering and controls */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Displaying {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredServices.length)} ({filteredServices.length})
              </span>
            </div>
          </div>
        </div>

        {/* AWS Services Grid/List - Enhanced with animations */}
        <div className={`mb-16 ${
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" 
            : "space-y-4"
        }`}>
          {paginatedServices.map((service, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white ${
                service.highlighted ? 'ring-2 ring-blue-300 bg-gradient-to-br from-blue-50 to-purple-50' : ''
              } ${viewMode === "list" ? "flex items-center p-4" : "p-4 sm:p-6"}`}
              onClick={() => openServiceModal(service)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`${viewMode === "list" ? "flex-1" : ""}`}>
                <div className={`flex items-start justify-between mb-4 ${viewMode === "list" ? "mb-0" : ""}`}>
                  <div className={viewMode === "list" ? "flex items-center gap-4" : ""}>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">{service.category}</div>
                      {service.availableOnBothPlans && (
                        <Badge variant="outline" className="text-xs mb-2">
                          ✓ Available on both plans
                        </Badge>
                      )}
                    </div>
                    {viewMode === "list" && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                        <p className="text-gray-700 text-sm">{service.description}</p>
                      </div>
                    )}
                  </div>
                  <button className={`p-1 hover:bg-gray-100 rounded transition-colors ${
                    hoveredCard === index ? 'bg-gray-100 rotate-45' : ''
                  }`}>
                    <Plus className="w-4 h-4 text-gray-400 transition-transform" />
                  </button>
                </div>
                
                {viewMode === "grid" && (
                  <>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="link" 
                        className="p-0 text-blue-600 hover:text-blue-700 group-hover:text-orange-500 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          openServiceModal(service);
                        }}
                      >
                        Learn more
                        <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${
                          hoveredCard === index ? 'translate-x-1' : ''
                        }`} />
                      </Button>
                    </div>
                  </>
                )}
              </div>
              
              {viewMode === "list" && (
                <div className="flex items-center gap-2 ml-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openServiceModal(service);
                    }}
                  >
                    Details
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-16">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Learn more about offers section - Enhanced responsiveness */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-8">
                Learn more about our offers
              </h2>
            </div>
            
            <div className="space-y-4">
              {/* Free plan */}
              <Collapsible 
                open={expandedSections.freePlan}
                onOpenChange={() => toggleSection('freePlan')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Free plan</span>
                  <Plus className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedSections.freePlan ? 'rotate-45' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b rounded-b-lg transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    Get started with AWS services at no cost. Includes always free tier, 12 months free, and short-term trials.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Paid plan */}
              <Collapsible 
                open={expandedSections.paidPlan}
                onOpenChange={() => toggleSection('paidPlan')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Paid plan</span>
                  <Plus className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedSections.paidPlan ? 'rotate-45' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b rounded-b-lg transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    Pay only for what you use with no upfront costs or termination fees. Scale up or down based on your needs.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Short-term trial */}
              <Collapsible 
                open={expandedSections.shortTerm}
                onOpenChange={() => toggleSection('shortTerm')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Short-term trial</span>
                  <Plus className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedSections.shortTerm ? 'rotate-45' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b rounded-b-lg transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    Try select AWS services for a limited time period with specific usage limits.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Always free */}
              <Collapsible 
                open={expandedSections.alwaysFree}
                onOpenChange={() => toggleSection('alwaysFree')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Always free</span>
                  <Plus className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedSections.alwaysFree ? 'rotate-45' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b rounded-b-lg transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    These offers do not expire and are available to all AWS customers.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>

        {/* Chat support widgets - Made responsive */}
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 sm:p-4 rounded-lg shadow-lg max-w-xs sm:max-w-sm z-10 hidden sm:block">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xs sm:text-sm">💬</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm">
                Hi, I can connect you with an AWS representative or answer questions you have on AWS.
              </p>
            </div>
            <button className="text-gray-400 hover:text-white">
              ×
            </button>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 sm:right-20 bg-slate-800 text-white p-2 sm:p-3 rounded-full shadow-lg z-10 sm:hidden">
          <div className="relative">
            <span className="text-white">💬</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">1</span>
            </div>
          </div>
        </div>

        {/* Service Detail Modal */}
        <ServiceDetailModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeServiceModal}
        />
      </div>
    </div>
  );
}