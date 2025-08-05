import { Button } from "./ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function FeedbackSection() {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-purple-200 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Did you find what you were looking for today?
        </h2>
        <p className="text-gray-700 mb-8">
          Let us know so we can improve the quality of the content on our pages.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full">
            <ThumbsUp className="w-4 h-4 mr-2" />
            Yes
          </Button>
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full">
            <ThumbsDown className="w-4 h-4 mr-2" />
            No
          </Button>
        </div>
      </div>
    </div>
  );
}