import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminFilm from './pages/Admins/QL.Films/AdminFilm';
import AddFilm from './pages/Admins/QL.Films/AddFilm';
import LoginComponent from './pages/Users/LoginPage/LoginComponent';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* User Route */}
        <Route exact path='/login' component={LoginComponent} />


        {/* Admin Route */}
        <Route exact path='/admin/films' component={AdminFilm} />
        <Route exact path='/admin/films/addnew' component={AddFilm} />

        {/* Default Route */}
      </Switch>
    </Router>
  );
}

export default App;