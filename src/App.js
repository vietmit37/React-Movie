import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { renderRoutes } from "./routes";
import { Suspense } from "react";
import Loader from "components/Loader";
import LoginPage from "pages/LoginPage";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
