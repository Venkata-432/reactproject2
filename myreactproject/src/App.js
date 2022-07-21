import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';
import HomeComponent from './homepage';
import LoginComponent from './login';
import RegisterComponent from './register';

function App() {
  return (
   <div>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={HomeComponent}></Route>
              <Route path="/login" exact component={LoginComponent}></Route>
              <Route path="/register" exact component={RegisterComponent}></Route>
            </Switch>
          </div>
        </Router>
   </div>
  );
}

export default App;
