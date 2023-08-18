import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card({
  name,
  species,
  gender,
  image,
  onClose,
  id,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, gender, image, id });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.contenedor}>
      <div>
        <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
        <img src={image} alt={name} className={style.imagen} />
      </div>
      <div className={style.description}>
        <Link to={`/detail/${id}`}>
          <h2 className={style.text}>{name}</h2>
        </Link>
        <h2 className={style.text}>{species}</h2>
        <h2 className={style.text}>{gender}</h2>
        {location.pathname !== "/favorites" && (
          <button
            className={style.button}
            onClick={() => {
              onClose();
              isFav && handleFavorite();
            }}
          >
            CLOSE
          </button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
