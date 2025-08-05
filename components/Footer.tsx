import { ChevronUp, Twitter, Facebook, Linkedin, Instagram, Twitch, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "Learn About AWS",
    links: [
      "What Is AWS?",
      "What Is Cloud Computing?",
      "AWS Inclusion, Diversity & Equity",
      "What Is DevOps?",
      "What Is a Container?",
      "What Is a Data Lake?",
      "AWS Cloud Security",
      "What's New",
      "Blogs",
      "Press Releases"
    ]
  },
  {
    title: "Resources for AWS",
    links: [
      "Getting Started",
      "Training and Certification",
      "AWS Solutions Library",
      "Architecture Center",
      "Product and Technical FAQs",
      "Analyst Reports",
      "AWS Partners"
    ]
  },
  {
    title: "Developer Resources",
    links: [
      "Developer Center",
      "SDKs & Tools",
      "AWS CLI",
      ".NET on AWS",
      "Python on AWS",
      "Java on AWS",
      "PHP on AWS",
      "JavaScript on AWS"
    ]
  },
  {
    title: "Help",
    links: [
      "Contact Us",
      "Get Expert Help",
      "File a Support Ticket",
      "AWS re:Post",
      "Knowledge Center",
      "AWS Support Overview",
      "Legal",
      "AWS Accessibility"
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Back to top */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <span className="relative">
              Back to top
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4 border-b border-orange-500 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="group text-gray-300 hover:text-white text-sm transition-colors duration-300 text-left">
                      <span className="relative">
                        {link}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-silver group-hover:w-full transition-all duration-300 ease-out"></span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media and legal */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="text-2xl font-bold">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-sm">aws</span>
              </div>
              <div className="flex space-x-4">
                <button className="group text-gray-400 hover:text-white transition-all duration-300">
                  <div className="relative">
                    <Twitter className="w-5 h-5" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </div>
                </button>
                <button className="group text-gray-400 hover:text-white transition-all duration-300">
                  <div className="relative">
                    <Facebook className="w-5 h-5" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </div>
                </button>
                <button className="group text-gray-400 hover:text-white transition-all duration-300">
                  <div className="relative">
                    <Linkedin className="w-5 h-5" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </div>
                </button>
                <button className="group text-gray-400 hover:text-white transition-all duration-300">
                  <div className="relative">
                    <Instagram className="w-5 h-5" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </div>
                </button>
                <button className="group text-gray-400 hover:text-white transition-all duration-300">
                  <div className="relative">
                    <Twitch className="w-5 h-5" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </div>
                </button>
                <button className="group text-gray-400 hover:text-white transition-all duration-300">
                  <div className="relative">
                    <Youtube className="w-5 h-5" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-gray-400">
              <button className="group hover:text-white transition-colors duration-300">
                <span className="relative">
                  Privacy
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                </span>
              </button>
              <button className="group hover:text-white transition-colors duration-300">
                <span className="relative">
                  Site terms
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                </span>
              </button>
              <button className="group hover:text-white transition-colors duration-300">
                <span className="relative">
                  Cookie Preferences
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></span>
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <p className="mb-2">
              Amazon is an Equal Opportunity Employer: Minority / Women / Disability / Veteran / Gender Identity / Sexual Orientation / Age.
            </p>
            <p>
              © 2025, Amazon Web Services, Inc. or its affiliates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}