import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/homePage/HomePage";
import Comments from "./pages/comments/Comments";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/comment" element={<Comments />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
