import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import UserComponent from './pages/Admins/QL.User/UserComponent';
import { AdminTemplate } from './templates/Admin/AdminTemplates';

import AdminFilm from './pages/Admins/QL.Films/AdminFilm';
import AddFilm from './pages/Admins/QL.Films/AddFilm';
import LoginComponent from './pages/Users/LoginPage/LoginComponent';
import { HomeTemplate } from './templates/Users/HomeTemplate';
import Home from './pages/Users/Home/Home';
import DangKy from './pages/DangKy/DangKy';
import LichChieu from './pages/LichChieu/LichChieu';
import Cumrap from './pages/CumRap/Cumrap';
import TinTuc from './pages/TinTuc/TinTuc';
import UngDung from './pages/UngDung/UngDung';
import EditFilm from './pages/Admins/QL.Films/EditFilm';

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
      </Switch>
    </Router>
  );
}

export default App;