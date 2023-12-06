import { Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import UserPage from "./pages/Home/UserPage";
import UpdateUser from "./components/UpdateUser";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserPage />}></Route>
      <Route path="/create" element={<CreateUser />}></Route>
      <Route path="/update/:id" element={<UpdateUser />}></Route>
    </Routes>
  );
}
