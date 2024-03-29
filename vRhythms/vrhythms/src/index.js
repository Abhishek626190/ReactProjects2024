import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import reportWebVitals from './reportWebVitals';
import ContactForm from './NavBarItems/ContactForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Vrhythms from './NavBarItems/Vrhythms';
import Services from './NavBarItems/Services';
import Approach from './NavBarItems/Approach';
import Insights from './NavBarItems/Insights';
import Carrier from './NavBarItems/Carrier';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRouters=createBrowserRouter([
  {
    path:"/",
    element:<Vrhythms/>
  },
  {
    path:"services",
    element:<Services/>
  },
  {
    path:"approach",
    element:<Approach/>
  },
  {
    path:"insights",
    element:<Insights/>
  },
  {
    path:"contact",
    element:<ContactForm/>
  },
  {
    path:"carrier",
    element:<Carrier/>
  }
])
root.render(
  <React.StrictMode  >
        <RouterProvider router={allRouters} />

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
