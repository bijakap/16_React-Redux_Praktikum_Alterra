// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./redux/store"
import Home from './Components/Home';
import AboutApp from "./Components/AboutApp/Index";
import AboutAuthor from "./Components/AboutAuthor";

function App() {

  const [Toggle, setToggle] = useState (false)
  
  const handleBtn = () => {
    if (Toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <div className="App">
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
      <div className="wrapper">
        <div className={Toggle ? "Sidebar active" : "Sidebar"}>
        <div>
            <button className="btn" onClick={() => {handleBtn()}}>Sidebar</button>
        </div>
        <div style={Toggle ? {display : "block"} : {display : "none"}}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AboutApp">AboutApp</Link></li>
              <li><Link to="/AboutAuthor">AboutAuthor</Link></li>
            </ul>
        </div>
            
        </div>
        <div className="Content">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/AboutApp' element={<AboutApp />} />
              <Route path='/AboutAuthor' element={<AboutAuthor />} />
              {/* <Route path='*' element={<Notfound />} /> */}
          </Routes>
        </div>        
      </div>
      </Router>
    </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
