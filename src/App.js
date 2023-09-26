import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login.jsx";
import Signup from "./page/Signup.jsx";
import Mainpage from "./page/Mainpage.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
