import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import UserComponent from './pages/Admins/QL.User/UserComponent';
import { AdminTemplate } from './templates/Admin/AdminTemplates';
import AdminFilm from './pages/Admins/QL.Films/AdminFilm';
import AddFilm from './pages/Admins/QL.Films/AddFilm';
import LoginComponent from './pages/Users/Login/LoginComponent';
import { HomeTemplate } from './templates/Users/HomeTemplate';
import Home from './pages/Users/Home/Home';
import Cumrap from './pages/Users/CumRap/Cumrap';
import EditFilm from './pages/Admins/QL.Films/EditFilm';
import RegisterComponent from './pages/Users/Register/RegisterComponent';
import AdminPage from './pages/Admins/AdminPage';
import Detail from './pages/Users/Detail/Detail';
import EditUser from "./pages/Admins/QL.User/EditUser";
import AddNewUser from './pages/Admins/QL.User/AddUser2';
import Checkout from './pages/Users/Checkout/Checkout';
import CheckoutTemlate from './templates/Users/CheckoutTemlate'
import Loading from './components/Loading/Loading';
import Profile from './pages/Users/Profile/Profile';
import ShowTime from './pages/Admins/ShowTime';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        {/* Admin Route */}
        <AdminTemplate exact path='/admin' component={AdminPage} />
        <AdminTemplate exact path='/admin/films' component={AdminFilm} />
        <AdminTemplate exact path='/admin/films/addnew' component={AddFilm} />
        <AdminTemplate exact path='/admin/films/edit/:id' component={EditFilm} />
        <AdminTemplate exact path='/admin/films/showtime/:id/:tenPhim' component={ShowTime} />
        <AdminTemplate exact path='/admin/users' component={UserComponent} />
        <AdminTemplate exact path='/admin/users/adduser' component={AddNewUser} />
        <AdminTemplate exact path='/admin/users/edituser/:id' component={EditUser} />

        {/* User Route */}
        <Route exact path='/login' component={LoginComponent} />
        <Route exact path='/register' component={RegisterComponent} />
        <HomeTemplate exact path='/profile' component={Profile} />
        <HomeTemplate exact path={"/home"} component={Home} />
        <HomeTemplate exact path={'/detail/:id'} component={Detail} />
        <HomeTemplate exact path={"/cumrap"} component={Cumrap} />
        <CheckoutTemlate exact path='/checkout/:id' component={Checkout} />

        {/* Default Route */}
        <HomeTemplate exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;