import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;