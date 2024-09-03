import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

root.render(<RouterProvider router={router}/>)



