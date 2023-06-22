import './App.css';
import CounterApp from './components/molecules/Counter';

function App() {
  return (
   
    <div className="App">
      <h1>hello this is</h1>
      <h1>{process.env.REACT_APP_NAME}</h1>
      <CounterApp/>
    </div>
  );
}

export default App;
