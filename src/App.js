import './App.css';
import 'reactstrap'
import Navi from "./layouts/Navi.jsx";
import Footer from "./layouts/Footer.jsx";
import Dashboard from './layouts/Dashboard'

function App() {
  return (
    <div>
      <Navi/>
      <Dashboard/>
       <Footer/>
    </div>
  );
}

export default App;
