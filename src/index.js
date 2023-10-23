import React from 'react';
import { createRoot } from 'react-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './redux/store'
import OrderForm from './components/orderForm';
import OrderQueue from './components/orderQueue';
// Importing the Bootstrap CSS

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> {/* this is default layout loading */}
      <Route path='' element={<OrderForm />} /> {/* This component is for menu list and order form where we can place the orders */}
      <Route path='order-queue' element={<OrderQueue />} /> {/* This component is for beverage queue is comprised of three lists: */}
    </Route>
  )
);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>
)