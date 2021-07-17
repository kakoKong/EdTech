import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/navBar';
import { LandingPage } from './components/home';
import { Departments } from './components/departments';
import { ModuleList } from './components/moduleList';
import { Module } from './components/dashboard';
import Form from './components/form';
import './App.css';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#20B2AA',
    },
    secondary: {
      main: '#F1B07A',
    },
    background: {
      default: "#F8F8FB"
    }
  },
  shadows: ["none"]
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/departments" exact component={Departments} />
          <Route path="/departments/:id" exact component={ModuleList} />
          <Route path="/module/:id" exact component={Module} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
