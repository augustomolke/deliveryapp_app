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
import RestaurantsPage from "./pages/RestaurantsPage";
import ResourceDetails from "./components/ResourceDetails";
import CreateProdPage from "./pages/createProd";
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
            <Route exact path="/" component={Home} />

            <Route path="/createuser">
              <CreateUserPage
                handleLoginFunc={() => {
                  setIsLogged(true);
                }}
              />
            </Route>
            <PrivateRoute
              path="/myaccount"
              component={myAccountPage}
              permissions={"CLIENT, ADMIN"}
            />

            <Route exact path="/restaurants" component={RestaurantsPage} />

            <PrivateRoute
              path="/restaurants/:id"
              component={ResourceDetails}
              permissions={"CLIENT, ADMIN"}
            />

            <Route path="/createprod" component={CreateProdPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
