import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Proyects } from './components/proyects';
import { Techs } from './components/techs';
import { Footer } from './components/footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Proyects />
			<Techs />
			<Footer />
		</div>
	);
}

export default App;
