//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateUser from "./components/CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Nave";
import PrivateRoute from "./routes/PrivateRoute";
import authServices from "./services/authServices";
import Home from "./pages/home";

function App() {
  const [isLogged, setIsLogged] = useState(!!authServices.getCurrentUser());
  console.log("renderizou App", isLogged);

  return (
    <Router>
      <Nave
        authStatus={isLogged}
        handleLogout={() => {
          setIsLogged(false);
        }}
        handleLogin={() => {
          setIsLogged(true);
        }}
      />
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/createuser">
              <CreateUser />
            </Route>
            <PrivateRoute
              path="/mydata"
              component={<h1>My data private!!!</h1>}
              permissions={"CLIENT, ADMIN"}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
