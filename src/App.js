import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Main></Main>
    </div>
  );
}

export default App;
