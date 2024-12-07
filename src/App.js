import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepages from "./pages/homepages";
import Login from "./pages/loginHomepages";
import SignUpPages from "./pages/signupHomepages";
import ChatHomePages from "./pages/chatHomepages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPages />} />
        <Route path="/chathome" element={<ChatHomePages/>}/>
      </Routes>
    </Router>
  );
};

export default App;
