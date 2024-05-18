import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { PrivateRoute, PublicRoute } from "./Route";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import SearchProducts from "./pages/SearchProducts";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/search-products" element={<SearchProducts />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};
export default App;
