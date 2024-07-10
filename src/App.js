
import './App.css';
import Comp1 from './comp1';
import {HashRouter,Route,Routes} from 'react-router-dom' 

function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path='/' element={ <Comp1/>}>

      </Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
