import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Protfolio';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([

    {path:"" , element :<Layout/>, children:[

      { index: true , element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: < About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contact", element: <Contact /> },
      {path:'*',element:<div>
        <h1>404 not found</h1>
      </div>}
    ]}
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;