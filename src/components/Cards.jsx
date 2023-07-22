import Card from "./Card";
import style from "./Cards.module.css";

function Cards({ characters, onClose }) {
  return (
    <div className={style.Cards}>
      {characters.map(({ name, id, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={() => onClose(id)}
          ></Card>
        );
      })}
    </div>
  );
}
export default Cards;
