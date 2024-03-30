import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Router>
          <Link to='/movieList'>MovieList</Link>

          <Routes>  
            <Route path='/movieList' element={<MovieList />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
