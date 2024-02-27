import "./Card.css"

function Card({ name, gender, image }) {
	return (
		<div className="card">
			<img src={image} alt={"imagen de " + name}
			></img>
			<label>{name}</label>
			<label>{gender}</label>
		</div>
	);
}

export default Card;
