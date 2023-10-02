import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login.jsx";
import Signup from "./page/Signup.jsx";
import Root from "./page/Root.jsx";
import Mainpage from "./page/Mainpage.jsx";
import { AppProvider } from "./context/AppProvider.jsx";

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
            {<Route path="/" element={<Root />} />}
            <Route path="/login" element={<Login />}/>
            <Route path="/mainpage" element={<Mainpage/>}/>
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;