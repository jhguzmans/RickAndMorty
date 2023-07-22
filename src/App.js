import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  let [chars_id, setchars_id] = useState([]);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const email = "jhguzmans@gmail.com";
    const password = "123asd";
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("El usuario o la contraseña son incorrectos");
    }
  }
  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (character) => {
    setchars_id((oldChars_id) => [...oldChars_id, character]);
    if (chars_id.includes(character)) {
      window.alert("El personaje buscado ya existe en la pantalla");
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
  };
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
