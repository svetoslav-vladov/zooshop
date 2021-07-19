import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./Routes";
import Footer from './components/Footer/Footer';

function App() {
  return(
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
