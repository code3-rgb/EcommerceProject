import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"


import { Auth } from "./Components/Auth/index";
import { Login } from './Components/Login'
import { Home } from "./Components/Home/index";
import { Admin } from "./Components/Admin/admin";
import { UploadProduct } from "./UploadProduct";
import { ChangePassword } from "./Components/ChangePassword";
import { Success } from "./Components/PaymentStatus/success";
import { Cancel } from "./Components/PaymentStatus/cancel";
import { About } from "./Components/About/about"

function App() {



  return (
 

      <Router>


        <Routes>

          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} />
          <Route path="/passwordChange" element={<ChangePassword />} />
          <Route path="/master" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/firebase" element={<UploadProduct/>} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

        </Routes>

      </Router>



  );
}

export default App;
