
import './App.css';

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import React, { useState } from 'react';
import  {BrowserRouter as Router, Switch , Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");   //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
        setAlert({
      msg: message,
      type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }

 const toggleMode = () =>{
  if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode Has Been Enabled ", "success ");
     document.title = "TextUtils - Dark Mode";

     //show title
    //  setInterval(() => {
    //   document.title = "TextUtils is Amazing Mode";
    //  }, 2000);

    //  setInterval(() => {
    //   document.title = "Install TextUtils now";
    //  }, 1500);

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Disabled", "success ");
    document.title = "TextUtils - Light Mode";
 }

  }
  return (
    <>
{/* {<Navbar title="TEXTUTILS" aboutText="About TEXTUTILS"/>} 
{<Navbar/>} */}

<Router>
<Navbar title="TEXTUTILS" mode={mode}   toggleMode={toggleMode}/>
<Alert alert= {alert}/>

 <div className="container my-3">
 
 <Switch> 
  react using parsel so when we conding , write exact.

{/*users --> Component 1
/users/home --> --> Component 2 */}
          
         <Route exact path="/about">
            <About mode={mode} />
          </Route>
  
        <Route exact path="/"> 
        <Textform showAlert={showAlert} heading=" Try TextUtils - word counter ,character counter ,Remove extra spaces" mode={mode}/>  
       </Route>
    </Switch> 
  </div>
  </Router> 
  </>
   );
}

export default App;