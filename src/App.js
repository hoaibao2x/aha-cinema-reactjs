import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FilmsList from './pages/Admins/QL.Films/FilmsList';

export const history = createBrowserHistory();

function App() {
  return (
    <FilmsList />
    // <Router history={history}>
    //   <Switch>
    //     {/* User Route */}


    //     {/* Admin Route */}


    //     {/* Default Route */}
    //   </Switch>
    // </Router>
  );
}

export default App;