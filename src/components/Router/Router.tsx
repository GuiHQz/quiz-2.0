import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "features/Home";
import { PageOne } from "features/questionPages/pages/PageOne";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />

        <Route 
          path="/page-one" 
          element={<PageOne />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
