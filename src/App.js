//import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import CreateUserPage from "./pages/CreateUserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Nave";
import PrivateRoute from "./routes/PrivateRoute";
import authServices from "./services/authServices";
import Home from "./pages/home";
import myAccountPage from "./pages/myAccountPage";

function App() {
  const [isLogged, setIsLogged] = useState(!!authServices.getCurrentUser());

  return (
    <Router>
      <Nave
        authStatus={isLogged}
        handleLogout={() => {
          setIsLogged(false);
        }}
        handleLogin={(e) => {
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
              <CreateUserPage
                handleLoginFunc={() => {
                  setIsLogged(true);
                }}
              />
            </Route>
            <PrivateRoute
              path="/mydata"
              component={myAccountPage}
              permissions={"CLIENT, ADMIN"}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
