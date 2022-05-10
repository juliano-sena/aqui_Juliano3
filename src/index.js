import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect ,Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import telaCadastro from './screens/telaCadastro'
import telaLogin from './screens/telaLogin'
import home from './screens/home'
import notFound from './screens/notFound'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={telaLogin} />
        <Route path="/cadastro" component={telaCadastro} /> {/* Cadastro */}
        <Route path="/home" component={home} /> {/* Home */}
        <Route path="/notFound" component={notFound} /> {/* Not Found */}
        <Redirect to="/notFound"/> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>

);

ReactDOM.render(
  routing,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
