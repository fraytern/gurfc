import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Roster from './Web Pages/Roster';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Web Pages/Home';
import About from './Web Pages/About';
import ScheduleFunc from './Web Pages/Schedule';



function App(){
  const [backendData, setBackendData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
}


const router = createBrowserRouter ([
  {
    path: "/", 
    //element: <div>Hello World!</div>,
    element: <Home />,
  },

  {
    path: "/about", 
    element: <About />,
  },

  {
    path: "/roster", 
    element: <Roster />,
  },
  
  {
    path: "/schedule", 
    element: <ScheduleFunc />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
