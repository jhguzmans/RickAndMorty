import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      //  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.container}>
      <h1>Nombre: {character?.name}</h1>
      {console.log(character?.name)}
      <p>Estatus: {character?.status}</p>
      <p>Especie: {character?.species}</p>
      <p>Origen: {character?.origin?.name}</p>
      <p>Genero: {character?.gender}</p>
      <img src={character?.image} alt={character?.name} />
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};
export default Detail;
