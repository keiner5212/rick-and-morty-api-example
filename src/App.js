import { useEffect, useState } from "react";
import "./App.css";
import ObtenerPersonajes from "./api/RickAndMortyApi";
import Card from "./components/Card";
// import Card from './components/Card';

function App() {
	const [Personajes, setPersonajes] = useState({
		info: {},
		results: [],
	});

	useEffect(() => {
		ObtenerPersonajes().then((res) => {
			setPersonajes(res);
		});
	}, []);

	return (
		<>
			<label>Total de resultados: {Personajes.info.count}</label>
			<section className="personajes">
				{Personajes.results.map((personaje) => (
					<Card
						key={personaje.id}
						name={personaje.name}
						gender={personaje.gender}
						image={personaje.image}
					/>
				))}
			</section>
		</>
	);
}

export default App;
