import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Appbar from './components/Appbar.js';
import {home1 as Home1,home2} from './components/Home.js';
import Show from './components/Show.js';
import Pagenation from './components/Pagenation.js';


function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Signin":
        return(<div><Signin store = {store}/></div>);
      case "Signup":
        return(<div><Signup/></div>);
      case "Home":
        alert(home2());
        if(localStorage.getItem("role")==1 ||localStorage.getItem("role")==2)
        return(<div><Home1/></div>);
        else
        return(<div><Signin store = {store}/></div>);
      case "Show":
        return(<div><Show/></div>);
      case "Pagenation":
        if(localStorage.getItem("role")==2 )
        return(<div><Pagenation/></div>);
        else
        return(<div><Signin store = {store}/></div>);
      default:
        return(<div><Signin store = {store}/></div>);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>JFSD CLASS PROJECT</p>  
      </header>
      <div className='App-body'>
        <Appbar store={store}/>
        <Page />
      </div>
    </div>
  );
}

export default App;
