import { HashRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Login from "./page/Login.jsx";
import Signup from "./page/Signup.jsx";
import Mainpage from "./page/Mainpage.jsx";
=======
import Login from "./page/Login.js";
import Signup from "./page/Signup.js";
import Root from "./page/Root.jsx";
>>>>>>> 1b88c8137914cc0d6038c882b93c35b811ffba89

function App() {
  return (
    <HashRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Mainpage/>}/>
=======
        {<Route path="/" element={<Root />} />}
>>>>>>> 1b88c8137914cc0d6038c882b93c35b811ffba89
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
