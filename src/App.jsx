import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registrarse from './components/Registrarse';
import Inicio from './components/Inicio';
import Recuperar from './components/Recuperar';
import Quienessomos from './components/Quienessomos';
import Contactenos from './components/Contactenos';
import Actualizar from './components/Actualizar';
import Test from './components/Test';
import Resultados from './components/Resultados';
import Login from './components/Login';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Eliminar from './components/Eliminar';
import Editstudent from './components/Editstudent';
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
    path: '/Profile',
    exact: true,
    component: <Profile/>
  },
  {
      path: '/editar/:id',
      exact: true,
      component: <Editstudent/>
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
                          render={() => (
                          <AuthRequired orComponent={route.component} />
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