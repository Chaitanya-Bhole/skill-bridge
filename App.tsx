import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import RoadmapPage from "@/pages/RoadmapPage";

export default function App() {
  return 
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/roadmap/:id" component={RoadmapPage} />
      <Route>
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center flex-col gap-4">
          <p className="text-green-400 text-2xl font-bold">404 — Page not found</p>
          <a href="/" className="text-gray-500 hover:text-green-400 text-sm transition-colors">
            ← Go Home
          </a>
        </div>
      </Route>
    </Switch>
  ;
}