import './App.css';
import 'reactstrap'
import Navi from "./layouts/Navi.jsx";
import Dashboard from './layouts/Dashboard'

function App() {
  return (
    <div>
      <Navi/>
      <Dashboard/>
    </div>
  );
}

export default App;
