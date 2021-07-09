import Home from './pages/Home/Home';
import {Switch, Route } from 'react-router-dom';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Dashboard from './pages/Dasboard/Dashboard';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
