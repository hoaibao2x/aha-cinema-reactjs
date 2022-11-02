import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminHome from './pages/Admins/AdminHome';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/admin" component={AdminHome} />
        {/* Khi không có trang cụ thể thì mặc định địa chỉ */}
      </Switch>
    </Router>
  );
}

export default App;