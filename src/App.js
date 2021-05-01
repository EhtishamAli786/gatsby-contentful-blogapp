import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, HomePage, NotFound, Blog, BlogDetail } from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={BlogDetail} />
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
