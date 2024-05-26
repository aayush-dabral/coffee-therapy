import Community from "./Pages/Community/Community";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import Learn from "./Pages/Learn/Learn";
import Products from "./Pages/Products/Products";

const routes = [
  {
    exact: true,
    isPublic: true,
    path: "/",
    name: "home",
    element: ( <Home /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/learn",
    name: "learn",
    element: ( <Learn /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/community",
    name: "community",
    element: ( <Community /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/products",
    name: "products",
    element: ( <Products /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/gallery",
    name: "gallery",
    element: ( <Gallery /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/contact",
    name: "contact",
    element: ( <Contact /> ),
  },
];

export default routes;