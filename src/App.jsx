import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CategoryPage from "./pages/CategoryPage"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/details/:postId" element={<DetailsPage/>}/> 
        <Route path="/category/:categoryId" element={<CategoryPage/>}/> 
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
