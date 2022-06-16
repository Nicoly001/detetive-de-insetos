import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'

function App() {
  return (
    <Router basename="https://nicoly001.github.io/detetive-de-insetos/">
      <Routes />
    </Router>
  );
}

export default App;
