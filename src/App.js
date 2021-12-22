
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
            <Form/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
