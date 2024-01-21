
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router,Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import WbAbout from './Components/About/About';
import About from './Components/About/About';

function App() {
  let router  = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ])
  return (
    <div className="App">
      <Navbar></Navbar>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
