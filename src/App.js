import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import UserComponent from './pages/Admins/QL.User/UserComponent';
import { AdminTemplate } from './templates/Admin/AdminTemplates';
import AdminFilm from './pages/Admins/QL.Films/AdminFilm';
import AddFilm from './pages/Admins/QL.Films/AddFilm';
import LoginComponent from './pages/Users/Login/LoginComponent';
import { HomeTemplate } from './templates/Users/HomeTemplate';
import Home from './pages/Users/Home/Home';
import DangKy from './pages/Users/DangKy/DangKy';
import LichChieu from './pages/Users/LichChieu/LichChieu';
import Cumrap from './pages/Users/CumRap/Cumrap';
import TinTuc from './pages/Users/TinTuc/TinTuc';
import UngDung from './pages/Users/UngDung/UngDung';
import EditFilm from './pages/Admins/QL.Films/EditFilm';
import AddUser from './pages/Admins/QL.User/AddUser';


export const history = createBrowserHistory();

function App() {
  return (
   
    
    <Router history={history}>
      <Switch>
        {/* User Route */}
        <Route exact path='/login' component={LoginComponent} />


        {/* Admin Route */}
        <AdminTemplate exact path='/admin/films' component={AdminFilm} />
        <AdminTemplate exact path='/admin/films/addnew' component={AddFilm} />
        <AdminTemplate exact path='/admin/films/edit/:id' component={EditFilm} />

        {/* Default Route */} 
        <HomeTemplate exact path={"/home"} component={Home}/>
        <HomeTemplate exact path={"/lichchieu"} component={LichChieu}/>
        <HomeTemplate exact path={"/cumrap"} component={Cumrap}/>
        <HomeTemplate exact path={"/tintuc"} component={TinTuc}/>
        <HomeTemplate exact path={"/ungdung"} component={UngDung}/>
        <Route exact path={"dangky"} component={DangKy}/>
        <HomeTemplate exact path={"/"} component={Home}/>
        <AdminTemplate exact path='/admin/users' component={UserComponent} />
        <AdminTemplate exact path='/admin/users/adduser' component={AddUser} />
      </Switch>
    </Router>
  );
}

export default App;