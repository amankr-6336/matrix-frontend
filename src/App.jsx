import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import UserPage from "./pages/userPage/UserPage";
import RequireUser from "./utils/RequireUser";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/"
        element={
          <RequireUser>
            <Home />
          </RequireUser>
        }
      />
      <Route
        path="/user/:id"
        element={
          <RequireUser>
            <UserPage />
          </RequireUser>
        }
      />
    </Routes>
  );
}

export default App;
