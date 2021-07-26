import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import UserCreate from "./component/UserCreate";
import UserList from "./component/UserList";
import UserUpdate from "./component/UserUpdate";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Protected from "./component/Protected";
import Thanks from "./component/Thanks";

// Created Function Component
// Routing and Protecting Our Component
// Calling Component

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>

        {/*  */}
        <Route path="/login" render={(props) => <Login {...props} />}></Route>
        {/*  */}

        <Protected exact path="/update/:id" component={UserUpdate} />
        <Protected exact path="/create" component={UserCreate} />
        <Protected exact path="/list" component={UserList} />
        {/* <Protected exact path="/" component={Home} /> */}
      </Router>
    </div>
  );
}

export default App;
