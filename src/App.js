import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import LandingPage from "./Page/LandingPage/LandingPage";
import { route } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
