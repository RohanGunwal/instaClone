import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PostView from "./components/PostView/PostView";
import CreatePost from "./components/createPost/CreatePost";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={<PostView />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
