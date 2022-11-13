import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminFilm from './pages/Admins/QL.Films/AdminFilm';
import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import LichChieu from './pages/LichChieu/LichChieu';
import Cumrap from './pages/CumRap/Cumrap';
import TinTuc from './pages/TinTuc/TinTuc';
import UngDung from './pages/UngDung/UngDung';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* User Route */}


        {/* Admin Route */}
        <Route exact path='/admin/films' component={AdminFilm} />

        {/* Default Route */}
        <HomeTemplate exact path={"/home"} component={Home}/>
        <HomeTemplate exact path={"/lichchieu"} component={LichChieu}/>
        <HomeTemplate exact path={"/cumrap"} component={Cumrap}/>
        <HomeTemplate exact path={"/tintuc"} component={TinTuc}/>
        <HomeTemplate exact path={"/ungdung"} component={UngDung}/>
        <Route exact path={"/dangnhap"} component={DangNhap}/>
        <Route exact path={"dangky"} component={DangKy}/>
        <HomeTemplate exact path={"/"} component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;