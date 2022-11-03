import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminHome from './pages/Admins/AdminHome';
import Test from './pages/Admins/Test';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <AdminHome />
      <Switch>
        {/* Khi không có trang cụ thể thì mặc định địa chỉ */}
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;