import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Header/NavBar';
import DataFetch from './DataFetch';
import Footer from './Header/Footer';
import Home from './Header/Home';
import Produ from './Header/Products/produ';


function App() {
  return (
    <>
   <NavBar/>
   <Home/>
   <Produ/>
   <DataFetch/>
  
   <Footer/>
    </>
  );
}

export default App;
