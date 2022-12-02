import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/Create_page/CreateUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import Edit from "./pages/Edit_page/Edit";
import Profile from "./pages/Profile_page/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
