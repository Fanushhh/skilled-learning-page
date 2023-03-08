
import './App.scss';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/Hero';
import Perks from './components/Perks/Perks';
import { data } from './data';

function App() {
  return (
    <main className="app">
      <Hero props={data}/>
      <Perks props={data}/>
      <Footer iconUrl={data.logoLight} button={data.getStartedBtn} />
    </main>
  );
}

export default App;
