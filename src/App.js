import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login.js";
import Signup from "./page/Signup.js";
import Root from "./page/Root.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        {<Route path="/" element={<Root />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
