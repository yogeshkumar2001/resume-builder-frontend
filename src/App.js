
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import WbAbout from './Components/About/About';
import About from './Components/About/About';
import Skin1 from './Components/Skins/skin1';
import Template from './Components/Template/Template';
import Contact from './Components/forms/Contact';
import Details from './Components/forms/Details';

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/template",
      element: <Template />
    }, {
      path: "/details",
      element: <Details />
    }
  ])
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <nav style={{"--bs-breadcrumb-divider": "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"}} aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
