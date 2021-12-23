
import Form from './components/Form';
import MapFromGoogle from './components/MapFromGoogle';
import PlacesContextProvider from './context/PlacesContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <PlacesContextProvider>
      <Router>
        <Switch>
          <Route path='/' exact>
            <div className='d-flex align-items-center flex-column'>
              <Form/>
              <MapFromGoogle/>
            </div>
          </Route>
        </Switch>
      </Router>
    </PlacesContextProvider>

  );
}

export default App;
