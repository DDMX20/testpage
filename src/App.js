import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content/Content";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        {/* <Route path="/blog/:slug">
          <BlogPost />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
