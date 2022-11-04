import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminHome from './pages/Admins/AdminHome';
import { AdminTemplate } from './templates/Admins/AdminTemplate';
import PhimListComponent from './pages/Admins/QL.Films/PhimListComponent';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <AdminHome /> */}
      <Switch>
        {/* Khi không có trang cụ thể thì mặc định địa chỉ */}
        <AdminTemplate exact path='/admin/films' component={PhimListComponent} />
        <Route exact path='/admin' component={AdminHome} />
      </Switch>
    </Router>
  );
}

export default App;