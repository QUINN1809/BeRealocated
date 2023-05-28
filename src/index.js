import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Nav from './content/Nav';
import Profile from './pages/Profile'
import MyTask from './pages/MyTask';
import GPS from './content/gps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route path="gps" element={<GPS />}/>
                        <Route path="home" element={<Home />}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="Explore" element={<Explore />} />
                        <Route index element={<MyTask />} />
                    </Route>
                </Routes>
            </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
