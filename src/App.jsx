
import './App.scss';
import Hero from './components/Hero/Hero';
import Perks from './components/Perks/Perks';
import { data } from './data';

function App() {
  return (
    <main className="app">
      <Hero props={data}/>
      <Perks props={data}/>
    </main>
  );
}

export default App;
