import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import UserComponent from './pages/Admins/QL.User/UserComponent';
import { AdminTemplate } from './templates/Admin/AdminUser/AdminUserTemplates';


export const history = createBrowserHistory();

function App() {
  return (
   
    <Router history={history}>
      <Switch>
      <AdminTemplate exact path='/admin-user' component={UserComponent} />
      </Switch>
    </Router>
  );
}

export default App;