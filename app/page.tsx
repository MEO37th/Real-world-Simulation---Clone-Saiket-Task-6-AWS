import { Header } from "../components/Header";
import { FreeTierNav } from "../components/FreeTierNav";
import { MainContent } from "../components/MainContent";
import { FeedbackSection } from "../components/FeedbackSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FreeTierNav />
      <MainContent />
      <FeedbackSection />
      <Footer />
    </div>
  );
}