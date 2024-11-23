import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Admin from "./components/Admin";
import AuthProvider from "./components/Auth";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Matchdoesnot from "./components/Matchdoesnot";
import Product1 from "./components/Product1";
import NewProduct from "./components/NewProduct";
import FeaturedProducts from "./components/FeaturedProducts";
import User from "./components/User";
import UsersDetails from "./components/UsersDetails";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<LazyAbout />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="products" element={<Product1 />}>
              <Route index element={<FeaturedProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProduct />} />
            </Route>
            <Route path="users" element={<User />}>
              <Route path=":usersId" element={<UsersDetails />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Matchdoesnot />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
