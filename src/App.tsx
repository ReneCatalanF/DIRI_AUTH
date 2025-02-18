import { useState } from 'react'
import { MenuItem } from './entites/entities';
//import Foods from './components/Foods';
import React from 'react';
import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import AdminRoute from './routes/AdminRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';
//import Foods from './components/Foods';
import Menus from './components/Menu';
import { Login } from './components/Login';
import Register from './components/Register';
import WelcomeComp from './components/Welcome';
import Foods from './components/Foods';
//import Menus from './components/Menu';
//import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const foodItemsContext = React.createContext<MenuItem[]>([]);

/*
function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const [menuItems] = useState<MenuItem[]>([
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito - … y mayonesa",
      "price": 24,
      "image": "Hamburg.jpg"
    },
    {
      "id": 2,
      "name": "Hamburguesa de Vacuno",
      "quantity": 50,
      "desc": "Hamburguesa de Vacuno frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 3,
      "name": "Hamburguesa de Cerdo",
      "quantity": 60,
      "desc": "Hamburguesa de Cerdo frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 4,
      "name": "Hamburguesa de Hormiga",
      "quantity": 70,
      "desc": "Hamburguesa de Hormiga frita - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
  ]);

  return (
    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-menu">
            <li className={activeTab === 'menu' ? 'active' : ''}>
              <Link to="#" onClick={() => setActiveTab('menu')}>Menú</Link>
            </li>
            <li className={activeTab === 'foods' ? 'active' : ''}>
              <Link to="#" onClick={() => setActiveTab('foods')}>Pedir Comida</Link>
            </li>
          </ul>
        </nav>

        <h3 className="title">Comida Rápida Online</h3>

        {activeTab === 'menu' && <Menus />}
        {activeTab === 'foods' && <Foods />}
      </div>
    </foodItemsContext.Provider>
  )
}
*/

const App: React.FC = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito - … y mayonesa",
      "price": 24,
      "image": "Hamburg.jpg"
    },
    {
      "id": 2,
      "name": "Hamburguesa de Vacuno",
      "quantity": 50,
      "desc": "Hamburguesa de Vacuno frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 3,
      "name": "Hamburguesa de Cerdo",
      "quantity": 60,
      "desc": "Hamburguesa de Cerdo frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 4,
      "name": "Hamburguesa de Hormiga",
      "quantity": 70,
      "desc": "Hamburguesa de Hormiga frita - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
  ]);
  return (
    <foodItemsContext.Provider value={menuItems}>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<WelcomeComp/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<ProtectedRoute><Foods /></ProtectedRoute>} />
              <Route path="/admin" element={<AdminRoute><Menus /></AdminRoute>} />
              <Route path="*" element={<WelcomeComp />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </foodItemsContext.Provider>
  );
};
export default App
