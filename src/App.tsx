import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  Services,
  Location,
  History
} from "./page";

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={<Home/ >} 
        />
        <Route 
          path='/about'
          element={<About />}
        >
          <Route
            path='services'
            element={<Services />}
          />
          <Route 
            path='location'
            element={<Location />}
          />
          <Route 
            path='history'
            element={<History />}
          />
        </Route>
        <Route
          path='/events'
          element={<Events />}
        />
        <Route 
          path='/products'
          element={<Products />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<Whoops404 />}
        />
      </Routes>
    </div>
  );
}

export default App;
