
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ToolsPage from "@/pages/ToolsPage";
import ToolDetailPage from "@/pages/ToolDetailPage";
import CategoryPage from "@/pages/CategoryPage";
import RankingPage from "@/pages/RankingPage";
import TutorialsPage from "@/pages/TutorialsPage";
import PromptsPage from "@/pages/PromptsPage";
import WorkflowsPage from "@/pages/WorkflowsPage";
import NewsPage from "@/pages/NewsPage";
import SubmitPage from "@/pages/SubmitPage";
import PrivacyPage from "@/pages/PrivacyPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tool/:id" element={<ToolDetailPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/prompts" element={<PromptsPage />} />
        <Route path="/workflows" element={<WorkflowsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}
