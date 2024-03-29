import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Files/Navbar";
import About from "./Files/About";
import Products from "./Files/Products";
import Review from "./Files/Review";
import Faq from "./Files/Faq";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Files/Home";
import ContactForm from "./Files/ContactForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "aboutus",
    element: <About />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "review",
    element: <Review />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "contact",
    element: <ContactForm />,
  },
]);
root.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
