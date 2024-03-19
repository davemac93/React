import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Accordian />
    </div>
  );
}

export default App;
