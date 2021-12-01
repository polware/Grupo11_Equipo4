import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Registrarse from './components/Registrarse';
import Recuperar from './components/Recuperar';
import Quienessomos from './components/Quienessomos';
import Contactenos from './components/Contactenos';
import Profile from './components/Profile';
import Actualizar from './components/Actualizar';
import Eliminar from './components/Eliminar';
import Test from './components/Test';
import Resultados from './components/Resultados';
import Login from './components/Login';
import Registroadm1n from './components/Registroadm1n';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import AuthRequired from "./AuthRequired"

const publicRoutes = [
  {
      path: "/",
      exact: true,
      component: Inicio
  },
  {
      path: "/Quienessomos",
      exact: true,
      component: Quienessomos
  },
  {
    path: "/Contactenos",
    exact: true,
    component: Contactenos
  },
  {
    path: "/Login",
    exact: true,
    component: Login
  },
  {
    path: "/Recuperar",
    exact: true,
    component: Recuperar
  },
  {
    path: "/Registrarse",
    exact: true,
    component: Registrarse
  },  
];

const authRequiredRoutes = [
  {
    path: '/Admin',
    exact: true,
    component: <Admin/>
  },
  {
    path: "/Registroadm1n",
    exact: true,
    component: <Registroadm1n/>
  },
  {
    path: '/Profile',
    exact: true,
    component: <Profile/>
  },
  {
    path: '/Test',
    exact: true,
    component: <Test/>
  },
  {
    path: '/Resultados',
    exact: true,
    component: <Resultados/>
  },
  {
    path: '/Actualizar',
    exact: true,
    component: <Actualizar/>
  },
  {
    path: '/Eliminar',
    exact: true,
    component: <Eliminar/>
  },
]

const pathsForLayout = routes => routes.map(route => route.path)

function App() {
  return (
    <div>
    <Router basename ='/'>
      <Navbar/>
      <Switch>
            <Route exact path={pathsForLayout(publicRoutes)}>
                <Switch>
                  {
                      publicRoutes.map((route,index) => (
                          <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                          />
                      ))
                  }
                </Switch>
            </Route>
            <Route exact path={pathsForLayout(authRequiredRoutes)}>
              <Switch>
                {
                    authRequiredRoutes.map((route,index) => (
                        <Route
                          key={index}
                          exact={route.exact}
                          path={route.path}
                          render={(props) => (
                            <AuthRequired 
                                {...props}
                                orComponent={route.component}
                            />
                          )}
                        />
                    ))
                }
              </Switch>
            </Route>
            <Route component={NotFound} /> {/* Error 404 page */}
      </Switch>
      <Footer/>
    </Router>
  </div>    
  );
}

export default App;