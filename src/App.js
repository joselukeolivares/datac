import logo from './assets/logo.png';
import './index.scss';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './MainRouter';
import {hot} from 'react-hot-loader'
import Login from './Login';
import Home from './pages/home/Home';


function App() {

  return (
       
          <BrowserRouter>                         
              <MainRouter></MainRouter>
          </BrowserRouter>

      
  );
}

export default hot(module)(App);
