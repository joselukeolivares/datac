import logo from './assets/logo.png';
import './index.scss';
import { Button, Tile,TextInput,Checkbox, Link } from 'carbon-components-react';
import {ArrowRight32} from '@carbon/icons-react'
import { useHistory } from 'react-router-dom';



function Login() {
  let history=useHistory()

  function handleLogin(){    
    history.push("/home")
  }
  

  return (
      <div className="Background">
  
        <div className='blackBanner'>
          <p>Data Coppel</p>
        </div>
            <div id="AppLoginContainer" className="App">
      <div className='login'>
        <img className='App-logo' src={logo}/>
        <br/>
        <h2 className="title">Inciar sesión en Data Coppel</h2>
      </div>
      <div className='form'>
      <br/>
        <div>Iniciar sesión</div>
        <br/>
        <div className="inputs">
        <TextInput type="email"placeholder="Correo electrónico"></TextInput>
         <br/>
         <br/>
        <TextInput id="password" type="password"
          placeholder="Contraseña"></TextInput>
          </div>  
          <br/>
          <br/>
      </div>
      <div>
        <Button onClick={handleLogin}>Continuar <ArrowRight32 /></Button>        
      </div>
      
          <br/>
          <br/>
      <Checkbox className="checkBs" labelText="Recordarme" id="check1"></Checkbox>      
    </div>
      </div>
  );
}

export default Login;
