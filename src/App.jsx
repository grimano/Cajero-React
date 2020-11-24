import './App.css';
import AppGuardia from './App.guard';
import PrivateRoute from './Shared/Route/Private.route';
import PublicRoute from './Shared/Route/Public.route';

const App = ()=> {
  return (
    <AppGuardia>
      {
      ({hayCliente}) => hayCliente === true ? <PrivateRoute /> : <PublicRoute/>
      } 
    </AppGuardia>
  );
}

export default App;
