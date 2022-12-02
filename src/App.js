import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/Create_page/CreateUser";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Dashboard/>}/>
      <Route path="/create" element={<CreateUser/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
