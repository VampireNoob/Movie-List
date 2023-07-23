import './App.css';
import { MovieList } from './MovieList';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>MovieListe</h1>
      </div>
      <MovieList />
      <div className='container'>
      <img className='App-logo' src= { logo }  alt="logo"/>
      </div>
    </div>
  );
}

export default App;
