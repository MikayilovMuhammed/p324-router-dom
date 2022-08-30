import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Comments from "./Comments";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/comments" component={Comments} />
        {/* <Route path="/about" exact component={() => <About />} /> */}
      </Switch>
    </Router>
  );
}

export default App;
