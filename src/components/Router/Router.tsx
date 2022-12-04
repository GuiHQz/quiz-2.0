import { Home } from "features/Home";
import { PageOne } from "features/questionPages/pages/PageOne";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageObjectiveQuestions } from "features/questionPages/pages/PageObjective";

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

        <Route 
          path="/page-two"
          element={<PageObjectiveQuestions />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
