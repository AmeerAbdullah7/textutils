import logo from './logo.svg';
import './App.css';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ameersTEXTFORM from './Components/ameersTEXTFORM';
import Textform from './Components/ameersTEXTFORM';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Textform from './Components/Textform';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');
  const showAlert = (message, type) => {
    setAlert({ msg: message, typ: type });
    /*setTimeout(() => {
      setAlert(null);
    }, 2000);*/
  };

  const removeClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  };

  const toggleMode = cls => {
    console.log(cls);
    removeClass();

    document.body.classList.add('bg-' + cls);

    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert('darkMode has been enabled', 'success');
      document.title = 'Textutils Dark mode';
      /*  setInterval(() => {
        document.title = 'Textutils is the best appp ';
      }, 1000);
      setInterval(() => {
        document.title = 'dark is power';
      }, 1500);*/
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert('lightMode has been enabled', 'success');
      document.title = 'Textutils Light mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar
          titLe=" Ameer-utils"
          home="AMEERS-home"
          about="AMEERS-About"
          mode={mode}
          toggleMode={toggleMode}
          // toggleMode={Greenmode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              {' '}
              <Textform
                showAlert={showAlert}
                heading=" AMEER YOUR ENTER YOUR TEXT BELOW "
                mode={mode}
              />{' '}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
