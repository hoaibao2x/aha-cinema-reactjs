import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Resgister from './pages/Resgister/Resgister';
import LichChieu from './pages/LichChieu/LichChieu';
import Cumrap from './pages/CumRap/Cumrap';
import TinTuc from './pages/TinTuc/TinTuc';
import UngDung from './pages/UngDung/UngDung';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path={"/home"} component={Home}/>
        <HomeTemplate exact path={"/lichchieu"} component={LichChieu}/>
        <HomeTemplate exact path={"/cumrap"} component={Cumrap}/>
        <HomeTemplate exact path={"/tintuc"} component={TinTuc}/>
        <HomeTemplate exact path={"/ungdung"} component={UngDung}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"register"} component={Resgister}/>
        <HomeTemplate exact path={"/"} component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;