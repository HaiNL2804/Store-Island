import { Navigate, Route, Routes } from "react-router-dom";

import LayoutWebsite from "./pages/website/layout";
import Homepage from "./pages/website/home/page";
import Products from "./pages/website/shop/page";
import Detail from "./pages/website/deatail/page";
import AboutPage from "./pages/website/about/page";
import ContactPage from "./pages/website/contact/contact";
import SignupPage from "./auth/signup/page";
import LoginPage from "./auth/login/page";
import AdminLayout from "./pages/admin/layout";
import DashboardPage from "./pages/admin/dashboard/page";
import ListProduct from "./pages/admin/product/ListProduct";
import NotFound from "./pages/website/404/page";
import AddProduct from "./pages/admin/product/AddProduct";
import EditProduct from "./pages/admin/product/EditProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWebsite />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Products />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="product" element={<ListProduct />} />
        <Route path="product/add" element={<AddProduct />} />
        <Route path="product/edit/:id" element={<EditProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

// import React from "react";
// import LayoutWebsite from "./pages/website/layout";
// import Detail from "./pages/website/deatail/page";
// import NotFound from "./pages/website/404/page";
// import { Route, Routes, useRoutes, Outlet } from "react-router-dom";
// import Homepage from "./pages/website/home/page";
// import Login from "./pages/website/login/page";
// import Register from "./auth/register/page";
// import AboutPage from "./pages/website/about/page";
// import ContactPage from "./pages/website/contact/contact";
// import Products from "./pages/website/shop/page";
// import Create from "./pages/website/create/page";

// const routerConfig = [
//   {
//     path: "/",
//     element: <LayoutWebsite />,
//     children: [
//       {
//         path: "",
//         element: <Homepage />,
//       },
//       {
//         path: "shop",
//         element: <Products />,
//       },
//       {
//         path: "/products/:id",
//         element: <Detail />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "about",
//         element: <AboutPage />,
//       },
//       {
//         path: "contact",
//         element: <ContactPage />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     children: [
//       { path: "", element: <div>Admin Dashboard</div> },
//       { path: "products", element: <div>Admin Products</div> },
//       { path: "users", element: <div>Admin Users</div> },
//       { path: "create", element: <Create /> },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ];

// const App = () => {
//   const routes = useRoutes(routerConfig);
//   return <div>{routes}</div>;
// };

// export default App;
