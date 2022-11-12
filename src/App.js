import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminFilm from './pages/Admins/QL.Films/AdminFilm';
import AddFilm from './pages/Admins/QL.Films/AddFilm';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* User Route */}


        {/* Admin Route */}
        <Route exact path='/admin/films' component={AdminFilm} />
        <Route exact path='/admin/films/addnew' component={AddFilm} />

        {/* Default Route */}
      </Switch>
    </Router>
  );
}

export default App;