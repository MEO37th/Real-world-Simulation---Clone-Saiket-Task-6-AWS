import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X, ExternalLink, Star, Clock, Users } from "lucide-react";

interface ServiceDetailModalProps {
  service: {
    category: string;
    name: string;
    description: string;
    availableOnBothPlans: boolean;
    highlighted?: boolean;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const serviceDetails = {
  "Amazon EC2": {
    fullDescription: "Amazon Elastic Compute Cloud (Amazon EC2) provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.",
    features: ["Virtual servers in the cloud", "Pay only for what you use", "Scale up or down instantly", "Multiple instance types"],
    freeTierLimits: "750 hours per month for 12 months",
    useCases: ["Web hosting", "Application development", "Data processing", "Enterprise applications"],
    pricing: "Starting at $0.0058 per hour"
  },
  "Amazon S3": {
    fullDescription: "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
    features: ["99.999999999% (11 9's) of durability", "Unlimited storage", "Web-scale performance", "Comprehensive security"],
    freeTierLimits: "5 GB of storage for 12 months",
    useCases: ["Backup and restore", "Data archiving", "Content distribution", "Big data analytics"],
    pricing: "Starting at $0.023 per GB"
  }
  // Add more service details as needed
};

export function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const details = serviceDetails[service.name as keyof typeof serviceDetails];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {service.category}
                </Badge>
                {service.availableOnBothPlans && (
                  <Badge variant="outline" className="text-xs text-green-600">
                    ✓ Available on both plans
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-2xl">{service.name}</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <DialogDescription className="text-base leading-relaxed">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        {details && (
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2 text-orange-500" />
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">{details.fullDescription}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  Free Tier Limits
                </h3>
                <p className="text-sm text-gray-700">{details.freeTierLimits}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-600" />
                  Pricing
                </h3>
                <p className="text-sm text-gray-700">{details.pricing}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Common Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                {details.useCases.map((useCase, index) => (
                  <Badge key={index} variant="secondary">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                Get Started
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="flex-1">
                View Documentation
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}